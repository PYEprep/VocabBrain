/*
Background Music by Wavecont, https://www.wavecont.com/free-download/
Licensed under creative commons Attribution-ShareAlike 4.0 International
https://creativecommons.org/licenses/by-sa/4.0/
Music promoted by https://www.chosic.com/
*/

class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }

    preload(){
        
        //progress udpate (load exclusive)
        this.staticText=this.add.text(game.config.width/2, game.config.height/2-50,"Game Load Progress",{fontFamily: "Doppio One", color: '#ffffff'});
        this.staticText.setOrigin(0.5, 0.5);
        this.staticText.setScale(2);

        this.progText=this.add.text(game.config.width/2, game.config.height/2,"0%",{fontFamily: "Doppio One", color: '#ffffff'});
        this.progText.setOrigin(0.5, 0.5);
        this.progText.setScale(2);
        this.load.on('progress', this.onProgress, this);

        //load our images or sounds 
        this.load.image('keyboard', 'images/keyboard2.png');

        this.load.image('pencil', 'images/pencilOutlined.png');
        this.load.image('balloon', 'images/balloonG.png');
        this.load.image('bigSky', 'images/newSky.jpg');

        //load all the vocab balloons
        this.load.image('V0', 'images/vocab balloons/apt.png');
        this.load.image('V1', 'images/vocab balloons/knave.png');
        this.load.image('V2', 'images/vocab balloons/conscience.png');
        this.load.image('V3', 'images/vocab balloons/obliged.png');
        this.load.image('V4', 'images/vocab balloons/promptly.png');
        this.load.image('V5', 'images/vocab balloons/prose.png');
        this.load.image('V6', 'images/vocab balloons/stockade.png');
        this.load.image('V7', 'images/vocab balloons/tallow.png');
        this.load.image('V8', 'images/vocab balloons/testy.png');
        this.load.image('V9', 'images/vocab balloons/wharf.png');

        //loading UI components
        this.load.image('button1', 'images/ui/buttons/2/1.png');
        this.load.image('button2', 'images/ui/buttons/2/3.png');
        this.load.audio('pop', 'audio/pop3.mp3');
        this.load.audio('backgroundMusic', 'audio/Inspire.mp3');


        //sound toggles
        this.load.image('toggleBack', 'images/ui/toggles/1.png');
        this.load.image('sfxOff', 'images/ui/icons/sfx_off.png');
        this.load.image('sfxOn', 'images/ui/icons/sfx_on.png');
        this.load.image('musicOff', 'images/ui/icons/music_off.png');
        this.load.image('musicOn', 'images/ui/icons/music_on.png');
    }

    onProgress(value){
        var per = Math.floor(value * 100);
        this.progText.setText(per + "%");
    }

    create(){
        this.scene.start("SceneTitle");
    }
}