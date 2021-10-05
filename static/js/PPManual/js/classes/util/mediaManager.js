var count = 2;
class MediaManager{
    constructor(config){
        this.scene=config.scene;
        emitter.on(G.PLAY_SOUND, this.playSound,this);
        emitter.on(G.MUSIC_CHANGED, this.musicChanged, this);
    }


    playSound(key){
        if(model.soundOn==true){
            var sound = this.scene.sound.add(key);
            sound.play();     
        }

    }

    musicChanged(){
        if(this.background){
                if(model.musicOn == false){
                    this.background.stop();
                    console.log("Music stop");
                }
                
                if(model.musicOn == true){
                    this.background.play();
                    console.log("Music play");
                }
            
        }
    }

    setBackgroundMusic(key){
       //console.log("model.musicOn: " + model.musicOn)

        if(model.musicOn==true){
            this.background = this.scene.sound.add(key,{volume:.5,loop:true});
            this.background.play();
        }
        
    }
}

//this. will make into class variable