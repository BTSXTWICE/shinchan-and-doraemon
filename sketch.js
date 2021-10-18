
var gameState = 0;
var timer=100;
var shinchan_run,shinchan_dance,doraemon_run,doraemon_doracake, background_image,game_thumbnail;
var shinchan,doraemon,background,invivsiblebackground, doracake_group;
var doracake;
var doraScore=0,shinScore=0;

function preload(){
    shinchan_run=loadImage("shinchan_zindabad_0.2.png")
    shinchan_dance=loadImage("lol.png")
    doraemon_run=loadImage("doraemon_baghi3.png")
    doraemon_doracake=loadImage("modak.png")
    background_image=loadImage("track.jpeg")
    game_thumbnail=loadImage("thumbnail.jpeg")


}

function setup(){
    createCanvas(600,600);
     
    background=createSprite(300,300,800,600);
   
    background.addImage("tdoong",game_thumbnail);
    background.velocityY= 3
    background.y=background.height/2
    


doracake_group=new Group();

shinchan=createSprite(450,530,20,10);
shinchan.addImage(shinchan_run);
shinchan.scale=0.7;

doraemon=createSprite(105,530,20,10);
doraemon.addImage(doraemon_run);
doraemon.scale=0.4;

}

function draw(){
if(gameState===0){
    background.scale=0.8
background.changeImage("tdoong")
timer=timer-1
if(timer<=0){
    
    timer=0
    gameState=1
}
}
drawSprites();
console.log(gameState)
if(gameState===1){
    background.addImage("ttt",background_image);
background.changeImage("ttt")
background.scale=1.5
    if(background.y>400){
background.y= background.height/2
}
spawnDoracakes()
edges=createEdgeSprites()
shinchan.collide(edges);
doraemon.collide(edges);
for(var i=0;i<doracake_group.length;i++){
if(doracake_group.get(i).isTouching(shinchan)){doracake_group.get(i).destroy()
shinScore+=3
}
if(doracake_group.get(i).isTouching(doraemon)){doracake_group.get(i).destroy()
doraScore+=3 
}
}

if(keyDown("right")){
    shinchan.x=shinchan.x+2;
}
if(keyDown("left")){
    shinchan.x=shinchan.x-2;
}
if(keyDown("a")){
doraemon.x=doraemon.x-2;
}
if(keyDown("d")){
    doraemon.x=doraemon.x+2;
}

textSize(15)
text("doraScore:"+doraScore,50,20)
text("shinScore:"+shinScore,480,20)
}
}
function spawnDoracakes() {
    if (frameCount % 60 === 0) {
        var doracake = createSprite(300,100,20,10);
       doracake.x = Math.round(random(80,560));
        doracake.addImage(doraemon_doracake);
        doracake.scale = 0.3;
        doracake.velocityY = 3;
        doracake.lifetime=150;
        doracake_group.add(doracake)
        doracake.debug=true;
        doracake.setCollider("circle",0,0,20)
}
}
  