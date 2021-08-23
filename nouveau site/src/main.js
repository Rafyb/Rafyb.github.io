var config = {
    type: Phaser.WEBGL,
    width:"100", 
    height:"100",    
    scale: {
        mode : Phaser.Scale.RESIZE // rezise le canvas lorsque changement de taille du parent
    },
    backgroundColor: '#00acf6',
    parent: 'jeu',              
    transparent: false,         
    antialias: false,            
};

scene = undefined;
selectedFolder = undefined;

var game = new Phaser.Game(config);

var sceneSetup = {
    preload: function () 
    {
        scene = this;

        this.load.on('load', function (obj) {
            console.log(`LOADED : ${obj.type} - ${obj.key}`);
        });
        this.load.on('loaderror', function (obj) {
            console.warn(`>>> Erreur de chargement de l'élément : ${obj.type} - ${obj.key}`);
        });

        //this.load.json('TSObject','data/TSObject.json'); 
        this.load.image('folder', 'assets/folder.png');
        this.load.image('file', 'assets/document.png');


    },
    create: function () 
    {
        scene = this;

        //let tsJson = this.cache.json.get('TSObject');
        let gameFolder = this.add.sprite(48, 38, 'folder');
        let gameText = this.add.text(gameFolder.x - 22, gameFolder.y + 25 ,"Games",{ font: '14px Arial', fill: '#ffffff',shadow: {offsetX: 0.2,offsetY: 0.2,color: '#000', fill: true} });
        let games = new Shortcut(gameFolder,gameText);

        let expFile = this.add.sprite(48, 123, 'file');
        let expText = this.add.text(expFile.x - 38, expFile.y + 25 ,"Experiences",{ font: '14px Arial', fill: '#ffffff',shadow: {offsetX: 0.2,offsetY: 0.2,color: '#000', fill: true} });
        let experiences = new Shortcut(expFile,expText);

        /*
        this.debug = this.add.text(5, 5,"",{ font: '16px Courier',backgroundColor: "rgba(0, 0, 0, 0.8)", fill: '#00ff00' });
        this.debug.setScrollFactor(0);

        this.pointer = {};
        */

    },
    update: function()
    {
        /*
        this.input.on('pointerdown', function(pointer, currentlyOver){ 
            this.pointer = pointer;
        });
        
        //console.log(this.pointer);

        this.debug.setText(
            `\n Mode Debug                        \n`+
            `> Pointer\n`+
            `  Pointer Screen Pos : x:${this.pointer.x},y:${this.pointer.y}\n`+
            `  Pointer World Pos : x:${Math.trunc(this.pointer.worldX)},y:${Math.trunc(this.pointer.worldY)}\n`
        );
        */
        
    }

}


window.onload = function () {
    // Ajout des scènes
    game.scene.add('Scene', sceneSetup );
    game.scene.start("Scene");
}

