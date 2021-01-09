
function setup()
{
  createCanvas(600,560);

  Sofia = createSprite(20,25, 20, 20);
Sofia.shapeColor=("red");

 cardboard1 = createSprite(10, 70, 150, 20);
cardboard1.shapeColor=("green");
 cardboard2 = createSprite(130, 5, 25, 200);
cardboard2.shapeColor=("green");
 cardboard3 = createSprite(200, 45, 130, 25);
cardboard3.shapeColor=("green");
 cardboard4 = createSprite(80, 160, 100, 25);
cardboard4.shapeColor=("green");
 cardboard5 = createSprite(195, 165, 20, 100);
cardboard5.shapeColor=("green");
 cardboard6 = createSprite(265, 100, 20, 60);
cardboard6.shapeColor=("green");
 cardboard7 = createSprite(340, 60, 60, 20);
cardboard7.shapeColor=("green");
 cardboard8 = createSprite(350, 130, 20, 90);
cardboard8.shapeColor=("green");
 cardboard9 = createSprite(280, 150, 60, 20);
cardboard9.shapeColor=("green");
 cardboard10 = createSprite(400, 235, 190, 20);
cardboard10.shapeColor=("green");
 cardboard11 = createSprite(260, 250, 20, 90);
cardboard11.shapeColor=("green");
 cardboard12 = createSprite(220, 285, 80, 20);
cardboard12.shapeColor=("green");
 cardboard13 = createSprite(170, 240, 60, 20);
cardboard13.shapeColor=("green");
 cardboard14 = createSprite(0, 240, 150, 20);
cardboard14.shapeColor=("green");
 cardboard15 = createSprite(75, 250, 20, 100);
cardboard15.shapeColor=("green");
 cardboard16 = createSprite(120, 360, 20, 80);
cardboard16.shapeColor=("green");
 cardboard17 = createSprite(30, 320, 20, 80);
cardboard17.shapeColor=("green");
 cardboard18 = createSprite(220, 320, 20, 70);
cardboard18.shapeColor=("green");
 cardboard19 = createSprite(250, 380, 60, 20);
cardboard19.shapeColor=("green");
cardboard20 = createSprite(300, 320, 20, 100);
cardboard20.shapeColor=("green");
 cup = createSprite(400, 400, 50, 100);
cup.shapeColor=("yellow");

}





function draw() {
 background("orange");
 drawSprites();
 
 Sofia.velocityX=0;
 Sofia.velocityY=0;
 
 text("Sofia", 50, 20);
 text("cup", 350, 375);
 
 
 edges= createEdgeSprites();
 
 Sofia.bounceOff(edges);
 Sofia.bounceOff(cardboard1);
 Sofia.bounceOff(cardboard2);
 Sofia.bounceOff(cardboard3);
 Sofia.bounceOff(cardboard4);
 Sofia.bounceOff(cardboard5);
 Sofia.bounceOff(cardboard6);
 Sofia.bounceOff(cardboard7);
 Sofia.bounceOff(cardboard8);
 Sofia.bounceOff(cardboard9);
 Sofia.bounceOff(cardboard10);
 Sofia.bounceOff(cardboard11);
 Sofia.bounceOff(cardboard12);
 Sofia.bounceOff(cardboard13);
 Sofia.bounceOff(cardboard14);
 Sofia.bounceOff(cardboard15);
 Sofia.bounceOff(cardboard16);
 Sofia.bounceOff(cardboard17);
 Sofia.bounceOff(cardboard18);
 Sofia.bounceOff(cardboard19);
 Sofia.bounceOff(cardboard20);
                                                                                                                                                 
 
// Sofia.bounceOff(cup);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 if (Sofia.isTouching(cup)) {
   text("You Won!", 250, 175);
   Sofia.bounce(cup);
   
 }
 
 
 
 
 
 
 
 if (keyDown(UP_ARROW)) {
   Sofia.velocityX=0;
   Sofia.velocityY=-3;
 }
 
 if (keyDown(DOWN_ARROW)) {
   Sofia.velocityX=0;
   Sofia.velocityY=3;
 }
 
 if (keyDown(RIGHT_ARROW)) {
   Sofia.velocityX=3;
   Sofia.velocityY=0;
 }
 if (keyDown(LEFT_ARROW)) {
   Sofia.velocityX=-3;
   Sofia.velocityY=0;
 }
  
   
 
 
 
 
 
 
 
 
 
 
 
 
 
}
