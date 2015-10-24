function preload(){
    sound = loadSound('../JS/test2.wav');
    console.log('sound loaded');
}

var mic, fft;
var noteArray = new Array();
var hzFlag = false;

function setup() {
   createCanvas(710,400);
   noFill();

   //sound.loop();
   fft = new p5.FFT(0, 8192);
   fft.setInput(sound);
   sound.play();
}

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
	console.log(pos + ": " + a);
	//change threshold here
	if (hzFlag == false && a > 245){
	    noteArray.push(pos);
	    hzFlag = true;
	}else if (a < 245){
	    hzFlag = false;
	}else if (noteArray[noteArray.length - 1] > (pos + 3) || noteArray[noteArray.length - 1] < (pos - 3)){
	    noteArray.push(pos);
	    hzFlag = true;
	}
    }
}

function draw() {
   background(200);

   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();

    high();
}

function returnArray(){
    console.log(noteArray.toString());
}

function ajax(){
    var data = new Object;
    data.frequencies = noteArray;

    $.post('/loadSheet',{frequencies: noteArray}, function(data, status, request){
	alert('d');
    });
}

function temp(){
    $('<input type="hidden" name="json"/>').val({Custom: 'temp'}).appendTo('#temp');

$('#temp').submit();
}
