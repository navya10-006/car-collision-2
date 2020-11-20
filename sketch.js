var car,wall,speed,weight,deformation
function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80);
  car.velocityX=speed;
}

function draw() {
  background("white");
  drawSprites();
  if(wall.x-car.x<=wall.width/2+car.width/2){
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation<100){
      car.shapeColor="green";
      car.velocityX=0;
    }
    else if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
      car.velocityX=0;
    }
    else if(deformation>180){
      car.shapeColor="red";
      car.velocityX=0;
    }
  }
}