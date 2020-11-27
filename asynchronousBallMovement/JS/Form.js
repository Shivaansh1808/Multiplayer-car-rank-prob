class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){

        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-40, 0);

        this.input.position(displayWidth/2-40, displayHeight/2-80);

        this.reset.position(displayWidth-100, 50);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })

        this.button.position(displayWidth/2+20, displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name + " !!")
            this.greeting.position(displayWidth/2-40, displayHeight/2-20);
        });
    }
}