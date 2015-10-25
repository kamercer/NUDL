var lineCounter = -1;
var jsonData;
var timer = 0;
pauseFlag = false;
loopFlag = false;

var audio = new Array(45);

function preload(){
  audio[0] = loadSound("/assets/sound/E2.wav");
  audio[1] = loadSound("/assets/sound/F2.wav"); 
  audio[2] = loadSound("/assets/sound/F12.wav");
  audio[3] = loadSound("/assets/sound/G2.wav");
  audio[4] = loadSound("/assets/sound/G12.wav");
  audio[5] = loadSound("/assets/sound/A2.wav");
  audio[6] = loadSound("/assets/sound/A12.wav");  
  audio[7] = loadSound("/assets/sound/B2.wav");
  audio[8] = loadSound("/assets/sound/C3.wav");
  audio[9] = loadSound("/assets/sound/C13.wav");
  audio[10] = loadSound("/assets/sound/D3.wav");
  audio[11] = loadSound("/assets/sound/D13.wav");
  audio[12] = loadSound("/assets/sound/E3.wav");
  audio[13] = loadSound("/assets/sound/F3.wav");
  audio[14] = loadSound("/assets/sound/F13.wav");
  audio[15] = loadSound("/assets/sound/G3.wav");
  audio[16] = loadSound("/assets/sound/G13.wav");
  audio[17] = loadSound("/assets/sound/A3.wav");
  audio[18] = loadSound("/assets/sound/A13.wav");
  audio[19] = loadSound("/assets/sound/B3.wav");
  audio[20] = loadSound("/assets/sound/C4.wav");
  audio[21] = loadSound("/assets/sound/C14.wav");
  audio[22] = loadSound("/assets/sound/D4.wav");
  audio[23] = loadSound("/assets/sound/D14.wav");
  audio[24] = loadSound("/assets/sound/E4.wav");
  audio[25] = loadSound("/assets/sound/F4.wav");
  audio[26] = loadSound("/assets/sound/F14.wav");
  audio[27] = loadSound("/assets/sound/G4.wav");
  audio[28] = loadSound("/assets/sound/G14.wav");
  audio[29] = loadSound("/assets/sound/A4.wav");
  audio[30] = loadSound("/assets/sound/A14.wav");
  audio[31] = loadSound("/assets/sound/B4.wav");
  audio[32] = loadSound("/assets/sound/C5.wav");
  audio[33] = loadSound("/assets/sound/C15.wav");
  audio[34] = loadSound("/assets/sound/D5.wav");
  audio[35] = loadSound("/assets/sound/D15.wav");
  audio[36] = loadSound("/assets/sound/E5.wav");
  audio[37] = loadSound("/assets/sound/F5.wav");
  audio[38] = loadSound("/assets/sound/F15.wav");
  audio[39] = loadSound("/assets/sound/G5.wav");
  audio[40] = loadSound("/assets/sound/G15.wav");
  audio[41] = loadSound("/assets/sound/A5.wav");
  audio[42] = loadSound("/assets/sound/A15.wav");
  audio[43] = loadSound("/assets/sound/B5.wav");
}

function loadData(temp){
    jsonData = temp;
}

function setup() {
   var height = window.screen.availHeight;
   var width = window.screen.availWidth;
    
    var MyCanvas = createCanvas(width, height * .75);
    MyCanvas.parent('bodyDiv');
    background(255);
    noSmooth();    

    graphLines();
    noteLoop();
    
    init();
}

function init(){
    $("#play_unpressed").click(function(){
	pauseFlag = false;
	playSong();
    });

    $("#pause_unpressed").click(function(){
	pauseFlag = true;
    });
    
    $("#loop_unpressed").click(function(){
	loopFlag = !loopFlag;
    });
}

function playSong(){
    if (timer < jsonData.length && pauseFlag == false){
	audio[jsonData[timer]].play();
	timer++;
	setTimeout(playSong, 500);
    }else if (timer >= jsonData.length){
	timer = 0;
	if (loopFlag == true){
	    playSong();
	}
    }
}

