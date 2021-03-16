const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const formData = require('express-form-data');
const app = express();

app.use(cors());
app.use(express.json());
app.use(formData.parse());
app.use(routes);

module.exports = app;
