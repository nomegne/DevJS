import { contacts } from "./data.js";
import * as service from "./service.js";

function getContacts(req, res) {
    res.status(200).json(service.getContacts());
}

function getContact(req, res) {
    const id = req.params.id;
    const contact = service.getContact(id);
    res.status(200).json(contact);
}

function postContact(req, res) {

    const newContact = {
        id: req.body.id,
        nom: req.body.nom,
        telephone: req.body.telephone
    }
    contacts.push(newContact);
    res.status(201).json(newContact);
}

function updateContact(req, res) {
    //const id = Number(contacts.params.id)
    const id = req.params.id
    const index = contacts.findIndex(contacts => contacts.id === id)
    console.log(index)
    const updContact = {
        id: contacts[index].id,
        nom: req.body.nom,
        telephone: req.body.telephone
    }
    contacts[index] = updContact
    console.log(updContact)
    res.status(201).json(updContact)
}


export { getContacts, getContact, postContact, updateContact };