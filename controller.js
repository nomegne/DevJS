import { contacts } from "./data.js";

function getContacts(req, res) {
    res.status(200).json(contacts);
}

function getContact(req, res) {
    const id = req.params.id;
    var contact = contacts.find((user) => user.id === id);
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
    const id = Number(contacts.params.id)
    const index = contacts.findIndex(contacts => contacts.id === id)
    const updContact = {
        id: contacts[index].id,
        nom: req.body.nom,
        telephone: req.body.telephone
    }
    contacts[index] = updContact
    res.status(201).json(updContact)
}


export { getContacts, getContact, postContact, updateContact };