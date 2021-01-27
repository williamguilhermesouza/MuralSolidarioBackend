const express = require('express');
const Ad = require('./models/Ad');
const app = express();

const exampleAd = new Ad(1, 'william', 'rua riodades', '999999', 'doaçao de cesta basica');

app.get("/", (req, res) => {
  res.status(200).send([exampleAd, exampleAd]);
});

app.use(express.json());

module.exports = app;
