
var fs = require('fs');
var {promisify} = require('util');
const { resolve } = require('path');

var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");


//we are not goingto handle reject cause we will set a time out 
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
})


//inside async fuctions we can wait for promises to complete
//we can use try catch for errors if we want 

const doStuffSequentially = async () => {
     console.log('starting');
     await delay(1);
     console.log('waiting');
     await delay(2);

     try{
        await writeFile('file.txt', 'Sample File...');
        beep();

     } catch (error){
        console.error(error)
     }
     
     console.log('file.txt created');
     await delay(3);
     await unlink('file.txt');
     beep();
     console.log('file.txt removed');


     //the return is not direct style
     //so beacuse we are in an async function 
     //all the awaits we have will await from processing any further 
     //so we wait wait for the file to be unlinked before 
     //it returns a resolved promise 
     return Promise.resolve();

}

//with the promiseresolved we can add .then to doStuffSequentially
doStuffSequentially()


//we can abtain data from async functions 
//uses fs.readdir

async function start(){
    console.log('getting files')
    //files is = to the promise 
    var files = await readdir(__dirname);
    console.log(files);
}

start();