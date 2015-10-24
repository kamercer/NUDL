module.exports = {

    convertHzToNotes : function(frequencies){

	var noteArray = new Array();
	
	for (i = 0; i < frequencies.length; i++){
	    switch(true){
	    case frequencies[i] <= 84.856:
		noteArray.push(0);
		break;
	    case frequencies[i] <= 89.90285:
		noteArray.push(1);
		break;
	    case frequencies[i] <= 95.24875:
		noteArray.push(2);
		break;
	    case frequencies[i] <= 100.91255:
		noteArray.push(3);
		break;
	    case frequencies[i] <= 106.9131:
		noteArray.push(4);
		break;
	    case frequencies[i] <= 113.27045:
		noteArray.push(5);
		break;
	    case frequencies[i] <= 120.0058:
		noteArray.push(6);
		break;
	    case frequencies[i] <= 127.1418:
		noteArray.push(7);
		break;
	    case frequencies[i] <= 134.70205:
		noteArray.push(8);
		break;
	    case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;case frequencies[i] <=89.90285:
		noteArray.push(1);
		break;
	    }
	}
}
