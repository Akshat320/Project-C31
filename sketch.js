
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,10);

	for(var k =0; k<=width; k=k+80)
	{
     division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
	}

	for(var k =0; k<=width; k=k+50)
	{
     plinkos.push(new Plinkos(k, 75))
	}

	for(var k =0; k<=width-10; k=k+50)
	{
     plinkos.push(new Plinkos(k, 175))
	}

	for(var k =0; k<=width; k=k+50)
	{
     plinkos.push(new Plinkos(k, 275))
	}

	for(var k =0; k<=width-10; k=k+50)
	{
     plinkos.push(new Plinkos(k, 375))
	}


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  ground.display();
 

  for(var i = 0;i<plinkos.length;i++)
  {
	  plinkos[i].display();
  }

  for(var i = 0;i<division.length;i++)
  {
	  division[i].display();
  }

  if (frameCount%60 === 0)
  {
	particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var i = 0;i<particles.length;i++)
  {
	  particles[i].display();
  }

  drawSprites();
 
}