/**
 * a readable stream reads data from a source
 * and then feeds it into a pipline bit by bit
 * 
 * 
 * we can create a readable stream that can read from a sorce array
 * 
 * 
 * we are going to create a stream that read data from array and pass it allong chunk b chunk
 * 
 * 
 * stream have an event imiters so thwy can raise events
 * 
 * we can listen to specific events
 * 
 * we want to listen for 'data'
 */




const { Readable } = require('stream');

const peaks = [
    "Tallac",
    "Ralston",
    "Rubicon",
    "Twin Peaks",
    "Castle Peak",
    "Rose",
    "Freel Peak"
];

//we see we are extending the stream interface from readable
class StreamFromArray extends Readable {

    //passing in our array to constructor 
    constructor(array) {
        //super invokes the readable stream, and sets up our stream object 
      super({ objectMode: true }); //objectMode, you can pass any type of javascript object
      this.array = array;
      //starting off at zero
      this.index = 0;
    }

    //when ever we extend the readable stream, we want to implement a _read() function 
    //this will be what happens when the stream reads a chunk of data 
    //here we want to read one part of the array and pass it on
    _read() {
      if (this.index <= this.array.length) {
          //getting a chunk of data
        const chunk = {
          data: this.array[this.index],
          index: this.index
        };
        //we want to push chunks of data into the stream
        this.push(chunk);
        this.index += 1;
      } else {
          //pushing null wil signal to stream its done
        this.push(null);
      }
    }

}


// creating a new stream that will get data from an array
const peakStream = new StreamFromArray(peaks);

//on our read stream we want to listen to data events
//when 'data' event is raised a little is passed to its call back function
//we called it chunk
peakStream.on('data', (chunk) => console.log(chunk));


//'end' event will raise after its finished 
peakStream.on('end', () => console.log('done!'));


//streams have binary or as string using UTF-8
//in the super add super({encoding: 'UTF-8'})
//if binary is what you want leave emtpy
//if you dont want objects
//change code below

/**
 * _read() {
      if (this.index <= this.array.length) {
        const chunk = this.array[this.idex];
        this.push(chunk);
        this.index +=1


      } else {
          this.push null
      }
    }
 */