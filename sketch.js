
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,paperimg;
function preload(){
   paperimg=loadImage("paper.png");
   dustbin1=loadImage("dustbingreen.png");
   dustbin2=loadImage("trashcan.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	var ball_options={
		'isStatic': false,
		'restitution':0.3,
		'friction':0.5,
		'density':1.2

	}

	engine = Engine.create();
	world = engine.world;
	paper= Bodies.circle(100,100,40,ball_options)
	World.add(world,paper)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  image(paperimg,paper.position.x,paper.position.y,70,70)
  
  
  groundObject.display();
 // dustbinObj.display();
  image(dustbin1,1070,440,250,230)
Keypressed();
}
function Keypressed()
  {
   if(keyWentDown(UP_ARROW))
   {
       Matter.Body.applyForce(paper,paper.position,{x:390,y:-460});
   }
  }

