
const npm = require('npm')
const ngrok = require('ngrok')
const connectToMe = require('./src/connectToMe');
const QRIFY = require('./src/qrify');

npm.load(() => {
  npm.run('serve');
  connectToMe().then((url) => {
    console.log(new QRIFY(url).ascii)
  });
})

process.on("SIGINT", function () {
  ngrok.kill();
});