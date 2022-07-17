var bg,bgimg





function preload(){
 bgimg=loadImage("city-night.gif")




}
function setup(){
 createCanvas(800,500)
 bg=createSprite(400,250,800,500)
 bg.addImage("moving",bgimg)
 bg.scale=1.8
}
function draw(){
 background("red")
 


 drawSprites()

}