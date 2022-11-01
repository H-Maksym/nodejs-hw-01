// console.log('Hello world, Maksym!');
// console.log(require('url'));

// const fs = require('fs/promises');

// //*function for operation with file by filePath, action and additional data
// const fileOperation = async ({ filePath, action, data }) => {
//   switch (action) {
//     case 'read':
//       const text = await fs.readFile(filePath, 'utf-8');
//       console.log(text);
//       //*or use method toString by default in utf-8
//       //   const result = await fs.readFile(filePath);
//       //   console.log(result.toString());
//       break;
//     case 'add':
//       //*when we append file, return will be undefined. Because fs.appendFile return nothing.
//       await fs.appendFile(filePath, data);
//       break;
//     case 'replace':
//       //*when we append file, return will be undefined. Because fs.writeFile return nothing.
//       await fs.writeFile(filePath, data);
//       break;
//     default:
//       console.log('Unknown action');
//   }
// };

// const filePath = './db/text.txt';
// fileOperation({ filePath, action: 'read' });

// fileOperation({
//   filePath,
//   action: 'add',
//   data: ',Maksym',
// });

// fileOperation({ filePath, action: 'replace', data: 'Yor are the best front-end developer!' });

//*read file with promises
// fs.readFile('./db/text.txt').then(console.log).catch(console.log);

//*read file synchrony
// fs.readFile('./db/text.txt', (error, data) => {
//   console.log(error);
//   console.log(data);
// });
