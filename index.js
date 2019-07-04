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
//http://expressjs.com/en/4x/api.html#express.json for helpful understanding 
app.use(express.json({ limit: '1mb' })); //limits the file size and allows us to get the incoming data as Json!
/*
lets set up a rout on the server
Here we are wanting a post request
aplication programing interface for client to sennd info to us
the request is all info from cilent 
the response is what we send back to client 
*/ 

/* 
we have the post we want to specify the (adress, call back function(request, response))
example:
app.post('/', function(req, res) {
    res.send('POST request to the homepage')
}) 
*/
const allData = [];

app.post('/api', (request, response) => {
    //console.log('I got a request!');
    //console.log(resquest.body);
    const data = request.body;
    allData.push(data);
    
/*
now that we finished, we need to do something to finish or end the request
this is required. at a minimum we can just do resonse.end();

below we are sending back info and we need to add into index.html a way to receieve the info
*/
    /*response.json({
        status: 'successful',
        latitude: request.body.lat,
        longitude: request.body.lon
    });*/
    response.json(allData);
    console.log(allData);
});
/* 
we have the post we want to specify the (adress, call back function(request, response))
example:
app.post('/', function(req, res) {
    res.send('POST request to the homepage')
}) 
*/