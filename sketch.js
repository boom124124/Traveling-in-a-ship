var ship, Ship_moving 
var bg

function preload(){
Ship_moving = loadAnimation("ship-1.png", "ship-2.png");
Sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  bg = createSprite(200,200,200,200);
  bg.addAnimation("Sea_image", Sea_image);
  bg.x = bg.width/2;


  ship = createSprite(112,250,100,100);
  ship.addAnimation("Ship_moving", Ship_moving);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
 
  bg.velocityX = -2

  if(bg.x < 0){
    bg.x = bg.width/2;
  }
  drawSprites();
}