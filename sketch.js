const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//var mouseX = 0;
//var mouseY = 0;
var engine, world, ground, hammer;

function preload() {}

function setup() {
  createCanvas(800, 600);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400, 600, 800, 20);
  hammer = new Hammer(200, 100);
  stone = new Stone(400, 300);
  rubber = new Rubber();

  sand1 = new Sand();
  sand2 = new Sand();
  sand3 = new Sand();
  sand4 = new Sand();
  sand5 = new Sand();
  sand6 = new Sand();
  sand7 = new Sand();

  iron = new Iron(600, 400);
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);
  hammer.body.position.x = mouseX;
  hammer.body.position.y = mouseY;

  //drawSprites();
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron.display();
}
