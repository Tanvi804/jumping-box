var canvas,box1,box2,box3,box4;
var music,stone;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(790,600);

    //create 4 different surfaces
    box1=createSprite(95,580,190,40);
    box1.shapeColor="blue";

    box2=createSprite(295,580,190,40);
    box2.shapeColor="red";

    box3=createSprite(495,580,190,40);
    box3.shapeColor="yellow";

    box4=createSprite(695,580,190,40);
    box4.shapeColor="green";

    //create stone sprite and give velocity
     
    stone=createSprite(random(20,750),50,40,40);
    stone.shapeColor="white";
    stone.velocityY=4;
    stone.velocityX=4

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges=createEdgeSprites();
    stone.bounceOff(edges);

stone.debug=true;

    //add condition to check if box touching surface and make it box
     if (box1.isTouching(stone) && stone.bounceOff(box1)){
       stone.shapeColor="blue"
       stone.velocityX=0
       stone.velocityY=0
       music.stop();
     }

     if (box2.isTouching(stone) && stone.bounceOff(box2)){
        stone.shapeColor="red"
      }

      if (box3.isTouching(stone) && stone.bounceOff(box3)){
        stone.shapeColor="yellow"
        music.play();
      }

      if (box4.isTouching(stone) && stone.bounceOff(box4)){
        stone.shapeColor="green"
      }

      drawSprites();
}
