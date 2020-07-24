function hideString(str, done){
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    });

}


var hidden = hideString("hi", (hidden) => {
    
console.log(hidden);
});



console.log(' end ');