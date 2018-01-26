const jimp = require('jimp');
const uuid = require('uuid');

module.exports = async (req, res, next) => {
  //check if there is no new file to resize
  if (!req.file) {
    console.log('no file');
    next();
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;

  const photo = await jimp.read(req.file.buffer);
  //await photo.resize(800, jimp.AUTO);
  await photo.resize(800, 800);
  await photo.write(`./public/uploads/${req.body.photo}`);
  next();
  //req.body
  //console.log(req.files);
};
