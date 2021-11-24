var untwist = 2;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
}

function draw(){
  background(255);
  translate(250,250);
  
  var i = 20;
  
  while(i > 0){
    push();
    var sz = (frameCount + i*width/20) % width
    rotate (sz/(untwist));
    strokeWeight(sz/15);
    stroke(0,map(sz,0,width*1.2, 255, 0));
    rect(0,0,sz,sz);
    pop();
    i = i-1;
  }
}

