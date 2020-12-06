var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223.321);
  weight = random(30,52);
  bullet = createSprite(50,200,20, 10);
  bullet.shapeColor = "white";
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    
    }
    
    if(damage < 10)
    {
      wall.shapeColor = color (0,255,0);
    }
    

  }

  drawSprites();
}