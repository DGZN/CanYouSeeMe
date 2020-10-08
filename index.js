#!/usr/bin/env node
const os = require("os");
const path = require("path");
const clear = require("clear");
const npm = require("npm");
const ngrok = require("ngrok");
const url = require(path.join(__dirname, 'src/url'));
const colors = require("colors");
const qrify = require(path.join(__dirname, 'src/qrify'));

let spawn = require("child_process").spawn;
let optPort = process.argv.indexOf("--port");

const isWindows = async () => {
  return os.type().indexOf("Win") > -1 ? true : false;
};

const localPort = () => {
  return optPort > -1 ? process.argv[optPort + 1] : 8080;
};

const tunnelInfo = (url) => {
  return `  [${url}]  `.green.bold.bgBlack;
};

let cmd = "npx";

const start = async () => {
  clear();
  if (await isWindows()) {
    cmd = "npx.cmd";
  }
  let ngrokURL = await url(localPort());
  let script = spawn(cmd, [`http-server ${localPort()}`]);
  script.stdout.on("data", (data) => {
    console.log(data.slice(0, data.length - 1).toString("utf8"));
  });
  console.log("\n           <✓> ONLINE <✓>            \n".black.bgGreen);
  console.log(new qrify(ngrokURL).ascii.bold.blue);
  console.log(tunnelInfo(ngrokURL));
  console.log('     '.bgBlack.white)
  process.on("SIGINT", function () {
    script.kill();
    ngrok.kill();
  });
};

start();
