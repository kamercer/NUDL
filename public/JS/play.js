var play = function(){
    this.playNote = new function(a)
    {
	var audio;
	
	if(a==0)
	    audio = loadSound("/assets/sound/E2.wav");
	else if(a==1)
	    audio = loadSound("sound/F2.wav"); 
	else if(a==2)
	    audio = loadSound("sound/F#2.wav");
	else if(a==3)
	    audio = loadSound("sound/G2.wav");
	else if(a==4)
	    audio = loadSound("sound/G#2.wav");
	else if(a==5)
	    audio = loadSound("sound/A2.wav");
	else if(a==6)
	    audio = loadSound("sound/A#2.wav");  
	else if(a==7)
	    audio = loadSound("sound/B2.wav");
	else if(a==8)
	    audio = loadSound("sound/C2.wav");
	else if(a==9)
	    audio = loadSound("sound/C#2.wav");
	else if(a==10)
	    audio = loadSound("sound/D2.wav");
	else if(a==11)
	    audio = loadSound("sound/D#2.wav");
	else if(a==12)
	    audio = loadSound("sound/E3.wav");
	else if(a==13)
	    audio = loadSound("sound/F3.wav");
	else if(a==14)
	    audio = loadSound("sound/F#3.wav");
	else if(a==15)
	    audio = loadSound("sound/G3.wav");
	else if(a==16)
    audio = loadSound("sound/G#3.wav");
  else if(a==17)
    audio = loadSound("sound/A3.wav");
  else if(a==18)
    audio = loadSound("sound/A#3.wav");
  else if(a==19)
    audio = loadSound("sound/B3.wav");
  else if(a==20)
    audio = loadSound("sound/C3.wav");
  else if(a==21)
    audio = loadSound("sound/C#3.wav");
  else if(a==22)
    audio = loadSound("sound/D3.wav");
  else if(a==23)
    audio = loadSound("sound/D#3.wav");
  else if(a==24)
    audio = loadSound("sound/E4.wav");
  else if(a==25)
	  audio = loadSound("sound/F4.wav");
  else if(a==26)
	  audio = loadSound("sound/F#4.wav");
  else if(a==27)//
	  audio = loadSound("sound/G4.wav");
  else if(a==28)
    audio = loadSound("sound/G#4.wav");
  else if(a==29)
    audio = loadSound("sound/A4.wav");
  else if(a==30)
    audio = loadSound("sound/A#4.wav");
  else if(a==31)
    audio = loadSound("sound/B4.wav");
  else if(a==32)
    audio = loadSound("sound/C4.wav");
  else if(a==33)
    audio = loadSound("sound/C#4.wav");
  else if(a==34)
    audio = loadSound("sound/D4.wav");
  else if(a==35)
    audio = loadSound("sound/D#4.wav");
  else if(a==36)
    audio = loadSound("sound/E5.wav");
  else if(a==37)
    audio = loadSound("sound/F5.wav");
  else if(a==38)
    audio = loadSound("sound/F#5.wav");
  else if(a==39)
    audio = loadSound("sound/G5.wav");
  else if(a==40)
    audio = loadSound("sound/G#5.wav");
  else if(a==41)
    audio = loadSound("sound/A5.wav");
  else if(a==42)
    audio = loadSound("sound/A#5.wav");
  else if(a==43)
    audio = loadSound("sound/B5.wav");
    
  audio.setVolume(.5);
  audio.play();
}
}
function playN()
{
  var MyJSONObject = { "0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11","12":"12","13":"13","14":"14","15":"15","16":"16","17":"17","18":"18","19":"19","20":"20","21":"21","22":"22","23":"23","24":"24","25":"25","26":"26","27":"27","28":"28","29":"29","30":"30","31":"31","32":"32","33":"33","34":"34","35":"35","36":"36","37":"37","38":"38","39":"39","40":"40","41":"41","42":"42","43":"43"};
  
  for(var key in MyJSONObject)
  {
    b = MyJSONObject[key];
    var d = playNote(b); 
  }
}
