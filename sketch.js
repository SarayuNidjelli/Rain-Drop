const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
var maxDrops = 100;
var drops = [];
function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world; 
    createCanvas(600,900);
    
    for(var i = 0; i < maxDrops; i = i + 1){
        drops.push (new createDrop(random(0,600),random(0,800)));
        
    }
}

function draw(){
    Engine.update(engine); 
    background(0);

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites()
}   

