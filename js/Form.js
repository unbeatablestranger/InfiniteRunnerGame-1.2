class Form
{
  constructor()
  {
    this.heading = createElement('h1');
    this.question = createElement('h3');
    this.box = createInput("Enter your name here...");
    this.submit = createButton("Submit");
  }

  hide()
  {
    this.heading.hide();
    this.question.hide();
    this.box.hide();
    this.submit.hide();
  }

  display()
  {
    this.heading.html("T-Rex Runner Game");
    this.heading.position(displayWidth/2, displayHeight/4);

    this.question.html("Please enter your name which will be used in the game to represent you.");
    this.question.position(displayWidth/2, displayHeight/2);

    this.box.position(displayWidth/2, displayHeight*3/4);

    this.submit.position(displayWidth/2, displayHeight*4/5);

    this.submit.mousePressed(()=>{
      this.heading.hide();
      this.question.hide();
      this.box.hide();
      this.submit.hide();

      player.name = this.input.value();

      contestantCount+=1;
      player.index = contestantCount;
      player.update();
      player.updateCount(ContestantCount);
    })
  }
}
