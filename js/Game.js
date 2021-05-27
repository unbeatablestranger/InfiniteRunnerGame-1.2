class Game 
{
  constructor()
  {}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state)
  {
    database.ref('/').update({
      gameState: state
    });
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      
      if(contestantCountRef.exists())
      {
        contestantCount = contestantCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();

      
    }
  }

  play()
  {
    //write code here to hide question elements
    form.hide();

    //write code to change the background color here
    background("grey");

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Let the games begin!", 420, 80),

    //call getContestantInfo() here
    Player.getPlayerInfo();

    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined)
    {
      ground = createSprite(displayWidth/2, displayHeight*3/4-20,400,20);
      ground.addImage("ground",groundImage);
      ground.x = ground.width /2;
      
      gameOver = createSprite(300,100);
      gameOver.addImage(gameOverImg);
      
      restart = createSprite(300,140);
      restart.addImage(restartImg);
      restart.visible = false;
      
      gameOver.scale = 0.5;
      restart.scale = 0.5;
      
      invisibleGround = createSprite(200,190,400,10);
      invisibleGround.visible = false;
      
      //create Obstacle and Cloud Groups
      obstaclesGroup = createGroup();
      cloudsGroup = createGroup();
  
  
  
  score = 0;
    }

    //write code to add a note here


    //write code to highlight contest who answered correctly

    
  }

}
