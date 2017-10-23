const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const requireLogin = require('../middlewares/requireLogin');

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
};
