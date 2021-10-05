class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //all loaded in sceneLoad
        console.log("check debugger");
        
    }
    create() {
        //when scene is called again, this will run
        emitter = new Phaser.Events.EventEmitter();  //should be first in create
        controller = new Controller();

        //background setting
        this.bigSky = this.add.image(0,0, 'bigSky');
        this.bigSky.setOrigin(0,0);

        model.musicOn = true;
        var mediaManager = new MediaManager({scene:this});
        mediaManager.setBackgroundMusic('backgroundMusic');


        //CODING THE PENCIL POP GAME 8/10
        var gridConfig={rows:8, cols:10, scene:this};
        var alignGrid=new AlignGrid(gridConfig);
        //alignGrid.show();
        //alignGrid.showNumbers();

        //SCORE BOX
        this.sb=new ScoreBox({scene:this});
        this.sb.x=game.config.width/2;
        this.sb.y=50;

        model.score = 0;
        console.log("Ready Score!");

        var curDef = [...definitions];
        console.log("... update");
        
        
        //Intiial word display setup
        var textD = this.add.text(400, 600,"Definition: " + curDef[curIndex], {fontFamily: "Doppio One", color : '#000000'});
        textD.setOrigin(0.5,0.5)
        textD.setScale(1.2);
        curVocab = words[curIndex]; 

        
        //set of 10 balloon creation
        //in future may want to figure out a loop if possible to cleanup
        this.balloon0 = this.physics.add.sprite(100,200, 'V0');
        this.balloon0.setScale(.4);
        this.balloon0.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon0.setCollideWorldBounds(true);
        this.balloon0.setBounce(1, 1);
        this.balloon0.setName(words[0]);

        this.balloon1 = this.physics.add.sprite(150,200, 'V1');
        this.balloon1.setScale(.4);
        this.balloon1.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon1.setCollideWorldBounds(true);
        this.balloon1.setBounce(1, 1);
        this.balloon1.setName(words[1]);

        this.balloon2 = this.physics.add.sprite(200,200, 'V2');
        this.balloon2.setScale(.4);
        this.balloon2.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon2.setCollideWorldBounds(true);
        this.balloon2.setBounce(1, 1);
        this.balloon2.setName(words[2]);

        this.balloon3 = this.physics.add.sprite(250,200, 'V3');
        this.balloon3.setScale(.4);
        this.balloon3.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon3.setCollideWorldBounds(true);
        this.balloon3.setBounce(1, 1);
        this.balloon3.setName(words[3]);

        this.balloon4 = this.physics.add.sprite(300,200, 'V4');
        this.balloon4.setScale(.4);
        this.balloon4.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon4.setCollideWorldBounds(true);
        this.balloon4.setBounce(1, 1);
        this.balloon4.setName(words[4]);
        
        this.balloon5 = this.physics.add.sprite(320,200, 'V5');
        this.balloon5.setScale(.4);
        this.balloon5.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon5.setCollideWorldBounds(true);
        this.balloon5.setBounce(1, 1);
        this.balloon5.setName(words[5]);
        
        this.balloon6 = this.physics.add.sprite(340,200, 'V6');
        this.balloon6.setScale(.4);
        this.balloon6.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon6.setCollideWorldBounds(true);
        this.balloon6.setBounce(1, 1);
        this.balloon6.setName(words[6]);
        
        this.balloon7 = this.physics.add.sprite(360,200, 'V7');
        this.balloon7.setScale(.4);
        this.balloon7.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon7.setCollideWorldBounds(true);
        this.balloon7.setBounce(1, 1);
        this.balloon7.setName(words[7]);
        
        this.balloon8 = this.physics.add.sprite(380,200, 'V8');
        this.balloon8.setScale(.4);
        this.balloon8.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon8.setCollideWorldBounds(true);
        this.balloon8.setBounce(1, 1);
        this.balloon8.setName(words[8]);
        
        this.balloon9 = this.physics.add.sprite(400,200, 'V9');
        this.balloon9.setScale(.4);
        this.balloon9.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon9.setCollideWorldBounds(true);
        this.balloon9.setBounce(1, 1);
        this.balloon9.setName(words[9]);


        this.pencil = this.physics.add.sprite(100,600, 'pencil');
        this.pencil.setScale(.4);
        this.pencil.body.drag.set(250);
        this.pencil.body.maxVelocity.set(200);
        this.pencil.setCollideWorldBounds(true);

        var wordCur = [...words];
        

        var balloonBin = [this.balloon0,this.balloon1, this.balloon2,this.balloon3, this.balloon4, this.balloon5, this.balloon6, this.balloon7, this.balloon8, this.balloon9];
        
        //Balloon pop mechanics
        for(var i = 0; i <= 9; i++ ){
            this.physics.add.collider(this.pencil, balloonBin[i], function(pencil, balloon){
                
                if (balloon.name == curVocab) { //change it to be cur def
                    textD = this.change(textD, curDef, wordCur);
                    balloon.destroy();
                    emitter.emit(G.PLAY_SOUND, 'pop');
                    model.score += 10;
                }
                else { //reset location if incorrect
                    
                    balloon.setX(Phaser.Math.Between(20, 750));
                    balloon.setY(Phaser.Math.Between(20, 600));
                    if(model.score > 0){
                    model.score -= 5;

                    }
                }
            }.bind(this));
        }

        this.cursors = this.input.keyboard.createCursorKeys();

    }


    change(textD, curDef, wordCur){
        textD.destroy();
        curDef.splice(curIndex, 1);
        wordCur.splice(curIndex, 1);

        if(curDef === undefined || curDef.length == 0){
            console.log("All words used: UPDATED ENDGAME!!!");
            this.scene.start("SceneOver");
            return;
            
            
        }
        else{
            curIndex = Phaser.Math.Between(0, curDef.length-1);
            curVocab = wordCur[curIndex];
        }

        //want to be able to exit the game for last part if it gets here
        var textHolder = this.add.text(400,600, "Definition: " + curDef[curIndex], {fontFamily: "Doppio One", color: '#000000'})
        textHolder.setOrigin(0.5,0.5)
        textHolder.setScale(1.2);


        return (textHolder);

    }




    update() {
        //constant running loop
        if (this.cursors.left.isDown) {
            this.pencil.rotation -= 0.1;
        }
        else if (this.cursors.right.isDown) {
            this.pencil.rotation += 0.1;
        }
        if (this.cursors.up.isDown) {
          this.physics.velocityFromRotation(this.pencil.rotation - Math.PI/2, 200, this.pencil.body.acceleration);
        }
        else {
          this.pencil.body.acceleration.set(0);
        }
        

    }
    //can put custom functions after (TEST)

}