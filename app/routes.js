//app/routes.js

var model = require('./models/model');

module.exports = function(app){

    app.get('/', function(req, res){
	res.sendfile('./public/views/index.html');
    });

    app.get('/indexJS.js', function(req, res){
	res.sendfile('./public/JS/indexJS.js');
    });

    app.post('/receiveFrequencies', function(req, res){
	console.log('Frequencies received: ' + req.body.frequencies + '\n');

	model.convertHzToNotes(req.body.frequencies);

	res.end();
    });
}
