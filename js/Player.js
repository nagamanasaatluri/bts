class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.score = 0;
  }
  getscore(){
    var playerCountRef = database.ref('Score');
    playerCountRef.on("value",(data)=>{
      this.score = data.val();
    })
  }
  updatescore(count){
    database.ref('/').update({
      Score: count
    });
  
  }
  getRank(){
    var playerCountRef = database.ref('Rank');
    playerCountRef.on("value",(data)=>{
      this.rank = data.val();
    })
  }

  updateRank(count){
    database.ref('/').update({
      Rank: count
    });
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      Score:this.score
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
