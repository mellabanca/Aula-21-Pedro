const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine;
var world;
var ball;
var ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ballConfig = {
    restitution: 0.8,
    frictionAir: 0.01
  }
  
  ball = Bodies.circle(100,10,20, ballConfig);
  World.add(world,ball);

  var groundConfig = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20, groundConfig);
  World.add(world,ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("black");
 Engine.update(engine);
 ellipse(ball.position.x, ball.position.y, 20);
 rect(ground.position.x, ground.position.y, 400, 20);
}

