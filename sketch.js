const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maximumWaterDrops=50;
var rain=[];
var lightning;
var drops

function preload(){
    lightningImage=loadImage("images/thunderbolt/1.png")
}

function setup(){
    createCanvas(400, 600);
    engine = Engine.create();
   world = engine.world;

   lightning=createSprite(200,20);
   lightning.addImage(lightningImage);
   lightning.visible=false;

   person=new Umbrella(200,550,30,100)
   
  // for(var i=0;i<150;i++){
   // drops.push(new drop(random(0,400),random(0,400)));}
}

function draw(){
 background("black")   
 Engine.update(engine);

 if(frameCount%400===0){
    lightning.visible=true;
} else if(frameCount%430===0){
    lightning.visible=false;
}
   //for (var i = 0; i < drops.length; i++) {
   //drops[i].update();
   //drops[i].display();}

person.display();
  drawSprites();
}   

