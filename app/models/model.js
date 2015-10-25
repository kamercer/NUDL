module.exports = {
    
    convertHzToNotes : function(notes){
	
	var noteArray = new Array();
	var data = JSON.parse(notes);

	var frequencies = data.frequencies;
	
	//need to be checked
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
	    case frequencies[i] <= 269.4041:
		noteArray.push(20);
		break;
	    case frequencies[i] <= 285.4237:
		noteArray.push(21);
		break;
	    case frequencies[i] <= 302.3959:
		noteArray.push(22);
		break;
	    case frequencies[i] <= 320.3773:
		noteArray.push(23);
		break;
	    case frequencies[i] <= 339.4279:
		noteArray.push(24);
		break;
	    case frequencies[i] <= 359.6113:
		noteArray.push(25);
		break;
	    case frequencies[i] <= 380.9949:
		noteArray.push(26);
		break;
	    case frequencies[i] <= 403.65005:
		noteArray.push(27);
		break;
	    case frequencies[i] <= 427.65235:
		noteArray.push(28);
		break;
	    case frequencies[i] <= 453.0819:
		noteArray.push(29);
		break;
	    case frequencies[i] <= 480.02355:
		noteArray.push(30);
		break;
	    case frequencies[i] <= 508.5672:
		noteArray.push(31);
		break;
	    case frequencies[i] <= 538.8082:
		noteArray.push(32);
		break;
	    case frequencies[i] <= 570.8474:
		noteArray.push(33);
		break;
	    case frequencies[i] <= 604.79175:
		noteArray.push(34);
		break;
	    case frequencies[i] <= 640.75455:
		noteArray.push(35);
		break;
	    case frequencies[i] <= 678.8558:
		noteArray.push(36);
		break;
	    case frequencies[i] <= 719.22265:
		noteArray.push(26);//37
		break;
	    case frequencies[i] <= 761.9903:
		noteArray.push(27);
		break;
	    case frequencies[i] <= 807.0015:
		noteArray.push(28);
		break;
	    case frequencies[i] <= 855.3047:
		noteArray.push(29);
		break;
	    case frequencies[i] <= 906.16375:
		noteArray.push(30);
		break;
	    case frequencies[i] <= 960.04705:
		noteArray.push(31);
		break;
	    default:
		noteArray.push(32);
		break;
	    }
	}
	
	return noteArray;
    }
}
