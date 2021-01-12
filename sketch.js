var canvas;
var music;
var slab_1,slab_2,slab_3,slab_4;
var ball;
var r;
var Sound 

function preload(){
    Sound = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    r=random(120,640)
    //create 4 different surfaces
    slab_1=createSprite(120, 500, 150, 25);
    slab_1.shapeColor="red";
    slab_2=createSprite(295, 500, 150, 25);
    slab_2.shapeColor="orange";
    slab_3=createSprite(470, 500, 150, 25);
    slab_3.shapeColor="yellow";
    slab_4=createSprite(640, 500, 150, 25);
    slab_4.shapeColor="lime";
    //create box sprite and give velocity
    ball=createSprite(r, 100, 50, 50);
    ball.shapeColor="white";
    ball.velocityY=3
    
}

function draw() {
    background("black");
    //create edgeSprite

    if(ball.isTouching(slab_1)){
      ball.shapeColor="red"
      ball.bounceOff(slab_1)
      Sound.play() 
    }
    if(ball.isTouching(slab_4)){
        ball.shapeColor="lime"
        ball.bounceOff(slab_4)
        Sound.play() 
    }
    if(ball.isTouching(slab_3)){
        ball.shapeColor="yellow"
        ball.bounceOff(slab_3)
        Sound.play() 
    }
    if(ball.isTouching(slab_2)){
        ball.shapeColor="orange"
        ball.bounceOff(slab_2)
        Sound.play() 
    }
    //add condition to check if box touching surface and make it box
 
    drawSprites();
}
