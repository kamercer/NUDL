function setup() {
  var height = window.screen.availHeight;
  var width = window.screen.availWidth;

  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(width, height);
  background(255);
  noSmooth();

  translate(140, 0);

  var a = (height/2)-25;
  
  wide = width - (width*.5);
  line(0, a, width, a);
  line(0, a+25, width, a+25);
  line(0, a+50, width, a+50);
  line(0, a+75, width, a+75);
  line(0, a+100, width, a+100);
}

function note(a)
{
  var height = window.screen.availHeight;
  var width = window.screen.availWidth;
  var b = (height/2)-25;
  if(a==1)
    return 0;
  else if(a==2)
	return 0;
  else if(a==3)
    return b+100;
  else if(a==4)
    return b+87;
  else if(a==5)
    return b+87;
  else if(a==6)
    return b+74;
  else if(a==7)
    return b+74;  
  else if(a==8)
    return b+63;
  else if(a==9)
    return b+63;
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
}

function draw() {
  var MyJSONObject = { "0":"12","1":"13","2":"14","3":"15","4":"16","5":"17","6":"18","7":"19","8":"20","9":"21","10":"22","11":"23","12":"24","13":"11","14":"10","15":"25","16":"26"};
  
  var i = 0;
  var a = 25;
  var b = 0;
  var c = 25;
  
  for(var key in MyJSONObject)
  {
    b = MyJSONObject[key];
    var d = note(b);
	
	if((b%12)==2 || (b%12)==4 || (b%12)==6 || (b%12)==9 || (b%12)==11)
    {
		stroke(0);
		strokeWeight(4);
      line(a-15, d+5, a, d+5);
      line(a-15, d-5, a, d-5);
      line(a-3, d+10, a-3, d-9);
      line(a-11, d+10, a-11, d-9);
      a = a+20; 
    }
	noStroke();
    fill(0);
    ellipse(a,d,1.15*c,.75*c);
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
    a=a+50;
    
  }
}