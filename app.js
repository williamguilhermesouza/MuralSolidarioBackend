const express = require('express');
const Ad = require('./models/Ad');
const app = express();

const exampleAd = {
  Name: 'William',
  Address: 'rua riodades',
  Contact: '99999999'
};

app.get("/", (req, res) => {
  res.status(200).send([exampleAd]);
});

module.exports = app;
