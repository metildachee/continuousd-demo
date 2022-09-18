const express = require("express");

const app = express();
let port = 3000;
const configPath = "config.yml";

function readConfig(inputPath) {
  yaml = require("js-yaml");
  fs = require("fs");
  obj = yaml.load(fs.readFileSync(inputPath, { encoding: "utf8" }));

  console.log(`finished reading configuration ${obj}`);
  port = obj.port ? obj.port : port;
  return obj;
}

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  readConfig(configPath);
  console.log(`application listening at ${port}`);
});
