//promis.all and race are a way to do parallel promises 

var fs = require('fs');
var {promisify} = require('util');
//const { resolve } = require('path');

var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir)
var beep = () => process.stdout.write("\x07");


//1 second time out 
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
})

//creating files
Promise.all([
    writeFile('readme.md', 'Hello md World'),
    writeFile('readme.txt', 'Hello txt World'),
    writeFile('readme.json', '{"Hello": "Json World"}')
]).then(() => readdir(__dirname))
.then(console.log);


//you only need file name to unlink 
//you can seethere is a 3 second delay
//because we need to wait for that promise to resolve we notice 
//that all the unlinks happen after 3 seconds 
Promise.all([
    unlink('readme.md'),
    unlink('readme.txt'),
    delay(3),
    unlink('readme.json')
]).then(() => readdir(__dirname))
.then(console.log);


//this will triger after the first promise to complete 
//is resolved and finishe after the last
//so 2 sec delay... then().... and it will exit after the 10 second delay 
Promise.race([
    delay(10),
    delay(2),
    delay(8),
]).then(() => readdir(__dirname))
.then(console.log);