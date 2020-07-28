// //here we see the call back hell 

// var fs = require('fs');
// var beep = () => process.stdout.write("\x07");

// const doStuffSequentially = () => {
//     console.log('starting');
//     setTimeout(() => {
//         console.log('waiting');
//         setTimeout(() => {
//             console.log('waiting some more');
//             fs.writeFile('file.txt', 'Sample File...', error => {
//                 if (error) {
//                     console.error(error);
//                 } else {
//                     beep();
//                     console.log('file.txt created')
//                     setTimeout(() => {
//                         beep();
//                         fs.unlink('file.txt', error => {
//                             if (error) {
//                                 console.error(error);
//                             } else {
//                                 console.log('file.txt removed');
//                                 console.log('sequential execution complete');
//                             }
//                         })
//                     }, 3000)
//                 }
//             });
//         }, 2000)
//     }, 1000)
// }

// doStuffSequentially();

//here we see the call back hell 

var fs = require('fs');
var {promisify} = require('util');
const { resolve } = require('path');

var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);

var beep = () => process.stdout.write("\x07");


//we are not goingto handle reject cause we will set a time out 
var delay = (seconds) => new Promise((resolve) => {
    setTimeout(resolves, seconds*1000);
})



// insteade of returning a new promise we will invoke promise.resolve
//this will create a new promis object that will auto resolve
//we can chain all the steps using .then methods

//(message => console.log(message)) is same as just console.log

const doStuffSequentially = () => Promise.resolve()
  .then(() => console.log('starting'))
  .then(() => delay(1))
  .then(() => 'waiting')
  .then(console.log)
  .then(() => delay(2))
  .then(() => writeFile('file.txt', 'Sample File...'))
  .then(beep)
  .then(() => 'file.txt created')
  .then(console.log)
  .then(() => delay(3))
  .then(() => unlink('file.txt'))
  .then(beep)
  .then(() => 'file.txt removed')
  .then(console.log)
  .catch(console.error);



doStuffSequentially();
