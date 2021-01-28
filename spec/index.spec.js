const request = require('supertest');
const app = require('../app');

const Adexample = { 
    nome: 'juca',
    endereco: 'rua3',
    contato: '99999',
    descricao: 'cestas basicas'
}

describe('Super test suite', () => {

    it('Test if / path is responding with 200', (done) => {
        request(app)
            .get('/')
            .expect(done(200), done);
    });

    it('Test if /ad/id is responding with 200', (done) => {
        request(app)
            .get('/ad/1')
            .expect(done(200), done);
    });

    it('Test if /ad/new is responding with 200', (done) => {
        request(app)
            .post('/ad/new', Adexample)
            .expect(done(200), done);
    });

    it('Test if /ad/id/update is responding with 200', (done) => {
        request(app)
            .post('/ad/1/update', Adexample)
            .expect(done(200), done);
    });

    it('Test if /ad/id/delete is responding with 200', (done) => {
        request(app)
            .post('/ad/1/delete')
            .expect(done(200), done);
    });

    it('Test if random path is returning 404', (done) => {
        request(app)
            .get('/randomxxx')
            .expect(done(404), done);
    });
})