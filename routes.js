const {Router} = require('express');
const Ad = require('./models/Ad');

const routes = Router();

const exampleAd = new Ad(1, 'william', 'rua riodades', '999999', 'doaçao de cesta basica');

routes.get("/", (req, res) => {
  res.status(200).send([exampleAd, exampleAd]);
});

routes.get('/ad/:id', (req, res) => {res.send('ok')});

module.exports = routes;
