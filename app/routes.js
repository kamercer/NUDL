//app/routes.js

var model = require('./models/model');

module.exports = function(app){

    app.get('/', function(req, res){
	res.sendfile('./public/views/splash.html');
    });

    app.get('/index.html', function(req, res){
	res.sendfile('./public/views/index.html');
    });

    app.post('/loadSheet', function(req, res){
	console.log('Frequencies received: ' + req.body.json + '\n');

	var noteArray = model.convertHzToNotes(req.body.json);

	res.render('notes', {jsonData: ''});
    });
}
