
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if(keyDown("up")){
   background("pink") 
   
  }
  if(keyDown("down")){
    background("blue") 
   }
   if(keyDown("left")){
    background("red") 
   }
   if(keyDown("right")){
    background("violet") 
   }
}




