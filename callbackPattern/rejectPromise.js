var delay = (seconds) => new Promise((resolves, rejects) => {
    throw new Error('argh')
      // we will get an  UnhandledPromiseRejectionWarning
      //so we will need a catch method in delay
    
    
    
      setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds*1000);
});

delay(1)
    .then(console.log)
    .then(() => 42)
    .then((number) => console.log(`hello world: ${number}`))
    .catch((error) => console.log(`error: ${error.message}`));

    console.log('end first tick'); 


//with promises we dont need to have an error to have a rejection 
//we can invoke the reject method any tim we want 

var delay2 = (seconds) => new Promise((resolves, rejects) => {
    if(seconds > 3){
        rejects(new Error(`${seconds} is too long`))
    }
    
    
      setTimeout(() => {
        resolves('the second long delay has ended')
    }, seconds*1000);
});
// if we change the seconds argument to anything greater than 3 then we see we invoke the error
delay2(4)
    .then(console.log)
    .then(() => 52)
    .then((number) => console.log(`hello world: ${number}`))
    .catch((error) => console.log(`error: ${error.message}`));

    console.log('end second tick'); 
