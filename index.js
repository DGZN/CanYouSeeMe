#!/usr/bin/env node
const os = require("os");
const npm = require("npm");
const ngrok = require("ngrok");
const connectToMe = require("./src/connectToMe");
const QRIFY = require("./src/qrify");

let spawn = require("child_process").spawn;

let cmd = "npx";

const isWindows = async () => {
  return os.type().indexOf("Win") > -1;
};

const connect = async () => {
  let win = await isWindows();
  if (win) {
    cmd = "npx.cmd";
  }
  let script = spawn(cmd, ["http-server"]);
  script.stdout.on("data", (data) => {
    console.log(data.slice(0, data.length - 1).toString("utf8"));
  });
  connectToMe().then((url) => {
    console.log(new QRIFY(url).ascii);
  });
  process.on("SIGINT", function () {
    script.stdin.pause();
    script.kill();
    ngrok.kill();
  });
};

connect();
