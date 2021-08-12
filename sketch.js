var fox,foxImage;

var wall1,wall2,wall3,wall4,wall5,
    wall6,wall7,wall8,wall9,wall10,
    wall11,wall12,wall13,wall14,wall15;
var wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;
var wall41,wall42,wall43;
var food,grenade;
var gameState= PLAY;
var foodImage,grenadeImg;
var grenadeGroup;
var foodGroup;
var PLAY = 1;
var END = 0;
var score = 0;

var wallGroup;

function preload(){
   
   foxImage = loadImage("fox.png");
   foodImage = loadImage("chicken-leg.png");
   grenadeImage = loadImage("hand-grenade.png");
}

function setup(){
 
  createCanvas(500,500);
  foodGroup = new Group();
  wallGroup = new Group();
  grenadeGroup = new Group();
  
  fox = createSprite(270,450,10,10);
  fox.addImage(foxImage);
  fox.scale = 0.5;
 

  wall1 = createSprite(46,250,10,400);
  wall2 = createSprite(454,250,10,400);
  wall3 = createSprite(127,46,173,10);
  wall4 = createSprite(352,46,215,10);
  wall5 = createSprite(127,46,173,10);
  wall6 = createSprite(144,454,208,10);
  wall7 = createSprite(372,454,173,10);
  wall8 = createSprite(210,250,10,170);
  wall9 = createSprite(250,310,10,215);
  wall10= createSprite(290,350,10,50);
  wall11= createSprite(310,330,130,10);
  wall12= createSprite(399,250,120,10);
  wall13= createSprite(128,230,10,137);
  wall14= createSprite(128,292,95,10);
  wall15= createSprite(165,330,90,10);
  wall16= createSprite(170,250,90,10);
   wall17= createSprite(87,169,10,174);
  wall18= createSprite(131,370,10,86);
wall19= createSprite(169,413,90,10);
 wall20= createSprite(210,374,85,10);
 wall21= createSprite(146,126,130,10);
 wall22= createSprite(168,146,10,129);
  wall23= createSprite(289,65,10,45);
 wall24= createSprite(227,166,50,10);
 wall25= createSprite(329,167,90,10);
 wall26= createSprite(290,208,10,90);
  wall27= createSprite(270,208,30,10);
   wall28= createSprite(248,144,10,40);
   wall29= createSprite(290,125,95,10);
   wall30= createSprite(333,100,10,40);
   wall31= createSprite(332,247,10,90);
   wall32= createSprite(310,287,40,10);
    wall33= createSprite(372,67,10,40);
    wall34= createSprite(413,100,10,50);
   wall35= createSprite(208,428,10,40);
   wall36= createSprite(290,410,90,10);
   wall37= createSprite(371,302,10,50);
   wall38= createSprite(330,386,10,50);
   wall39= createSprite(367,368,75,10);
   wall40= createSprite(410,338,10,150);
   wall41= createSprite(371,144,10,50);
   wall42= createSprite(390,121,50,10);
   wall43= createSprite(228,81,130,10);

   wallGroup.add(wall1);
  wallGroup.add(wall2);
  wallGroup.add(wall3);
  wallGroup.add(wall4);
  wallGroup.add(wall5);
  wallGroup.add(wall6);
  wallGroup.add(wall7);
  wallGroup.add(wall8);
  wallGroup.add(wall9);
  wallGroup.add(wall10);
  wallGroup.add(wall11);
  wallGroup.add(wall12);
  wallGroup.add(wall13);
  wallGroup.add(wall14);
  wallGroup.add(wall15);
  wallGroup.add(wall16);
  wallGroup.add(wall17);
  wallGroup.add(wall18);
  wallGroup.add(wall19);
  wallGroup.add(wall20);
  wallGroup.add(wall21);
  wallGroup.add(wall22);
  wallGroup.add(wall23);
  wallGroup.add(wall24);
  wallGroup.add(wall25);
  wallGroup.add(wall26);
  wallGroup.add(wall27);
  wallGroup.add(wall28);
  wallGroup.add(wall29);
  wallGroup.add(wall30);
  wallGroup.add(wall31);
  wallGroup.add(wall32);
  wallGroup.add(wall33);
  wallGroup.add(wall34);
  wallGroup.add(wall35);
  wallGroup.add(wall36);
  wallGroup.add(wall37);
  wallGroup.add(wall38);
  wallGroup.add(wall39);
  wallGroup.add(wall40);
  wallGroup.add(wall41);
  wallGroup.add(wall42);
  wallGroup.add(wall43);

}

function draw(){
   background("white");
   spawnfood(); 
   spawnGrenade();
if(gameState === PLAY){
  if(keyDown(UP_ARROW)||keyDown("W")){
    fox.y = fox.y-1;
  }

  if(keyDown(DOWN_ARROW)||keyDown("S")){
    fox.y = fox.y+1;
  }

  if(keyDown(RIGHT_ARROW)||keyDown("D")){
    fox.x  = fox.x+1;
  }

  if(keyDown(LEFT_ARROW)||keyDown("A")){
    fox.x = fox.x-1;
    }

    if(fox.isTouching(foodGroup)){
      score = score+10;
    }

  if(fox.isTouching(grenadeGroup)){
      score =0;
      gameState = END;
    }

    if(fox.isTouching(wallGroup)){
      gameState = END;
    }
  }
    

  if(gameState === END){
    fill("black");
    textSize(18);
    text("You have lost the game.",170,250);
    text("Press 'R' to restart",170,270);
    text.depth = wallGroup.depth;
    text.depth = wallGroup.depth+1;
    fox.x =270;
    fox.y =450;

  }

  if(keyDown("R")){
    gameState = PLAY;
  }
  if(score === 100000){
    text("YOU HAVE ACHEIVED THE TARGET",220,250);
  }

 
  
    
  
 drawSprites();
}

function spawnfood(){
  if(frameCount%60 === 0){
   food = createSprite(200,200,5,5);
        food.x = Math.round(random(100,490));
        food.y = Math.round(random(100,490));
        food.addImage(foodImage);
        food.scale = 0.5;
        food.lifetime = 150;
        foodGroup.add(food);
        
       
      }

}

function spawnGrenade(){
  if(frameCount%60 === 0){
     grenade = createSprite(200,200,5,5);
      grenade.x = Math.round(random(100,490));
      grenade.y = Math.round(random(100,490));
      grenade.addImage(foodImage);
      grenade.scale = 0.5;
      grenade.lifetime = 150;
      grenadeGroup.add(grenade);
        
       
      }}