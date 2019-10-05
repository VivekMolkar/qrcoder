var express = require('express');
var router = express.Router();

let generateQR = require('../controllers/qr-generator').generateCode;
let config = require('../config');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let image = await generateQR('Enter text here to share.');
  res.render('index', {
    title: 'QRCode Generator App',
    image: image,
    year: new Date().getFullYear(),
    version: config.version
  });
});

router.post('/', async (req, res, next) => {
  let text = (req.body.inputText || 'Enter text here to share.').trim();
  let fgColor = req.body.fgColor;
  let bgColor = req.body.bgColor;
  let image = await generateQR(text, fgColor, bgColor);
  res.render('index', {
    title: 'QRCode Generator App',
    image: image,
    year: new Date().getFullYear(),
    version: config.version
  });
});

module.exports = router;
