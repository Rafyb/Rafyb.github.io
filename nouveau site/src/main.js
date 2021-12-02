var config = {
    type: Phaser.WEBGL,
    width:"100", 
    height:"100",
    physics: {
      default: 'arcade',
      arcade: {
          gravity: {y: 500},
          debug: false
      }
    },    
    scale: {
        mode : Phaser.Scale.RESIZE // rezise le canvas lorsque changement de taille du parent
    },
    backgroundColor: '#00acf6',
    parent: 'jeu',              
    transparent: false,         
    antialias: false,            
};

idxWindow = 0;
scene = undefined;
selectedFolder = undefined;

let keys;
let player;

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
        this.load.image('file', 'assets/doc.png');
        //this.load.image('titre', 'assets/titre.png');
        this.load.image('vscode', 'assets/logo-vscode.png');
        this.load.json('timelineExp', 'json/timeline_exp.json');
        this.load.json('timelineEtude', 'json/timeline_etude.json');
        this.load.image('sky-day', 'assets/sky_day.png');
        this.load.image('sky-night', 'assets/sky_night.png');
        this.load.spritesheet('idle', 'assets/Idle.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('walk', 'assets/Walk.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('terrain', 'assets/terrain.png', { frameWidth: 16, frameHeight: 16 },242);
        this.load.spritesheet('fall', 'assets/Fall.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('jump', 'assets/Jump.png', { frameWidth: 32, frameHeight: 32 });

    },
    create: function () 
    {
        scene = this;

        let dt = new Date();
        let hours = dt.getHours();
        console.log(hours);
        let sky;
        if(hours > 8 && hours < 20) sky = this.add.sprite(960, 540, 'sky-day');
        else sky = this.add.sprite(960, 540, 'sky-night');
        sky.setDepth(-8);


        //let tsJson = this.cache.json.get('TSObject');
        let aboutFile = this.add.sprite(50, 38, 'file');
        let aboutText = this.add.text(aboutFile.x - 34, aboutFile.y + 25 ,"About me",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let aboutme = new Shortcut(aboutFile,aboutText,"file");

        let formFile = this.add.sprite(50, 123, 'file');
        let formText = this.add.text(formFile.x - 41, formFile.y + 25 ,"Formations",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let formations = new Shortcut(formFile,formText,"file");

        let expFile = this.add.sprite(50, 208, 'file');
        let expText = this.add.text(expFile.x - 43, expFile.y + 25 ,"Experiences",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let experiences = new Shortcut(expFile,expText,"file");

        let reaFolder = this.add.sprite(50,293 , 'folder');
        let reaText = this.add.text(reaFolder.x - 43, reaFolder.y + 25 ,"Realisations",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let realisations = new Shortcut(reaFolder,reaText,"folder");

        let gameFolder = this.add.sprite(50,375 , 'folder');
        let gameText = this.add.text(gameFolder.x - 28, gameFolder.y + 25 ,"Games",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let games = new Shortcut(gameFolder,gameText,"folder");

        let vsCodeLogo = this.add.sprite(50, 460 , 'vscode');
        let vsCodeName = this.add.text(vsCodeLogo.x - 40, vsCodeLogo.y + 25 ,"vscode.exe",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let vsCode = new Shortcut(vsCodeLogo,vsCodeName,"app");

        /*
        this.debug = this.add.text(5, 5,"",{ font: '16px Courier',backgroundColor: "rgba(0, 0, 0, 0.8)", fill: '#00ff00' });
        this.debug.setScrollFactor(0);

        this.pointer = {};
        */

        this.anims.create({
          key: 'idle',
          frames: this.anims.generateFrameNumbers('idle', { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 ] }),
          frameRate: 8,
          repeat: -1
        });

        this.anims.create({
          key: 'walk',
          frames: this.anims.generateFrameNumbers('walk', { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11 ] }),
          frameRate: 8,
          repeat: -1
        });

        this.anims.create({
          key: 'fall',
          frames: this.anims.generateFrameNumbers('fall'),
          frameRate: 8,
          repeat: -1
        });

        this.anims.create({
          key: 'jump',
          frames: this.anims.generateFrameNumbers('jump'),
          frameRate: 8,
          repeat: -1
        });

        let size = (1080/16)-8;
        for(let y = 0; y < 4; y++)
        {
          for(let x = 0; x < size; x++)
          {
            let idx = 29;

            if(x == 0 ){
              if(y == 0) idx = 6;
              else idx = 28
            }
            else if(x+1 > size)
            {
              if( y == 0) idx = 8;
              else idx = 30;
            }
            else if(y == 0) idx = 7;
            
            var sprite = this.add.sprite(16+(32*x), 816+(32*y), 'terrain',idx);

            sprite.setScale(2);
  
          } 
        }

        
        //sprite.frame = 5;

        this.physics.world.bounds.width = 1920;
        this.physics.world.bounds.height = 800;

        player = this.physics.add.sprite(200, 200); 
        player.setScale(2);
        player.play('idle');
        player.setCollideWorldBounds(true);

        keys = scene.input.keyboard.addKeys({
          up: 'up',
          down: 'down',
          left: 'left',
          right: 'right'
        });

    },
    update: function()
    {
        if (keys.left.isDown)
        {
            player.body.setVelocityX(-180); // move left
            if(player.body.onFloor()) player.anims.play('walk', true); // play walk animation
            player.flipX= true; // flip the sprite to the left
        }
        else if (keys.right.isDown )
        {
            player.body.setVelocityX(180); // move right
            if(player.body.onFloor()) player.anims.play('walk', true); // play walk animatio
            player.flipX = false; // use the original sprite looking to the right
        } 
        else if(player.body.onFloor()) 
        {
            player.body.setVelocityX(0);
            player.anims.play('idle', true);
        }

        if (keys.up.isDown && player.body.onFloor())
        {
          player.body.setVelocityY(-500); // jump up
          player.anims.play('jump',true);
        } 

        if(!player.body.onFloor())
        {
          if(player.body.newVelocity.y >= 0) player.anims.play('fall',true);
        }
        

        let dt = new Date();
        let elements =  dt.toLocaleString().split(',');
        let hours = elements[1].split(':');
        let printer = hours[0]+':'+hours[1]+'\n'+elements[0]
        document.getElementById("datetime").innerHTML = printer;


        
    }

}


window.onload = function () {
    // Ajout des scènes
    game.scene.add('Scene', sceneSetup );
    game.scene.start("Scene");
}

let fullscreen = false;
let elem = undefined;
function switchFullscreen()
{
    elem = document;
    if(fullscreen) closeFullscreen();
    else openFullscreen();
}
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      fullscreen = true;
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
      fullscreen = true;
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
      fullscreen = true;
    }
    
  }
  function closeFullscreen() {
    if (elem.exitFullscreen) {
        elem.exitFullscreen();
        fullscreen = false;
    } else if (elem.webkitExitFullscreen) { /* Safari */
        elem.webkitExitFullscreen();
        fullscreen = false;
    } else if (elem.msExitFullscreen) { /* IE11 */
        elem.msExitFullscreen();
        fullscreen = false;
    }
  }


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-drag")) {
    document.getElementById(elmnt.id + "-drag").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    if(e.target.className == "window-bar-close"){
        close(e);
        return false;
    }
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

close = function(event) {
    let idx = event.target.id;
    let window = document.querySelector('#window'+idx);
    
    window.classList.remove("opened");

    setTimeout(function(){
        window.remove();
    },100);
    return false;
}

