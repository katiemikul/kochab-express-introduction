const express = require('express'); //links in express from the Nodes Modules

const app = express();
const PORT = 5000;

app.get('/', function (req, res) { //req is request, res is response
    res.send('Hello World');
})

app.get('/hey', function (req, res) { //req is request, res is response
    res.send('howdy');
})

app.listen(PORT, function () {
    console.log(`listening on port:  ${PORT}F`)
});
//server needs to constantly be moving (request, receive, request, receive, etc.)

