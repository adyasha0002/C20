var fixRect,movRect;


function setup() {
  createCanvas(1200,800);
  fixRect= createSprite(600, 400, 50, 80);
  fixRect.shapeColor="green";
  fixRect.debug=true;
  movRect=createSprite(400,200,80,50);
  movRect.shapeColor="green";
  movRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movRect.x=World.mouseX;
  movRect.y=World.mouseY;

  if(movRect.x-fixRect.x<fixRect.width/2+movRect.width/2
    && fixRect.x-movRect.x<fixRect.width/2+movRect.width/2
    && movRect.y-fixRect.y<fixRect.height/2+movRect.height/2
   && fixRect.y-movRect.y<fixRect.height/2+movRect.height/2)
{
    fixRect.shapeColor="red";
    movRect.shapeColor="red";
  }
else{
  fixRect.shapeColor="green";
  movRect.shapeColor="green";
}
  drawSprites();
}