function note(a,c)
{
    stroke(0);
    strokeWeight(1);
    var height = window.screen.availHeight;
    var width = window.screen.availWidth;
    var b = 50 + (lineCounter * 325);
    if(a==0)
    {
	line(c-20, b+125, c+20, b+125);
	line(c-20, b+150, c+20, b+150);
	line(c-20, b+175, c+20, b+175);
	return b+186;
    }
    else if(a==1)
    {
	line(c-20, b+125, c+20, b+125);
	line(c-20, b+150, c+20, b+150);
	line(c-20, b+175, c+20, b+175);
	return b+173;
    }  
    else if(a==2)
    {
	line(c-10, b+125, c+45, b+125);
	line(c-10, b+150, c+45, b+150);
	line(c-10, b+175, c+45, b+175);
	return b+173;
    }
    else if(a==3)
    {
	line(c-20, b+125, c+20, b+125);
	line(c-20, b+150, c+20, b+150);
	return b+161;
    }
    
    else if(a==4)
    {
	line(c-10, b+125, c+45, b+125);
	line(c-10, b+150, c+45, b+150);
	return b+161;
    }  
    else if(a==5)
    {
	line(c-20, b+125, c+20, b+125);
	line(c-20, b+150, c+20, b+150);
	return b+150;
    }
    
    else if(a==6)
    {
	line(c-10, b+125, c+45, b+125);
	line(c-10, b+150, c+45, b+150);
	return b+150;
    }    
    else if(a==7)
    {
	line(c-20, b+125, c+20, b+125);
	return b+137; 
    }
    
    else if(a==8)
    {
	line(c-20, b+125, c+20, b+125);
	return b+126;
    }  
    else if(a==9)
    {
	line(c-20, b+125, c+45, b+125);
	return b+126;
    }
    else if(a==10)
	return b+113;
    else if(a==11)
	return b+113;
    else if(a==12)
	return b+100;
    else if(a==13)
	return b+87;
    else if(a==14)
	return b+87;
    else if(a==15)
	return b+74;
    else if(a==16)
	return b+74;  
    else if(a==17)
	return b+63;
    else if(a==18)
	return b+63;
    else if(a==19)
	return b+50;
    else if(a==20)
	return b+37;
    else if(a==21)
	return b+37;
    else if(a==22)
	return b+25;
    else if(a==23)
	return b+25;
    else if(a==24)
	return b+12;
    else if(a==25)
	return b;
    else if(a==26)
	return b;
    else if(a==27)//
	return b-10;
    else if(a==28)
	return b-10;
    else if(a==29)
    {
	line(c-20, b-25, c+20, b-25);
	return b-25;
    }
    else if(a==30)
    {
	line(c-10, b-25, c+45, b-25);
	return b-25;
    }
    else if(a==31)
    {
	line(c-20, b-25, c+20, b-25);
	return b-35;
    }
    else if(a==32)
    {
	line(c-20, b-25, c+20, b-25);
	line(c-20, b-50, c+20, b-50);
	return b-49;
    }
    else if(a==33)
    {
	line(c-10, b-25, c+40, b-25);
	line(c-10, b-50, c+40, b-50);
	return b-49;
    }
    else if(a==34)
    {
	line(c-20, b-25, c+20, b-25);
	line(c-20, b-50, c+20, b-50);
	return b-59;
    }
    else if(a==35)
    {
	line(c-10, b-25, c+40, b-25);
	line(c-10, b-50, c+40, b-50);
	return b-59;
    }
    else if(a==36)
    {
	line(c-20, b-25, c+20, b-25);
	line(c-20, b-50, c+20, b-50);
	line(c-20, b-75, c+20, b-75);
	return b-72;
    }
    else if(a==37)
    {
	line(c-20, b-25, c+20, b-25);
	line(c-20, b-50, c+20, b-50);
	line(c-20, b-75, c+20, b-75);
	return b-84;
    }
    else if(a==38)
    {
	line(c-10, b-25, c+40, b-25);
	line(c-10, b-50, c+40, b-50);
	line(c-10, b-75, c+40, b-75);
	return b-84;
    }
    else if(a==39)
    {
	line(c-20, b-25, c+20, b-25);
	line(c-20, b-50, c+20, b-50);
	line(c-20, b-75, c+20, b-75);
	line(c-20, b-100, c+20, b-100);
	return b-100;
    }
    else if(a==40)
    {
	line(c-10, b-25, c+40, b-25);
	line(c-10, b-50, c+40, b-50);
	line(c-10, b-75, c+40, b-75);
	line(c-10, b-100, c+40, b-100);
	return b-100;
    }
    else if(a==41)
    {
	line(c-20, b-25, c+20, b-25);
	line(c-20, b-50, c+20, b-50);
	line(c-20, b-75, c+20, b-75);
	line(c-20, b-100, c+20, b-100);
	return b-110;
    }
    else if(a==42)
    {
	line(c-10, b-25, c+40, b-25);
	line(c-10, b-50, c+40, b-50);
	line(c-10, b-75, c+40, b-75);
	line(c-10, b-100, c+40, b-100);
	return b-110;
    }
    else if(a==43)
    {
	line(c-20, b-25, c+20, b-25);
	line(c-20, b-50, c+20, b-50);
	line(c-20, b-75, c+20, b-75);
	line(c-20, b-100, c+20, b-100);
	line(c-20, b-125, c+20, b-125);
	return b-125;
    }
}

