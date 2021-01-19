const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bar, ball1,ball2,ball3,ball4,ball5,string1,string2,string3,string4,string5;


function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,100,20);
	ball2 = new Ball(250,100,20);
	ball3 = new Ball(300,100,20);
	ball4 = new Ball(350,100,20);
	ball5 = new Ball(400,100,20);
	string1 = new String(ball1.body,{x:200,y:100});
	string2 = new String(ball2.body,{x:250,y:100});
	string3 = new String(ball3.body,{x:300,y:100});
	string4 = new String(ball4.body,{x:350,y:100});
	string5 = new String(ball5.body,{x:400,y:100});
	bar = new Bar(50,50,500,20);


	Engine.run(engine);
}


function draw() {
	background(255);
	Engine.update(engine);


  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  bar.display();

  if(keyWentDown(UP_ARROW) && keyCode == UP_ARROW){
	Body.applyForce(ball1.body,ball1.body.position,{x:-90,y:0});
}
	}

	