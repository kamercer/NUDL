var startFlag = false;
var counter = 0;
var recordStart = false;

function preload(){
    sound = loadSound('../JS/test2.wav');
    console.log('sound loaded');

    init();
}

function init(){
    //image hover
    $('#centerImage').hover(function(){
	if (startFlag == false){
	    $("#centerImage").css({'transform':'scale(.95)'});
	}
    }, function(){
	if (startFlag == false){
	    $("#centerImage").css({'transform':'scale(1)'});
	}
    });

    //image click to start and stop
    $('#centerImage').click(function(){
	if (startFlag == false){
	    startFlag = true;
	    $("#centerImage").css({'transform':'scale(1.5)'});
	    runTimer();
	}else{
	    startFlag = false;
	    if (recordStart == true){
		$("#transcribe").css('display', 'block');
		recordStart = false;
	    }
	    
	    $("#centerImage").css({'transform':'scale(1)'});
	    counter = 0;
	    $("#counter").text("");
	}
    });

    //button click to submit
    $("#transcribe").click(function(){
	ajaxCall();
    });
}

function runTimer(){
    if (counter < 8 && startFlag == true){
	if (counter == 6){
	    $("#counter").text("Ready!");
	}else if (counter == 7){
	    $("#counter").text("Go!");
	}else{
	    $("#counter").text(counter%4 + 1);
	}
	counter = counter + 1;
	setTimeout(runTimer, 500);
    }else{
	if (startFlag == true){
	    recordStart = true;
	}
    }
}

var mic, fft;
var noteArray = new Array();
var hzFlag = false;

function setup() {
    mic = new p5.AudioIn();
    fft = new p5.FFT(0, 8192);
    fft.setInput(mic);
    mic.start();
}

var exp = 0;
function high(){
    var d = fft.analyze();
    var a = 0;
    var pos = -1;

    for (i = 0; i < d.length; i++){
	if (d[i] > a){
	    a = d[i];
	    pos = i;
	}
    }

    pos = pos * 44100;
    pos = pos/16384;

    if (pos < 1000 && pos > 0){
	//change threshold here
	console.log(pos + " : " + a);
	if (hzFlag == false && a > 230){
	    if (exp > 14){
		noteArray.push(pos);
		hzFlag = true;
		exp = 0;
	    }else{
		exp++;
	    }
	}else if (a < 230){
	    hzFlag = false;
	    exp = 0;
	}else if (noteArray[noteArray.length - 1] > (pos + 3) || noteArray[noteArray.length - 1] < (pos - 3)){
	    noteArray.push(pos);
	    hzFlag = true;
	}
    }
}

function draw() {
    if (recordStart == true){
	high();
    }
}

function returnArray(){
    console.log(noteArray.toString());
}

function ajaxCall(){
    var data = JSON.stringify({"frequencies": noteArray});
    
    $('<input type="hidden" name="json"/>').val(data).appendTo('#temp');

    $('#temp').submit();
}
