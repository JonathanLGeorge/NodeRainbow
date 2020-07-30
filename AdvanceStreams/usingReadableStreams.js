/**
 * Node js comes with readable stream built in
 * http requests on the server and the response on the clinet are readable streams 
 * the file system has readable stream
 * ziping and unzipping 
 * tcp sockets 
 * prosesses std in 
 * npm 
 * ect....
 * 
 */



const fs = require('fs');

//we are going to use creatRead Stream from file system 
const readStream = fs.createReadStream('./powder-day'); // i dont know what this isnt working 

//we want to listen for the data event 
readStream.on('data', (chunk) => {
  console.log('size: ', chunk.length)// chunk will let up see the binary 
});
// end event that tells us stream in over 
readStream.on('end', () => {
  console.log('read stream finished');
});
// error events
readStream.on('error', (error) => {
  console.log('an error has occured.')
  console.error(error);
});
//this will invole a none flowing mode stream 
readStream.pause();


process.stdin.on('data', (chunk) => {
  //the resume will put back into flowing mode
    if (chunk.toString().trim() === 'finish') {
        readStream.resume();
    }
    readStream.read();
});


