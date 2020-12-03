//giving all the caracters a variable
var backImage, player_running, bananaImage, obstical_img, score = 0 , invisible_ground; 


//giving variable obstical and banana group
var obsticalGroup;
var bananaGroup;

//setting function preload to load image or animation
function preload()
{
  //loading image for jungle
  backImage = loadImage("jungle.jpg");
  
  //loading all monkey images for player
  player_running =     loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  //loading image for banana
  bananaImage = loadImage("banana.png");
  
  //loading image for rock
  obstical_img = loadImage("stone.png");
}


//setting setup function to set some special things
function setup() 
{
  //creating the canvas
  createCanvas(500, 400);
  
  
  //creating, adding velocity and adding the animation to  the background
  back = createSprite(100,100,700,400);
  back.velocityX = -9;
  back.addImage ("junjle",backImage);
  back.x = back.width/2;
  
  //creating invisible_ground, and making it invisible
  invisible = createSprite(35,381,400,10);
  invisible.visible = false;
  
  //creating, adding the animation to the player, making it collide with   invisible_ground
  player = createSprite(80,380,20,30);
  player.addAnimation("monkey",player_running);
  player.scale = 0.09;
  
  obsticalGroup = new Group();
  bananaGroup = new Group();
  
}

//setting function draw
function draw() {
  background(220);
   
  //adding function to repete the junjel
  if (back.x < 0)
  {
    back.x = back.width/2;
  }
  
   if(frameCount % 70 === 0) 
    {
      obstical = createSprite(600,345,10,40); 
      obstical.velocityX = -9;      
      obstical.addImage("stone.png",obstical_img);
      obstical.scale = 0.2;
      obsticalGroup.add(obstical)
      obsticalGroup.visible = true;      
    }
  
      if(frameCount % 60 === 0) 
    {
      //creating, adding velocity and animation to the banana
      banana = createSprite(590,200,20,10);
      banana.velocityX = -9;
      banana.addImage ("banana",bananaImage);
      banana.scale = 0.04;                  
      bananaGroup.add(banana);
      bananaGroup.visible = true; 
      bananaGroup.lifetime = 100;
    }
   
  
  if(player.isTouching(bananaGroup))
    {
      score = score+2;
      bananaGroup.destroyEach();
    }
  
  //setting function to suport player
  player.collide(invisible)
  
  //adding jumping ability to player
  if(keyWentDown(UP_ARROW))
    {
      player.velocityY = -7;
    }
  
  //add gravity
  player.velocityY = player.velocityY + 0.2;
  
  
  //setting function drawSprites
  drawSprites()
  text("score"+score,430,30 );
}
