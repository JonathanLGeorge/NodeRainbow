// var delay = (seconds, callback) => {
//     setTimeout(callback, seconds*1000);
// };

// delay(1, ()=>{
//     console.log('the delay has ended');
// });

// console.log('end first tick');


var delay = (seconds) => new Promise((resolves, rejects) => {
    //sucessful resolution to the promise
    setTimeout(resolves, seconds*1000);
});


delay(1).then(() => console.log('The delay has ended'));

console.log('end first tick')

/////////////////////////////////////////////////////////////////////
var delay2 = (seconds) => new Promise((resolves, rejects) => {
   
    setTimeout(()=> {
        //this data will be passed as message  in delay2(#).then(message)
        resolves('The long delay has ended')
    }, seconds*1000);
});


delay2(1).then((message) => console.log(message))
.then(()=>42)
.then((number) => console.log(`hello world: ${number}`));

console.log('end second tick')
//the .then is set to take in functions do we could acually just do 
//.then(console.log) and it would be the same 