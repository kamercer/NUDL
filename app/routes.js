// app/routes.js

//var Nerd = require('./models/nerd');

module.exports = function(app){
    //server routes

    //sample route
    /*
    app.get('/api/nerds', function(req, res){
	
	//user mongoose to get all nerds in the database
	Nerd.find(function(err, nerds){
	    
	    if (err){
		res.send(err);
	    }
	    
	    res.json(nerds);
		
	});
    });
    */

    //frontend routes
    //route to handle all angular requests
    app.get('/', function(req, res){
	res.sendfile('./public/views/index.html');
    });

    app.get('/indexJS.js', function(req, res){
	res.sendfile('./public/JS/indexJS.js');
    });

    app.post('/receiveFrequencies', function(req, res){
	console.log('this ran');
    });
}
