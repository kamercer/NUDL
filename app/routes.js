//app/routes.js

var model = require('./models/model');

module.exports = function(app){

    app.get('/', function(req, res){
	res.sendfile('./public/views/index.html');
    });

    app.get('/notes', function(req, res){

	var options = {
	    headers : {'Custom' : 'test' }
	}

	res.sendfile('./public/views/notes.html', options);
    });

    app.post('/loadSheet', function(req, res){
	//var data = JSON.parse(req.body);
	console.log('Frequencies received: ' + req.json_body + '\n');

	//var notes = model.convertHzToNotes(req.body.frequencies);

	var options = {
	    headers : {'Custom' : 'test' }
	}

	res.sendfile('./public/views/notes.html');
    });
}
