var express = require('express');
var router = express.Router();

let generateQR = require('../controllers/qr-generator').generateCode;

/* GET home page. */
router.get('/', async (req, res, next) => {
  let image = await generateQR('Enter text here to share.');
  res.render('index', { title: 'QRCode Generator App', image: image });
});

router.post('/', async (req, res, next) => {
  let text = (req.body.inputText || '').trim();
  let image = await generateQR(text);
  res.render('index', { title: 'QRCode Generator App', image: image });
});

module.exports = router;
