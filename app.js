import express from "express";
import * as controller from "./controller.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("Hello EPSI");
});

app.get("/api/contacts", controller.getContacts);

app.get("/api/contacts/:id", controller.getContact);

app.post("/api/contacts", controller.postContact);

app.put("/api/contacts/:id", controller.updateContact);

export default app;