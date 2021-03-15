const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    contato: String,
    descricao: String,
    img: {
        data: Buffer,
        contentType: String
    }
});


module.exports = mongoose.model('Ad', AdSchema);