const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const Photo = mongoose.model('Photo');
const Offer = mongoose.model('Offer');
const requireLogin = require('../middlewares/requireLogin');
const jimpMiddleware = require('../middlewares/jimpMiddleware');
const multerMiddleware = require('../middlewares/multerMiddleware');
const axios = require('axios');
const cloudinary = require('cloudinary');

//const cloudinaryMiddleware = require('../middlewares/cloudinaryMiddleware');
const cloudinaryMiddlewareAsync = require('../middlewares/cloudinaryMiddlewareAsync');

module.exports = app => {
  app.post('/api/items', requireLogin, async (req, res) => {
    const { name, description, url } = req.body;
    //console.log(req.body);

    const item = new Item({
      name,
      description,
      _user: req.user.id,
      picture: url,
      dateCreated: Date.now()
    });

    try {
      await item.save();
      req.user.submittedItems.push(item);
      const user = await req.user.save();

      res.send(user);
      //console.log(item);
    } catch (err) {
      res.status(400).send(err);
    }

    //console.log(item);
  });

  app.post('/api/photo', multerMiddleware, jimpMiddleware, (req, res) => {
    cloudinary.config({
      cloud_name: 'flipfarm',
      api_key: '218881675273479',
      api_secret: 'bftDZSPLb8VUJZsP_j1KKdiXuLQ'
    });
    cloudinary.uploader
      .upload_stream(result => {
        //console.log(result);
        res.send(result.url);
      })
      .end(req.file.buffer);
  });

  app.get('/api/get_all_items', async (req, res) => {
    const items = await Item.find({});
    //console.log(items);
    res.send(items);
  });

  app.get('/api/get_user_items', requireLogin, async (req, res) => {
    //console.log(req);
    const items = await Item.find({ _user: req.user.id });
    //.select('-c -d')
    //
    //.select({recipients:false})
    //to exclude a category in an item
    //console.log(items);
    //console.log(items);
    res.send(items);
  });

  app.get('/api/user_received_offers', requireLogin, async (req, res) => {
    const offers = await Offer.find({ _offerTo: req.user.id });
    res.send(offers);
  });

  app.get('/api/user_sent_offers', requireLogin, async (req, res) => {
    const offers = await Offer.find({ _offerFrom: req.user.id });
    res.send(offers);
  });

  app.get('/api/offer_by_item', requireLogin, async (req, res) => {
    const { itemID } = req.body;
    const offers = await Offer.find({ _itemWanted: itemID });
    res.send(offers);
  });

  app.post('/api/make_offer', requireLogin, async (req, res) => {
    const { _offerTo, _offerFrom, _itemOffered, _itemWanted } = req.body;

    const offerRecord = new Offer({
      _offerTo: _offerTo,
      _offerFrom: req.user.id,
      _itemOffered: _itemOffered,
      _itemWanted: _itemWanted,
      dateCreated: Date.now()
    });

    await offerRecord.save();
    const itemWanted = await Item.findOne({ _id: _itemWanted });
    itemWanted.offers.push(offerRecord);
    const updatedItem = await itemWanted.save();
    res.send(updatedItem);
  });

  app.post('api/accept_offer', requireLogin, async (req, res) => {
    const { acceptance } = req.body;

    const offer = await Offer.find({ _id: acceptance.offer.id }); //check this
    offer.accepted = false;
    offer.dateAccepted = Date.now();
    await offer.save();

    const itemAccepted = await Item.find({ _id: acceptance.offer.itemWanted });
    itemAccepted.traded = true;
    itemAccepted.tradedTo = acceptance.offer.offerFrom;
    itemAccepted.tradedFor = acceptance.offer.itemOffered;
    itemAccepted.save();

    const itemOffered = await Item.find({ _id: acceptance.offer.itemOffered });
    itemOffered.traded = true;
    itemOffered.tradedTo = acceptance.offer.offerTo;
    itemOffered.tradedFor = acceptance.offer.itemWanted;
    itemOffered.save();

    res.send(offer);
  });
};
