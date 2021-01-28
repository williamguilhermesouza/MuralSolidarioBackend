const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

const port = 3000;

const server = http.Server(app);

mongoose.connect('mongodb+srv://bill:NM3BvKNNMRtA3T9@cluster0.6lvwc.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


server.listen(port);
