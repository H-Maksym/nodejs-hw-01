const fs = require('fs/promises');
//! nanoid@4.0.0 does not work with common JS
const { nanoid } = require('nanoid');
const path = require('path');

// const contactsPath = `${__dirname.split('\\contacts')[0]}/db/contacts.json`;
const contactsPath = path.join(__dirname.split('contacts')[0], '/db/contacts.json');

async function writeFileContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

/** read contacts */
async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

/** get  contacts by id */
async function getContactById(contactId) {
  //for yargs library
  // contactId = String(contactId);
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);
  return result || null;
}

/** delete  contacts by id */
async function removeContact(contactId) {
  //for yargs library
  // contactId = String(contactId);

  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await writeFileContacts(contacts);
  return result;
}

/** update  contacts by id */
async function updateById(contactId, name, email, phone) {
  //for yargs library
  // contactId = String(contactId);

  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id: contactId, name, email, phone };
  await writeFileContacts(contacts);
  return contacts[index];
}

/** add  contacts {name,email,phone} */
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await writeFileContacts(contacts);
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact, updateById };
