const QRIFY = require('../src/qrify');

const chai = require("chai");
chai.should();
const expect = chai.expect;

describe('QRIFY', () => {

  let qr;

  beforeEach(() => {
    qr = new QRIFY('test data');
  });

  describe('QRIFY()', () => {
    it('Should be an instance of QRIFY', () => {
      new QRIFY().should.be.instanceOf(QRIFY);
    });
    it('Should return ascii as if instantiated without type parameter', () => {
      qr.should.be.instanceOf(Object);
      qr.should.have.property('ascii')
    });
  });

  describe('@types', () => {
    let qr = new QRIFY();
    it('Should return an array of accepted types if called without a parameter', () => {
      qr.types().should.be.a("array");
      qr.types().should.eql(["ascii", "svg", "img", "url", "all"]);
    });
  });
});