const { Duplex, PassThrough } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4');

class Throttle extends Duplex {
//ms - millsec
  constructor(ms) {
    super();
    this.delay = ms;
  }
///you need to add read and write method with Duplex
  _write(chunk, encoding, callback) {
      //we will write the chunks of data as they are recieved 
     this.push(chunk);
     //this call back will tell use when its completed
     //we just added a delay to it
     setTimeout(callback, this.delay);
  }

  _read() {}

  //we are no longer getting data from read sream when final is called
  _final() {
     this.push(null);
  }

}

const report = new PassThrough();
const throttle = new Throttle(100);//increase or decrease to see the difference 

var total = 0;
report.on('data', (chunk) => {
   total += chunk.length;
   console.log('bytes: ', total);
})

readStream
  .pipe(throttle)
  .pipe(report)
  .pipe(writeStream);
