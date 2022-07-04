var ground , groundImg 
var plane
var obstacle , obstacleImg , obstaclegrp
var rand
var over;
var overImg;
var score;
function preload(){
 groundImg = loadImage("background.png");
obstacleImg = loadImage("spikeBlock.png");
overImg = loadImage("gameOver.png")
}

function setup() {
 createCanvas(600,400)
 ground = createSprite(600,height/2)
  plane = createSprite(100,100,50,20)
  over = createSprite(300,200,600,400)
over.scale = 3
over.visible = false;
 ground.addImage(groundImg);
 over.addImage(overImg);

 ground.x = ground.width /2;
 ground.velocityX = -4;
 obstacleGroup = createGroup()
score = 0
}
 


function draw() {
 background(220)
 

 if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(obstacleGroup.isTouching(plane)) {
ground.destroy()
plane.destroy()
obstacleGroup.destroyEach()
over.visible = true }
if(keyDown("up_arrow")) {
    plane.y -= 3
}
   if(keyDown("down_arrow")) {
    plane.y += 3
   }
  if(frameCount%60 === 0) {
    score +=1;
  }
  text("Score: "+ score, 500,50);
  spawnObstacles()
 drawSprites()
  }


function spawnObstacles(){
     rand = Math.round(random(50,350))

    if (frameCount % 60 === 0){
        obstacle = createSprite(500,rand,50,50)   
        obstacle.addImage(obstacleImg);
obstacle.velocityX = -3
    obstacle.scale = 0.5;
    obstacle.depth = over.depth;
    over.depth = over.depth + 1;
obstacleGroup.add(obstacle);

    }
}