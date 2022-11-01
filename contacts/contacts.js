const fs = require('fs/promises');
const path = require('path');

// const contactsPath = `${__dirname.split('\\contacts')[0]}/db/contacts.json`;
const contactsPath = path.join(__dirname.split('contacts')[0], '/db/contacts.json');
console.log('🚀 ~ contactsPath', contactsPath);

/** read contacts */
async function listContacts() {
  const contacts = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  // ...твій код
}

async function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
  // ...твій код
}

module.exports = { listContacts, getContactById, removeContact, addContact };
