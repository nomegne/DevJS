
import request from "supertest";
import app from "../app.js";

describe("Test the root path", () => {
    test("should respond to the GET method", () => {
        request(app)
            .get("/")
            .then((response) => {
                expect(response.statusCode).toBe(200);
            });
    });
    test(" should respond with 404 to GET /coucou", () => {
        request(app)
            .get("/coucou")
            .then((response) => {
                expect(response.statusCode).toBe(404);
            });
    });
});
describe("Test the /api/contacts path", () => {
    test("should return code status 200", () => {
        request(app)
            .get("/api/contacts")
            .then((response) => {
                // console.log(response)
                expect(response.statusCode).toBe(200);
                // expect(response.body[0].nom).toBe("Xavier");
            });
    });
    test("should return nom key in response", () => {
        request(app)
            .get("/api/contacts")
            .then((response) => {
                // console.log(response)
                expect(response.body[0].nom).toBe("Xavier");
            });
    });
});


//test de création d'un nouveau contact 
describe("Test the /api/contacts path", () => {
    test("should return code status 200", async () => {
        const query = {
            id: "3",
            nom: "muriane",
            telephone: "0749298543"
        }
        await request(app)
            .post("/api/contacts")
            .set('Content-type', 'application/json')
            .send(query)
            .then((response) => {
                expect(response.statusCode).toBe(201);
            });
    });
});


//test de création d'un nouveau contact
// describe("Test the /api/contacts path", () => {
//     test("should return the id", async () => {
//         const query = {
//             id: "3",
//             nom: "muriane",
//             telephone: "0749298543"
//         }
//         await request(app)
//             .post("api/contacts")
//             .send(query)
//             .then((response) => {
//                 expect(response.body.id).toBe("3");
//             });
//     });
// });


/*
test("should return the nale", () => {
    request(app)
        .post("api/contacts")
        .then((response) => {
            expect(response.body[3].nom).toBe("muriane");
        });
});*/

