const {
  operation: { listContacts, getContactById, removeContact, addContact, updateById },
} = require('./contacts/index.js');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
// const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      console.log(allContacts);
      break;

    case 'get':
      const contact = await getContactById(id);
      console.log(contact);
      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;

    case 'update':
      const updateContact = await updateById(id, name, email, phone);
      console.log(updateContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

//* call method from file
// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: '2' });
// invokeAction({
//   action: 'add',
//   name: 'Rick Dalton',
//   email: 'rdalton@gmail.com',
//   phone: '(875) 902-6653',
// });
// invokeAction({
//   action: 'update',
//   id: '8Y6PKsvF97GqqBYHLvJgC',
//   name: 'John Gold',
//   email: 'jgold@gmail.com',
//   phone: '(875) 902-6653',
// });
// invokeAction({ action: 'remove', id: 'fd0I1K4b2JdzjwTd8gGW7' });

//* use console application without library
// const actionIndex = process.argv.indexOf('--action');
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

//*use library yargs
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
