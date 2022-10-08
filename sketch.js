var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
//Creacion de objetos 

      //Trex
     trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
     trex_collided = loadImage("trex_collided.png");

    //Ground
}

function setup() {
  //Creacion de Cnvas 

  
  
  //crear sprite de trex 
  trex = createSprite(50,160,20,50);

  //Crear objeto trex  animado
     //    trex.addAnimation("etiqueta1",trex_collided);
     //   Mandar variable  de animacion del Trex  (trex.addAnimation ("etiqueta2", trex_running);)
     
 // trex.scale = 0.5;
  
  //crear sprite de suelo
 

  //mover  piso   coordenada X - izquierda 
  
  //coordenada x de ground  hacer que se duplique

  
  //crear sprite de suelo invisible 
  
  
}

function draw() {
  //establecer el color de fondo
  background(220);
  
  
  //hacer que el trex salte al presionar la barra espaciadora

  //agregar gravedad


  //hacer que el piso se repita 

  
  //evitar que el trex caiga

  
  //visualiza Sprites
  drawSprites();
}
