//errors are always past to the callback as first argument in node

var delay = (seconds, callback) => {
    if(seconds > 3) {
        callback(new Error(`${seconds} seconds is too long!`));

    } else {
        setTimeout(() => {
            callback(null, `the ${seconds} second delay is over.`), seconds
        });
    }
}
//we only have an error if delay is over 3 seconds as coded above
delay(8, (error, message) => {
    if (error){
        console.log(error.message);
    } else {
        console.log(message);
    }
    
});

// if we structure our callback functions so that the error is pasts as the first argument
//and any addition values as second third fourth.... arguments of the call back
//then we can quickly convert these fuctions into promises

var {promisify} = require('util')


var delay2 = (seconds, callback) => {
    if(seconds > 3) {
        callback(new Error(`${seconds} seconds is too long!`));

    } else {
        setTimeout(() => {
            callback(null, `the ${seconds} second delay is over.`), seconds
        });
    }
}

var promiseDelay = promisify(delay);

promiseDelay(5)
    .then(console.log)
    .catch((error) => console.log(`error: ${error.message}`))


//letsuse this with thefile system

var fs = require('fs');
var writeFile = promisify(fs.writeFile);

writeFile('sample.txt', 'this is a sample')
    .then(() => console.log('file created'))
    .catch((error) => console.log('error creating file'));