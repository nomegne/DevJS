import { contacts } from "./data.js";

function getContacts() {
    return contacts;
}

function getContact(id) {
    return contacts.find((contact) => contact.id === id);
}

export { getContacts, getContact }