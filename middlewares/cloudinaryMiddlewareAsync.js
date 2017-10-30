const axios = require('axios');
const cloudinary = require('cloudinary');

module.exports = (req, res) => {
  //const filePath = `./public/uploads/${req.body.photo}`;

  cloudinary.config({
    cloud_name: 'flipfarm',
    api_key: '218881675273479',
    api_secret: 'bftDZSPLb8VUJZsP_j1KKdiXuLQ'
  });

  cloudinary.v2.uploader.upload(req.file, function(result) {
    console.log(result);
  });
};
