const {Router} = require('express');
const AdService = require('./services/Adservice');

const routes = Router();

routes.get("/", AdService.getAll);

routes.get('/ad/:id', AdService.getOne);

routes.post('/ad/new', AdService.create);

routes.put('/ad/:1/update', AdService.update);

routes.delete('/ad/:1/delete', AdService.delete);

module.exports = routes;
