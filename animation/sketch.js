var x=[],y=[],a=[],s=[],d=[];

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function setup() {
  // put setup code here

  const canvas =createCanvas(windowWidth,windowHeight*5.3);
  canvas.position(0,0);
  canvas.style('z-index',-1);
  
  for(let i=0;i<10;i++){
    x.push(random(1));
    y.push(random(-1000 ,-10));
    a.push(random(1,10));
    s.push(random(20,30));
    d.push(int(round(random(1))));
  }
  
  textAlign(CENTER);

}

function draw() {

  // put drawing code here
  background(255,255);
  
  
  for(let i=0;i<10;i++){
    textSize(s[i]);
    text(d[i],x[i]*windowWidth,y[i]);
    y[i]=(y[i]>windowHeight*5.3)?-50:y[i]+a[i];
  }

}