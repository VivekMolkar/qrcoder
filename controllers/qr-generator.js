'use strict';

const qrcode = require('qrcode');

async function generateCode(text) {
  const res = await qrcode.toDataURL(text, { version: 5 });
  return res;
}

module.exports = {
  generateCode
};
