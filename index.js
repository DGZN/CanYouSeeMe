#!/usr/bin/env node
const os = require("os");
const npm = require("npm");
const ngrok = require("ngrok");
const connectToMe = require("./src/connectToMe");
const colors = require("colors");
const qrify = require("./src/qrify");

let spawn = require("child_process").spawn;

let cmd = "npx";

const isWindows = async () => {
  return os.type().indexOf("Win") > -1;
};

const start = async () => {
  let url = await connectToMe()
  let win = await isWindows();
  if (win) {
    cmd = "npx.cmd";
  }
  let script = spawn(cmd, ["http-server"]);
  script.stdout.on("data", (data) => {
    console.log(data.slice(0, data.length - 1).toString("utf8").bold);
  });
  console.log("\n          <!>::WARNING::<!>        \n".bold.red);
  console.log("  YOU ARE NOW PUBLICY ACCESSIBLE     ".bold.white.bgRed);
  console.log(`     ${url}   `.bold.white.bgRed);
  console.log(`        http://127.0.0.1:4040        `.bold.white.bgRed);
  console.log(new qrify(url).ascii.bold.blue);

  process.on("SIGINT", function () {
    script.kill();
    ngrok.kill();
  });
};

start();



