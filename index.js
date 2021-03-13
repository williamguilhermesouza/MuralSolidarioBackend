const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

const port = 3333;

const server = http.Server(app);

mongoose.connect('mongodb+srv://bill:8MXRPmgecf2mCAK@cluster0.6lvwc.mongodb.net/ads?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


server.listen(port);
