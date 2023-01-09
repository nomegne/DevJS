//const request = require("supertest")
//const app = require("../app.js")

import request from "supertest";
import app from "..app.js";

describe("Test the root path", () => {
    test("It should respond to the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Test the api/contact path", () => {
    test("Second test", done => {
        request(app)
            .get("/api/contacts")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("Should return no key in response", done => {
        request(app)
            .get("/api/contacts")
            .then(response => {
                expect(response.body[0].nom).toBe("Xavier");
                done();
            });
    });
});
