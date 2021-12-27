// TASKS
// Step 1: Spawn the enemies (enemy1 and enemy2 should come from right side whereas enemy3 and enemy4 should come from left side)
// Step 2: Create groups for birds and enemies and add sprites to it.
// Step 3: Assign Game States - play and end
// Step 4: if boy touches enemies, gamestate changes to end. Add hit sound.


function preload(){
  bgImage = loadImage("road.png");
  
  boyAnimation = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png");
  
  jumpSound = loadSound("jump.mp3");
  
  birdImg = loadImage("bird.png");

}

function setup(){
  createCanvas(600,400)
  
  //background sprite
  bg = createSprite(300,200);
  bg.addImage(bgImage);
  bg.scale = 1.4;
  bg.velocityX = -2;
  
  //boy sprite
  boy = createSprite(70,300,10,10);
  boy.addAnimation("boy", boyAnimation);
  boy.scale=0.32;
  
  //invisible ground
  invisibleGround = createSprite(300,380,600,10);
  invisibleGround.visible = false;
  
}

function draw(){
  background("white");
  
  // infinite ground
  if(bg.x<200){
    bg.x = bg.width/2
  }
  
  // console.log(boy.y)
  
  //move up
  if(keyDown("space") && boy.y>=295){
    boy.velocityY = -15;
    jumpSound.play();
  }
  
  //gravity
  boy.velocityY = boy.velocityY + 0.8;
  
  boy.collide(invisibleGround);
  
  //function call
  spawnBirds();
  
  drawSprites();
}

// function declaration
function spawnBirds(){
  if(frameCount % 120 === 0){
    bird = createSprite(600,random(20,120),20,20);
    bird.velocityX = -3;
    bird.addImage(birdImg);
    bird.scale = 0.2;
    
    //lifetime
    bird.lifetime = 200
  }
}