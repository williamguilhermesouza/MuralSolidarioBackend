const Ad = require('../models/Ad');
const qs = require('querystring');


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
        const img = Object.values(request.files)[0];
        const body = Object.values(request.body);
        const [nome, endereco, contato, descricao ] = body;

          const ad = await Ad.create({
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
