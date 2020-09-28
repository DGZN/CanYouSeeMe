const qrcode = require("qrcode-generator");

const qr = qrcode(4, 'M');

class QRIFY {
  constructor(data, type = "ascii") {
    if (!data || data.length < 1) {
      return this;
    }
    qr.addData(data);
    qr.make();
    if (!type || typeof this[type] !== 'function') {
      return console.error(
        `[!] ${type} is not recognized type, use one of the following ${this.types().join(
          " "
        )} or "all"`
      );
    }
    return this.types(type);
  }

  types(type) {
    if (!type || !this[type]) {
      return ["ascii", "svg", "img", "url", "all"];
    }
    return this[type]();
  }

  all() {
    return {
      ascii: qr.createASCII(),
      svg: qr.createSvgTag(),
      img: qr.createSvgTag(),
      url: qr.createDataURL(),
    };
  }

  ascii() {
    let ascii = qr.createASCII();
    return { ascii };
  }

  svg() {
    let svg = qr.createSvgTag();
    return { svg };
  }

  img() {
    let img = qr.createSvgTag();
    return { img };
  }

  url() {
    let url = qr.createDataURL();
    return { url };
  }
}

module.exports = QRIFY