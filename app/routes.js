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
	var noteArray = model.convertHzToNotes(req.body.json);

	//var data = '[';
	//for (i = 0; i < noteArray.length-1; i++){
	  //  data = data + noteArray[i]
	//}

	console.log(noteArray.toString());
	res.render('notes', {jsonData: '[' + noteArray + '];'});
    });
}
