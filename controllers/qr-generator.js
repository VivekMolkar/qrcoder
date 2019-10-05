'use strict';

const qrcode = require('qrcode');

async function generateCode(text, fg = '#000', bg = '#FFF') {
  const res = await qrcode.toDataURL(text, {
    version: 5,
    color: {
      dark: fg,
      light: bg
    }
  });
  return res;
}


module.exports = {
  generateCode
};
