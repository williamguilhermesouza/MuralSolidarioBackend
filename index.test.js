const { response } = require('express');
const request = require('supertest');
const app = require('./app');
const Admock = require('./models/Admock');

const exampleAd = new Admock(1, 'william', 'rua riodades', '999999', 'doaçao de cesta basica');

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
        expect(response.text).toContain('Name', 'Address', 'Contact', 'Description');
      });
  });
});

describe("Test the ad path", () => {
  test("it should response the ad route with code 200", () => {
    return request(app)
      .get("/ad/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("it should return the ad with id 1", () => {
    return request(app)
      .get("/ad/1")
      .then(response => {
        expect(response.text).toContain("1");
      });
  });

  test("it should return the create route with status 200", () => {
    return request(app)
      .post("/ad/new", exampleAd)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

 
  test("it should return the created ad", () => {
    return request(app)
      .post("/ad/new", exampleAd)
      .then(response => {
        expect(response).toBe(exampleAd);
      });
  });

  test("it should return the updated ad route with code 200", () => {
    return request(app)
      .put("/ad/1/update", exampleAd)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });


  test("it should return the updated ad", () => {
    return request(app)
      .put("/ad/1/update", exampleAd)
      .then(response => {
        expect(response).toBe(exampleAd);
      });
  });

  test("it should return the deleted ad with status 200", () => {
    return request(app)
      .delete("/ad/1/delete", exampleAd)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("it should return the deleted ad", () => {
    return request(app)
      .delete("/ad/1/delete", exampleAd)
      .then(response => {
        expect(response).toBe(exampleAd);
      });
  });
});
