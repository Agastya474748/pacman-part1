var pacman_img,green_img,blue_img,lightgreen_img,red_img
var pacman,greenGhost,blueGhost,lightgreenGhost,redGhost
var edges
var wallarray1=[]
var wallarray2=[]
var wallarray3=[]
var wallarray4=[]
var wallarray5=[]
var wallarray6=[]
var dotarray1=[]
var dotarray2=[]
var dotarray3=[]
var dotarray4=[]
var dotarray5=[]
var dotarray6=[]
var dotarray7=[]
var dotarray8=[]
var dotarray9=[]

function preload (){
  pacman_img=loadImage("images/pacman.png")
  green_img=loadImage("images/greenghost.png")
  blue_img=loadImage("images/blueghost.png")
  red_img=loadImage("images/redghost.jpg")
  lightgreen_img=loadImage("images/lightgreen.png")
}
function setup() {
  createCanvas(1400,700)
  edges = createEdgeSprites()
  pacman=createSprite(355,165)
  pacman.scale=0.15
  pacman.addImage(pacman_img)
  greenGhost=createSprite(700,350)
  greenGhost.scale=0.1
  greenGhost.addImage(green_img)
  blueGhost=createSprite(700,300)
  blueGhost.scale=0.08
  blueGhost.addImage(blue_img)
  redGhost=createSprite(750,240)
  redGhost.scale=0.03
  redGhost.addImage(red_img)
  lightgreenGhost=createSprite(650,240)
  lightgreenGhost.scale=0.06
  lightgreenGhost.addImage(lightgreen_img)
  for( var x=50;x<width-50;x=x+100){
    wallarray1.push(createSprite(x,100,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray2.push(createSprite(x,200,70,10))
   }
   for( var x=50;x<width-50;x=x+100){
    wallarray3.push(createSprite(x,300,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray4.push(createSprite(x,400,70,10))
   }
   for( var x=50;x<width-50;x=x+100){
    wallarray5.push(createSprite(x,500,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray6.push(createSprite(x,600,70,10))
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,100,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,165,10,10)
    dot.shapeColor = "yellow"
    dotarray2.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,235,10,10)
    dot.shapeColor = "yellow"
    dotarray3.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,300,10,10)
    dot.shapeColor = "yellow"
    dotarray4.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,365,10,10)
    dot.shapeColor = "yellow"
    dotarray5.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,435,10,10)
    dot.shapeColor = "yellow"
    dotarray6.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,500,10,10)
    dot.shapeColor = "yellow"
    dotarray7.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,565,10,10)
    dot.shapeColor = "yellow"
    dotarray8.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,635,10,10)
    dot.shapeColor = "yellow"
    dotarray9.push(dot)
   }
}

function draw() {
  background(0);
  if(keyWentDown(UP_ARROW)){
    pacman.velocityY=-3
    pacman.velocityX=0
  }
  if(keyWentDown(DOWN_ARROW)){
    pacman.velocityY=3
    pacman.velocityX=0
  }
  if(keyWentDown(RIGHT_ARROW)){
    pacman.velocityX=3
    pacman.velocityY=0
  }
  if(keyWentDown(LEFT_ARROW)){
    pacman.velocityX=-3
    pacman.velocityY=0
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray2[i])){
      pacman.collide(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray4[i])){
      pacman.collide(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray6[i])){
      pacman.collide(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray1[i])){
      pacman.collide(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray3[i])){
      pacman.collide(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray5[i])){
      pacman.collide(wallarray5[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray2[i])){
      blueGhost.bounceOff(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray4[i])){
      blueGhost.bounceOff(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray6[i])){
      blueGhost.bounceOff(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray1[i])){
      blueGhost.bounceOff(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray3[i])){
      blueGhost.bounceOff(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray5[i])){
      blueGhost.bounceOff(wallarray5[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray2[i])){
      redGhost.bounceOff(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray4[i])){
      redGhost.bounceOff(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray6[i])){
      redGhost.bounceOff(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray1[i])){
      redGhost.bounceOff(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray3[i])){
      redGhost.bounceOff(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray5[i])){
      redGhost.bounceOff(wallarray5[i])
    }
  }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray2[i])){
        greenGhost.bounceOff(wallarray2[i])
      }
    }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray4[i])){
        greenGhost.bounceOff(wallarray4[i])
      }
    }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray6[i])){
        greenGhost.bounceOff(wallarray6[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray1[i])){
        greenGhost.bounceOff(wallarray1[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray3[i])){
        greenGhost.bounceOff(wallarray3[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray5[i])){
        greenGhost.bounceOff(wallarray5[i])
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray2[i])){
          lightgreenGhost.bounceOff(wallarray2[i])
        }
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray4[i])){
          lightgreenGhost.bounceOff(wallarray4[i])
        }
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray6[i])){
          lightgreenGhost.bounceOff(wallarray6[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray1[i])){
          lightgreenGhost.bounceOff(wallarray1[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray3[i])){
          lightgreenGhost.bounceOff(wallarray3[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray5[i])){
          lightgreenGhost.bounceOff(wallarray5[i])
        }
      
    
    }
    
  }

  
  pacman.collide(edges[0])
  pacman.collide(edges[1])
  pacman.collide(edges[2])
  pacman.collide(edges[3])
  greenGhost.bounceOff(edges[0])
  greenGhost.bounceOff(edges[1])
  greenGhost.bounceOff(edges[2])
  greenGhost.bounceOff(edges[3])
  blueGhost.bounceOff(edges[0])
  blueGhost.bounceOff(edges[1])
  blueGhost.bounceOff(edges[2])
  blueGhost.bounceOff(edges[3])
  redGhost.bounceOff(edges[0])
  redGhost.bounceOff(edges[1])
  redGhost.bounceOff(edges[2])
  redGhost.bounceOff(edges[3])
  lightgreenGhost.bounceOff(edges[0])
  lightgreenGhost.bounceOff(edges[1])
  lightgreenGhost.bounceOff(edges[2])
  lightgreenGhost.bounceOff(edges[3])
 
  drawSprites();
}