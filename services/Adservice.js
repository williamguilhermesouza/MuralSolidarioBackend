const Ad = require('../models/Ad');
const fs = require('fs');


module.exports = {
    async getAll(request, response) {
        const ads = await Ad.find();
        return response.json(ads);
    },

    async getOne(request, response) {
        const ad = await Ad.findById(request.query.id);
        return response.json(ad);
    },

    async create(request, response) {
        const { id, nome, endereco, contato, descricao, img } = request.body;
        const ad = await Ad.create({
            id,
            nome,
            endereco,
            contato,
            descricao,
            img,
        });

        return response.json(ad);
    },

    async update(request, response) {
        const { id, nome, endereco, contato, descricao, img } = request.body;
        const ad = await Ad.findByIdAndUpdate(request.query.id, { id, nome, endereco, contato, descricao, img });
        return response.json(ad);
    },

    async delete(request, response) {
        const ad = await Ad.deleteOne(request.query.id);
        return response.json(ad);
    }
}
