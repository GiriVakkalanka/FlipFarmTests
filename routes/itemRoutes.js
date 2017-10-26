const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const Photo = mongoose.model('Photo');
const requireLogin = require('../middlewares/requireLogin');
const jimpMiddleware = require('../middlewares/jimpMiddleware');
const multerMiddleware = require('../middlewares/multerMiddleware');

module.exports = app => {
  app.post('/api/items', requireLogin, async (req, res) => {
    const { name, description } = req.body;

    const item = new Item({
      name,
      description,
      _user: req.user.id,
      dateCreated: Date.now()
    });

    try {
      await item.save();
      const user = await req.user.save();

      res.send(user);
      //console.log(item);
    } catch (err) {
      res.status(400).send(err);
    }

    console.log(item);
  });

  app.post('/api/photo', multerMiddleware, jimpMiddleware, async (req, res) => {
    const photo = new Photo({
      photo: req.body.photo
    });

    try {
      await photo.save();
      //const user = await req.user.save();

      res.send(req.body.photo);
      //console.log(item);
    } catch (err) {
      res.status(400).send(err);
    }
    //const formData = req.file
    //const user = await req.user.save();
  });
};
