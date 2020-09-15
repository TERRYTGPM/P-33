const Engine = Matter.Engine,  World = Matter.World,  Events = Matter.Events,  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];


var divisionHeight=300;
var score = 0;
var turn = 0;

var gamestate = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500", 30, 600);
  text(" 500", 100, 600);
  text("  500", 170, 600);
  text("   500", 240, 600);
  text("      100", 310, 600);
  text("      100", 390, 600);
  text("   100", 480, 600);
  text("   200", 570, 600);
  text("   200", 660, 600);
  text("   200", 720, 600);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }



   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


  if(particle != null){
      particle.display();
      if(particle.body.position.y > 760){
        if(particle.body.position.x < 300 && particle.body.position.x > 0){       
          if(particle.body.position.y <= 770){
            score = score + 500;
            partcicle = null;
            World.remove(world, particle);
            if(turn >= 5) gamestate = "end";
            
          }
        }

        if(particle.body.position.x > 301 && particle.body.position.x < 600){       
          if(particle.body.position.y <= 770){
            score = score + 100;
            partcicle = null;
            World.remove(world, particle);
            if(turn >= 5) gamestate = "end";

          }
        }
        if(particle.body.position.x > 601 && particle.body.position.x < 800){
          if(particle.body.position.y <= 770){
            score = score + 200;
            partcicle = null;
            World.remove(world, particle);
            if(turn >= 5) gamestate = "end";

          }
        }
      
      }

      if(gamestate === "end"){
        text("GAME OVER. YOU SUCK!!!!!!", 300, 200);
      }
  }
}

function mousePressed(){
  if(gamestate !== "end"){
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}