function noteLoop() {
    var height = window.screen.availHeight;
    var width = window.screen.availWidth;
    
    var MyJSONObject = { "0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12","13":"13","14":"14","15":"15","16":"16","17":"17","18":"18","19":"19","20":"20","21":"21","22":"22","23":"23","24":"24","25":"25","26":"26","27":"27","28":"28","29":"29","30":"30","31":"31","32":"32","33":"33","34":"34","35":"35","36":"36","37":"37","38":"38","39":"39","40":"40","41":"41","42":"42","43":"43"};
    
    //var i = 0;
    var a = 140 + 25; //shift to the left
    var b = 0; //placeholder for values
    var c = 25; //length of note itself
    
    //for(var key in MyJSONObject)
    for(i = 0; i < jsonData.length; i++){
	b = jsonData[i];
	var d = note(b,a); //tells you y variable of note
	
	//determines sharp  or not
	if((b%12)==2 || (b%12)==4 || (b%12)==6 || (b%12)==9 || (b%12)==11)
	{
	    stroke(0); //color should be black
	    strokeWeight(4);
	    //hashtag lines
	    line(a-15, d+5, a, d+5);
	    line(a-15, d-5, a, d-5);
	    line(a-3, d+10, a-3, d-9);
	    line(a-11, d+10, a-11, d-9);
	    a = a+20;//shifts x of note
	}
	noStroke();
	fill(0); //color of circle
	ellipse(a,d,1.15*c,.75*c);//note itself

	//line placement of note
	if(b<19)
	{
	    stroke(0);
	    strokeWeight(4);
	    line(a+14, d, a+14, d-50);
	}
	else
	{
	    stroke(0);
	    strokeWeight(4);
	    line(a-14, d, a-14, d+50);
	}

	//next note
	a=a+50;	
	if (a > (width - 140)){
	    graphLines();
	    a = 140 + 25;
	}
    }
}

function graphLines(){
    var height = window.screen.availHeight;
    var width = window.screen.availWidth;
 
    lineCounter = lineCounter + 1;
    var a = 50 + (lineCounter * 325);
    stroke(0);
    strokeWeight(1);
    wide = width - 140;
    line(140, a, wide, a);
    line(140, a+25, wide, a+25);
    line(140, a+50, wide, a+50);
    line(140, a+75, wide, a+75);
    line(140, a+100, wide, a+100);
}
