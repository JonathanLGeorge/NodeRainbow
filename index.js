//this is server code

// to have access to express
const express = require('express'); 
//why? so we can create web aplication called app
const app = express(); 

//first thing we want to do in websever is listen
//listen(port: number, hostname: string, backlog: number, callback?: Function)
app.listen(3000, () => console.log('listening at port 3000')); // we have port and callback function 
/*
what do we want this webserver to do?
    1.  server webpage
       1A.  index.html
    2.
*/ 

/*
using express to host static file.... 
//give a directory name 
call directory public to remind that those files will be served to public 
*/
app.use(express.static('public'));