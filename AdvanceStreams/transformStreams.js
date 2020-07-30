//transforms are a special type of duplex streams. Insteade of just 
//simply passing the data from the read end to write end 
//transformsStreams change the data


//they are the center pipe pices that can be used to transform 
//data from readable streams before they are sent to writable 

const { Transform } = require('stream');

class ReplaceText extends Transform {

  constructor(char) {
    super();
    this.replaceChar = char;
  }
//looks simular to write method
//it gets chunk and encoding and callback 
  _transform(chunk, encoding, callback) {
      const transformChunk = chunk.toString()
      //g in regx means global
        .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
      this.push(transformChunk)
      callback();
  }

  _flush(callback) {
     this.push('more stuff is being passed...');
     callback();
  }

}

var xStream = new ReplaceText('XX');

//this is letting up do this live in terminal 
process.stdin
  .pipe(xStream)
  .pipe(process.stdout);
