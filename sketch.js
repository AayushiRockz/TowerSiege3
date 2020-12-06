const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var h1Img,polygon, ground1, ground2,slingshot
var score = 0;
var backgroundImg;
var bg= "night.jpg";


function preload(){
  getBackgroundImg(); 
  h1Img = loadImage("hexagon1.png");
  
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  // blocks

  // level one
  block1 = new Box(330,435,30,40);
  block2 = new Box(360,435,30,40);
  block3 = new Box(390,435,30,40);
  block4 = new Box(420,435,30,40);
  block5 = new Box(450,435,30,40);

  // level2 
  block6 = new Box(360,395,30,40);
  block7 = new Box(390,395,30,40);
  block8 = new Box(420,395,30,40);

  // top level
  block9 = new Box(390,355,30,40);

  //part 2  higher pyramid
  // top most
  block10 = new Box(900,135,30,40);
 
  // 2nd level
  block11 = new Box(870,175,30,40);
  block12= new Box(900,175,30,40);
  block13= new Box(930,175,30,40);

  // 3rd level
  block14= new Box(840,215,30,40);
  block15= new Box(870,215,30,40);
  block16 = new Box(900,215,30,40);
  block17= new Box(930,215,30,40);
  block18 = new Box(960,215,30,40);

  // bottom level
  block19 = new Box(810,255,30,40);
  block20 = new Box(840,255,30,40);
  block21 = new Box(870,255,30,40);
  block22 = new Box(900,255,30,40);
  block23 = new Box(930,255,30,40);
  block24= new Box(960,255,30,40);
  block25= new Box(990,255,30,40);

  polygon = Bodies.circle(50,200,20); 
  World.add(world,polygon);

  
  

  ground1 = new Ground(390,472,200,30);

  ground2 = new Ground(900,290,250,30);

  slingshot = new SlingShot(this.polygon,{x:200, y:200});

  
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  // Engine.update(engine);

   ground1.display();
   ground2.display();

  textSize(40);
  fill(255,0,150);
  text("Score :"+score,750,40);
   text("Press space for another chance!!!",100,100);
   

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  // calling the score function
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();


 slingshot.display();

 imageMode(CENTER);
 image(h1Img , polygon.position.x, polygon.position.y, 80,80);
 
  drawSprites();
}


function mouseDragged(){
 
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}



function mouseReleased(){
   
   slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=18){
    bg ="Morning.jpg";
  }else{
    bg ="night.jpg";
  }

    backgroundImg = loadImage(bg);

}

