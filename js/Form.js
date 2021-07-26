class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.resetbutton = createButton('reset');
    this.question1 = createElement('h2')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Fun with BTS");
    title.position(130, 0);
    this.resetbutton.position(displayWidth-60,50)
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
      game.getState()
      console.log("gameState=="+gameState)
   if(gameState==1){
    level=1
    console.log("level=="+level)
   }
      if(level==1){
        this.question1.html("Who is the youngest bts member?")
        this.question1.position(displayWidth/2-300,displayHeight/2-300);
        this.option1 = createButton('jimin');
        this.option1.size(300,50)
        this.option2 = createButton('jin');
        this.option2.size(300,50)
        this.option3 = createButton('V');
        this.option3.size(300,50)
        this.option4 = createButton('jungkook');
        this.option4.size(300,50)
        this.option1.position(displayWidth/2-200,displayHeight/2-200)
        this.option2.position(displayWidth/2-200,displayHeight/2-150)
        this.option3.position(displayWidth/2-200,displayHeight/2-100)
        this.option4.position(displayWidth/2-200,displayHeight/2-50)
        this.option4.mousePressed(()=>{
          isCorrect=1
          this.option1.hide()
          this.option2.hide()
          this.option3.hide()
          this.option4.hide()
          this.question1.hide()
        })
      }
    
    });
    

    this.resetbutton.mousePressed(()=>{
   game.update(0)
   player.updateCount(0)   
   player.updateRank(0)
   database.ref('/').update({
    players: null
  }); 
    });
  }
}
