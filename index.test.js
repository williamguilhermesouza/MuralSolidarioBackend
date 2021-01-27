const request = require('supertest');
const app = require('./app');
const Ad = require('./models/Ad');

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("it should response JSON information", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.type).toBe('application/json');
      });
  });

  test("it should response an array of Ad Object", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.text).toContain('Name', 'Address', 'Contact');
      });
  });
});
