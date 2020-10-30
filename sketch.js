function setup() {
  createCanvas(800,400);
  fixedsprite=createSprite(200,200,40,40);
  movingsprite=createSprite(200,200,40,40);
sprite1=createSprite(100,100,40,40);
sprite2=createSprite(100,400,40,40);


fixedsprite.shapeColor="red";
movingsprite.shapeColor="blue"
sprite1.velocityY=5;
sprite2.velocityY=-5;
sprite1.shapeColor="pink";
sprite2.shapeColor="green";

}

function draw() {
  background(255,255,255); 
  
  movingsprite.x=World.mouseX;
  movingsprite.y=World.mouseY;
  if(movingsprite.x-fixedsprite.x<=movingsprite.width/2+fixedsprite.width/2
    &&fixedsprite.x-movingsprite.x<=movingsprite.width/2+fixedsprite.width/2
    &&movingsprite.y-fixedsprite.y<=movingsprite.height/2+fixedsprite.height/2
    &&fixedsprite.y-movingsprite.y<=movingsprite.height/2+fixedsprite.height/2){
    movingsprite.shapeColor="black";
    fixedsprite.shapeColor="black";

  }else {fixedsprite.shapeColor="red";
  movingsprite.shapeColor="blue"
  }
if(sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2
  &&sprite2.x-sprite1.x<=sprite1.width/2+sprite2.width/2){
    sprite1.velocityX=sprite1.velocityX*(-1);
    sprite2.velocityX=sprite2.velocityX*(-1);

  }
if(sprite1.y-sprite2.y<=sprite1.height/2+sprite2.height/2
  &&sprite2.y-sprite1.y<=sprite1.height/2+sprite2.height/2){
    sprite1.velocityY=sprite1.velocityY*(-1);
    sprite2.velocityY=sprite2.velocityY*(-1);
    
  }

  drawSprites();



}