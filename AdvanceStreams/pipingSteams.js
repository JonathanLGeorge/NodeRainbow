const { createWriteStream } = require('fs');

const writeStream = createWriteStream('./file.txt');
// any read stream can be piped to any write stream 
process.stdin.pipe(writeStream);


//you can see this is writig the the file.txt

//try typing echo "your text  typed here....." | node theFilepath

// | is a unix pipe 


//cat ../sample.txt | node theFilePath
//this will copy sample.txt (a file that exists already in some file path ) into file.txt found in the code above
