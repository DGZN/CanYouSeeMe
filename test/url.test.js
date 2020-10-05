const ConnectString = require("../src/url");

const chai = require("chai");
chai.should();
const expect = chai.expect;

let url;

describe('url', () => {

  beforeEach(async () => {
    url = await ConnectString()
  });

  it('Should create unique urls', async () => {
    let _url = await ConnectString();
    _url.should.not.equal(url);
  });
});