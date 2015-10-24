//modules
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

//port
var port = 3000;

require('./app/routes.js')(app)

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//start app
app.listen(port);

console.log('app is running on port ' + port);
