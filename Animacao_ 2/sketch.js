var untwist = 4;
var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
  t = 100;
}

function draw(){
  background(255);
  translate(800,400);
 //translate(windowWidth,windowHeight); 

  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  var i = 30;
  
  while(i > 0){
    push();
    var sz = (frameCount + i*windowWidth/50) % windowWidth
    rotate (sz/(untwist));
    strokeWeight(sz/5);
    stroke(r,map(sz,0,windowWidth*1.2, 255, 0));
    rect(0,0,sz,sz);
    pop();
    i = i-1;
    t = t + 0.001;
    
    fill(r,g,b);
  }
}
