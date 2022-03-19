var x=[],y=[],a=[],s=[],d=[],numberOfDigit=1;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);

}
function setup() {


  const canvas =createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index',-1);
  
  for(let i=0;i<numberOfDigit;i++){
    x.push(random(1));
    y.push(random(-100 ,-10));
    a.push(random(1,5));
    s.push(random(15,20));
    d.push(int(round(random(1))));
  }
  
  textAlign(CENTER);

}

function draw() {


  background(255,255);
  for(let i=0;i<numberOfDigit;i++){

    textSize(s[i]);
    text(d[i],x[i]*windowWidth,y[i]);

    if(y[i]>windowHeight){
          x[i]=random(1);
          y[i]=random(-100 ,-10);
          a[i]=random(1,5);
          s[i]=random(15,20);
          d[i]=int(round(random(1)));
    }
    else{
          y[i]+=a[i];
    }
  }

}