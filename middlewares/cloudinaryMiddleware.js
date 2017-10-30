const axios = require('axios');
const cloudinary = require('cloudinary');

module.exports = (req, res) => {
  cloudinary.config({
    cloud_name: 'flipfarm',
    api_key: '218881675273479',
    api_secret: 'bftDZSPLb8VUJZsP_j1KKdiXuLQ'
  });
  cloudinary.uploader
    .upload_stream(result => {
      axios({
        url: '/api/photo', //API endpoint that needs file URL from CDN
        method: 'post',
        data: {
          url: result.secure_url,
          name: req.body.photo
        }
      })
        .then(response => {
          res.status(200).json(response.data);
          console.log(response);
        })
        .catch(error => {
          res.status(500).json(error.response);
          console.log(error);
        });
    })
    .end(req.file.buffer);
};
