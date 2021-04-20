const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var plinkos, particles,divisions;
var divisionHeight=250;
function setup() {
  createCanvas(810,750);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(width/2,725,width,50);
  divisions=[];
  particles=[];
  plinkos=[];
  for(var k=5;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2-50,10,divisionHeight))
  }
  for(var k=40;k<=width;k=k+50){
    plinkos.push(new Plinko(k,75))
  }
  for(var k=15;k<=width-10;k=k+50){
    plinkos.push(new Plinko(k,145))
  }
  for(var k=40;k<=width;k=k+50){
    plinkos.push(new Plinko(k,215))
  }
  for(var k=15;k<=width-10;k=k+50){
    plinkos.push(new Plinko(k,285))
  }
  for(var k=40;k<=width;k=k+50){
    plinkos.push(new Plinko(k,355))
  }
}

function draw() {
  background("#000");
  Engine.update(engine);
  ground.display()
  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display()
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10))
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display()
  }
  drawSprites();
}