// app/routes.js

//var Nerd = require('./models/nerd');

module.exports = function(app){

    app.get('/', function(req, res){
	res.sendfile('./public/views/index.html');
    });

    app.get('/indexJS.js', function(req, res){
	res.sendfile('./public/JS/indexJS.js');
    });

    app.post('/receiveFrequencies', function(req, res){
	console.log('this ran');
	console.log(req.body);
	res.end();
    });
}
