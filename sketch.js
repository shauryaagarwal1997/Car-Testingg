const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myEngine;
  var myWorld;
  var wall ;
  var car;
  var speed;
  var weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  
}

function draw() {
  background(0);  
  car.velocityX=speed;
  Engine.update(myEngine)
  
  drawSprites();
}