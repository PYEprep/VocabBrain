class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload()
    {
    	this.load.image('gameOver','images/GameOver.png');
        this.load.image('GOsmall', 'images/GOsmall.png');
        this.load.image('button1', 'images/ui/buttons/2/1.png');
        this.load.image('bigSky', 'images/newSky.jpg');
    }
    create() {
        
        this.bigSky = this.add.image(0,0, 'bigSky');
        this.bigSky.setOrigin(0,0);

        this.alignGrid=new AlignGrid({rows:11, cols:11, scene:this});
        //this.alignGrid.showNumbers();
        //this.alignGrid.show();
        
        //score text
        var textScore = this.add.text(400, 320,"Final Score: " + model.score, {fontFamily: "Doppio One", color : '#000000'});
        textScore.setOrigin(0.5,0.5)
        textScore.setScale(1.5);

        var title = this.add.image(0,0, 'gameOver');
        this.alignGrid.placeAtIndex(38,title);

        var btnStart = new FlatButton({scene:this, key:'button1', text:'Play Again!', event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);

        emitter.on('start_game', this.startGame, this);        

    }

    startGame(){
        model.musicOn = false;
        this.scene.start('SceneMain');
    }
    update() {}
}