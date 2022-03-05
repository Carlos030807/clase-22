const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var suelo ,backgroundimage,tower


function preload() {
 backgroundimage = loadImage("assets/background.gif")
 towerimage = loadImage("assets/tower.png")}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
 var options =  {
   isStatic:true 

 }
  
  suelo = Bodies.rectangle(0,height-1,width*2,1,options)
 World.add(world,suelo);

 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower);
}

function draw() {
  image(backgroundimage,0,0,1200,600);
  
  Engine.update(engine);
  rect(suelo.position.x,suelo.position.y,width*2,1);
  push();
  imageMode(CENTER);  
  image(towerimage,tower.position.x,towerimage.position.y,160,310);
  Pop();

}
