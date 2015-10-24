module.exports = {
    
    convertHzToNotes : function(notes){
	
	var noteArray = new Array();
	var data = JSON.parse(notes);

	var frequencies = data.frequencies;
	
	//more need to be added
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
	    case frequencies[i] <= 120.00585:
		noteArray.push(6);
		break;
	    case frequencies[i] <= 127.1418:
		noteArray.push(7);
		break;
	    case frequencies[i] <= 134.70205:
		noteArray.push(8);
		break;
	    case frequencies[i] <= 142.71185:
		noteArray.push(9);
		break;
	    case frequencies[i] <= 151.19795:
		noteArray.push(10);
		break;
	    case frequencies[i] <= 160.18865:
		noteArray.push(11);
		break;
	    case frequencies[i] <= 169.71395:
		noteArray.push(12);
		break;
	    case frequencies[i] <= 179.80565:
		noteArray.push(13);
		break;
	    case frequencies[i] <= 190.49745:
		noteArray.push(14);
		break;
	    case frequencies[i] <= 201.825:
		noteArray.push(15);
		break;
	    case frequencies[i] <= 213.82615:
		noteArray.push(16);
		break;
	    case frequencies[i] <= 226.54095:
		noteArray.push(17);
		break;
	    case frequencies[i] <= 240.0118:
		noteArray.push(18);
		break;
	    case frequencies[i] <= 254.28365:
		noteArray.push(19);
		break;
	    default:
		noteArray.push(-1);
		break;
	    }
	}
	
	return noteArray;
    }
}
