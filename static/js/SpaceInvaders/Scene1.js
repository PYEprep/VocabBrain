class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }


    preload() {
        this.load.image("background", "/static/js/SpaceInvaders/assets/back.jpg");
        this.load.image("title", "/static/js/SpaceInvaders/assets/title.jpg");

        this.load.image('ship1', '/static/js/SpaceInvaders/assets/newShips/ship1.png');
        this.load.image('ship2', '/static/js/SpaceInvaders/assets/newShips/ship2.png');
        this.load.image('ship3', '/static/js/SpaceInvaders/assets/newShips/ship3.png');
        this.load.image('ship4', '/static/js/SpaceInvaders/assets/newShips/ship4.png');
        this.load.image('ship5', '/static/js/SpaceInvaders/assets/newShips/ship5.png');
        this.load.image('ship6', '/static/js/SpaceInvaders/assets/newShips/ship6.png');
        this.load.image('ship7', '/static/js/SpaceInvaders/assets/newShips/ship7.png');
        this.load.image('ship8', '/static/js/SpaceInvaders/assets/newShips/ship8.png');


        this.load.image('playerBullet', '/static/js/SpaceInvaders/assets/blueBeam.png');
        this.load.image('enemyBullet', '/static/js/SpaceInvaders/assets/redBeam.png');

        this.load.spritesheet('explosion', '/static/js/SpaceInvaders/assets/explosion.png', {
            frameWidth: 16,
            frameHeight: 16
        });

    }

    create() {

        this.back = this.add.image(config.width / 2, config.height / 2, "background");
        this.titleText = this.add.image(config.width / 2, 100, "title");
        //this.chooseShipText = this.add.text(70, 200, 'Choose your spaceship carefully, the wrong choice might leave you...LOST IN SPACE!', { font: '25px Arial' });


        ///// Animations /////
        this.anims.create({
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "playerBullet_anim",
            frames: this.anims.generateFrameNumbers("playerBullet"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });





        this.ship1 = this.physics.add.sprite(275, config.height - 205, "ship1").setInteractive();
        this.ship2 = this.physics.add.sprite(458, config.height - 205, "ship2").setInteractive();
        this.ship3 = this.physics.add.sprite(642, config.height - 205, "ship3").setInteractive();
        this.ship4 = this.physics.add.sprite(825, config.height - 205, "ship4").setInteractive();
        this.ship5 = this.physics.add.sprite(275, config.height - 75, "ship5").setInteractive();
        this.ship6 = this.physics.add.sprite(458, config.height - 75, "ship6").setInteractive();
        this.ship7 = this.physics.add.sprite(642, config.height - 75, "ship7").setInteractive();
        this.ship8 = this.physics.add.sprite(825, config.height - 75, "ship8").setInteractive();


        //-----------------EVENTS-------------------
        let btt = this.add.text(100, 200, 'Choose your spaceship carefully, the wrong choice might leave you...LOST IN SPACE!', {
            font: '25px Arial',
        }).setOrigin(0.5, 0.5);

        let container = this.add.container(450, 100, [btt]);

        this.physics.world.enableBody(container);

        container.body.setGravity(0, -25);
        container.body.setBounce(1, 1);
        container.body.setCollideWorldBounds(true);

        //When choosing spaceships, mouse hover will change spaceship tint

        this.ship1.on('pointerover', function(pointer) {
            this.ship1.setTint(0xff0000);
        }, this);

        this.ship1.on('pointerout', function(pointer) {
            this.ship1.clearTint();
        }, this);
        //---------------------------------------------------------------
        this.ship2.on('pointerover', function(pointer) {
            this.ship2.setTint(0xff0000);
        }, this);

        this.ship2.on('pointerout', function(pointer) {
            this.ship2.clearTint();
        }, this);
        //---------------------------------------------------------------
        this.ship3.on('pointerover', function(pointer) {
            this.ship3.setTint(0xff0000);
        }, this);

        this.ship3.on('pointerout', function(pointer) {
            this.ship3.clearTint();
        }, this);
        //------------------------------------------------------------------
        this.ship4.on('pointerover', function(pointer) {
            this.ship4.setTint(0xff0000);
        }, this);

        this.ship4.on('pointerout', function(pointer) {
            this.ship4.clearTint();
        }, this);
        //-------------------------------------------------------------------
        this.ship5.on('pointerover', function(pointer) {
            this.ship5.setTint(0xff0000);
        }, this);

        this.ship5.on('pointerout', function(pointer) {
            this.ship5.clearTint();
        }, this);
        //-------------------------------------------------------------------
        this.ship6.on('pointerover', function(pointer) {
            this.ship6.setTint(0xff0000);
        }, this);

        this.ship6.on('pointerout', function(pointer) {
            this.ship6.clearTint();
        }, this);
        //-------------------------------------------------------------------
        this.ship7.on('pointerover', function(pointer) {
            this.ship7.setTint(0xff0000);
        }, this);

        this.ship7.on('pointerout', function(pointer) {
            this.ship7.clearTint();
        }, this);
        //-------------------------------------------------------------------
        this.ship8.on('pointerover', function(pointer) {
            this.ship8.setTint(0xff0000);
        }, this);

        this.ship8.on('pointerout', function(pointer) {
            this.ship8.clearTint();
        }, this);
        //-------------------------------------------------------------------
        // clicking on spaceships will lead to the next scene
        this.ship1.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 1 });
        }, this);

        this.ship2.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 2 });
        }, this);

        this.ship3.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 3 });
        }, this);

        this.ship4.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 4 });
        }, this);

        this.ship5.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 5 });
        }, this);

        this.ship6.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 6 });
        }, this);

        this.ship7.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 7 });
        }, this);

        this.ship8.on('pointerdown', function(pointer) {
            this.scene.start("playGame", { ship: 8 });
        }, this);

    }


}