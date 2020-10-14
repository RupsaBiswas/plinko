const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[];
var plinkos=[];
var division=[];


var ground;
var divisionHeight=300;
var score=0;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
ground= new Ground(240,height,800,20);

for (var k = 0; k <=width; k = k + 80) {
  division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 75; j <=width; j=j+50) 
 { 
 
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,175));
 }

  for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,275));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,375));
 }
  

  
}







function draw() {
  Engine.update(engine);
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   score++;
 }
  
 background(0);  

 for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   for(var j=0;j< plinkos.length; j++){
     plinkos[j].display();
   }

   
   
 
 ground.display();
 
  drawSprites();
}