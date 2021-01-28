const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    endereco: String,
    contato: String,
    descricao: String
});


module.exports = mongoose.model('Ad', AdSchema);