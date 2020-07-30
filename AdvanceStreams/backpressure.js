/**
 * basically we stop once information gets to overflow
 * then we increate to pipe to take in more data?
 * 
 */



const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../powder-day.mp4');

//the high water mark is controlling the hoes size and back pressure.
//memory controll 
const writeStream = createWriteStream('./copy.mp4', {
   //highWaterMark: 1628920128
});

//this will tell up if the "hoes" is full or not
//return true or false value if it can handle more data
//if false hoes is full
readStream.on('data', (chunk) => {
    const result = writeStream.write(chunk);
    // if we dont have a result our hoes is full 
    if (!result) {
       console.log('backpressure')
       //this is going to pause the stream obviously 
       //we need to wait until we can get more data to go through (back pressure)
       readStream.pause();
    }
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    writeStream.end();
});

//this is where we listen to see if we can continue streaming again 
//so when write stream drains this will fire 
writeStream.on('drain', () => {
    console.log('drained');
    readStream.resume();//resumes the write steam that was puased 
})

writeStream.on('close', () => {
    process.stdout.write('file copied\n');
})
