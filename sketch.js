const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourEngine, ourWorld;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(800,400);
    ourEngine = Engine.create();
    ourWorld = ourEngine.world;
 
    ground=new Ground();
    box1= new Box(180,200,50,50);    
    box2= new Box(200,150,50,100);
    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    
    box1.display();
    ground.display();
    box2.display();
}