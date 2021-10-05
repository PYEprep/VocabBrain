class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload()
    {
        this.load.image('bigSky', 'images/newSky.jpg');
    	this.load.image('title','images/PPV Title.png');
        this.load.image('button1', 'images/ui/buttons/2/1.png');
    }
    create() {
        console.log("SceneTitle!");

        //need to put this in first scene of the game
       emitter = new Phaser.Events.EventEmitter();  //should be first in create
       controller = new Controller();

        this.bigSky = this.add.image(0,0, 'bigSky');
        this.bigSky.setOrigin(0,0);

        this.alignGrid=new AlignGrid({rows:11, cols:11, scene:this});
        //this.alignGrid.showNumbers();
        //this.alignGrid.show(); 

        var title = this.add.image(0,0, 'title');
        Align.scaleToGameW(title,.8);
        this.alignGrid.placeAtIndex(38,title);

        var btnStart = new FlatButton({scene:this, key:'button1', text:'start', event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);

        this.keyboard = this.add.image(580,580, 'keyboard');
        this.keyboard.setScale(.65);

        var keyText = this.add.text(370, 580,"Play the game using these arrow keys", {fontFamily: "Doppio One", color : '#000000'});
        keyText.setOrigin(0.5,0.5)
        keyText.setScale(1.2);

        emitter.on('start_game', this.startGame, this);        

    }

    startGame(){
        this.scene.start('SceneMain');
    }
    update() {}
}