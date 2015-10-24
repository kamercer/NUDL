//modules
var express = require('express');
var app = express();
var al = require('./app/models/algorithm.js');

//port
var port = 3000;

require('./app/routes.js')(app)

//start app
app.listen(port);

console.log('app is running on port ' + port);

console.log(al.preload());
