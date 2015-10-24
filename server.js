//modules
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

//port
var port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//makes everything in the public folder accessible
app.use(express.static('public'));

require('./app/routes.js')(app)

//start app
app.listen(port);

console.log('app is running on port ' + port);
