function hideString(str, done){
    //this will envoke on the next tick or
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    });

}


hide = hideString("hi", (hidden) => {
    
console.log(hidden);
});



console.log(' end ');

//call back hell
function delay(seconds, callback){
    setTimeout(callback, seconds*1000)
}
//pyrimid of doom
console.log('starting delays')
delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
            console.log('four seconds');
        })
    })
})

