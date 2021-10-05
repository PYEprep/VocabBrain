class ScoreBox extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene);
        this.scene=config.scene;

        this.text1=this.scene.add.text(0,0, "SCORE: 0" , {fontFamily: "Doppio One", color : '#000000'});
        this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);

        //var textD = this.add.text(500, 600,"Definition: " + definitions[curIndex], {fontFamily: "Doppio One", color : '#000000'});
        //textD.setOrigin(0.5,0.5)
        //textD.setScale(1.2);

        this.scene.add.existing(this);

        emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
    }

    scoreUpdated(){
        this.text1.setText("SCORE:" + model.score); //"SCORE:" +
    }
}