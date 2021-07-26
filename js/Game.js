class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      image(background1,0,0,displayWidth,displayHeight)
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }

  play(){
    form.display()
    //form.hide();
    textSize(40);
    Player.getPlayerInfo();
    player.getRank()
    if(allPlayers !== undefined){
      background("lightblue")
   image(background2,0,0,displayWidth,displayHeight)
   form.display();
   fill("purple")
   text("Quiz Game=Level1", 120, 100)
  // fill("black")
  // text("Who is the youngest bts member?",displayWidth/2-300,displayHeight/2-300)
    var xp=350
    var yp
    var no=0
    for(var f in allPlayers){
    
      no=no+1
     /* xp=xp+200
      yp=displayHeight-allPlayers[f].distance
     cars[no-1].x=xp
     cars[no-1].y=yp
  if(no==player.index){
   cars[no-1].shapeColor="pink"
  camera.position.x=displayWidth/2
  camera.position.y=cars[no-1].y
  }
*/
    }
      
    }

    if( isCorrect=1&& player.index !== null){
      player.score +=10
      player.update();
    }
    if(player.distance>5*displayHeight){
    player.rank=player.rank+1
    player.updateRank(player.rank)
    gameState=2
    }
    drawSprites()
  }
 end(){
  background("lightblue")
   textSize(50)
   fill("#E6E6FA")
  text("gameEND",500,-4*displayHeight-100)
  fill("#008080")
  text("RANK = "+player.rank,500,-4*displayHeight-200)
 }


}
