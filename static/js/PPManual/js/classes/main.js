var game;
var model;
var emitter;
var G;
var controller;
var curVocab;
var words;
var definitions;
var curIndex;
//var gameOver;

window.onload=function()
{
	var config = {
        type: Phaser.AUTO,
        width: 800, //1000
        height: 640, //650
        parent: 'phaser-game',
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        scene: [SceneLoad, SceneTitle, SceneMain, SceneOver]
    };
    G = new Constants();
    model = new Model();
    game = new Phaser.Game(config);
    //gameOver = 0;
    curVocab = "curVocab";
    words = ["apt", "knave", "conscience", "obliged", "promptly", "prose", "stockade", "tallow", "testy", "wharf"];
    definitions = ["at risk of or subject to experiencing something", 
                   "a deceitful and unreliable scoundrel", 
                   "conformity to one's own sense of right conduct", 
                   "having a moral duty to do something", 
                   "with little or no delay", 
                   "ordinary writing as distinguished from verse", 
                   "fortification consisting of a fence set firmly for defense", 
                   "a hard substance used for making soap and candles", 
                   "easily irritated or annoyed",
                   "a platform from the shore that provides access to ships"
                ];
    curIndex = Phaser.Math.Between(0, 4);


}