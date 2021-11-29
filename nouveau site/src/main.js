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

idxWindow = 0;
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
        this.load.json('timelineExp', 'json/timeline_exp.json');

    },
    create: function () 
    {
        scene = this;

        //let tsJson = this.cache.json.get('TSObject');
        let aboutFile = this.add.sprite(50, 38, 'file');
        let aboutText = this.add.text(aboutFile.x - 34, aboutFile.y + 25 ,"About me",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let aboutme = new Shortcut(aboutFile,aboutText,"file");

        let expFile = this.add.sprite(50, 123, 'file');
        let expText = this.add.text(expFile.x - 43, expFile.y + 25 ,"Experiences",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let experiences = new Shortcut(expFile,expText,"file");

        let reaFolder = this.add.sprite(50, 208, 'folder');
        let reaText = this.add.text(reaFolder.x - 43, reaFolder.y + 25 ,"Realisations",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let realisations = new Shortcut(reaFolder,reaText,"folder");

        let gameFolder = this.add.sprite(50, 293, 'folder');
        let gameText = this.add.text(gameFolder.x - 28, gameFolder.y + 25 ,"Games",{ font: '16px Arial', fill: '#ffffff',shadow: {offsetX: 0.4,offsetY: 0.4,color: '#000', fill: true} });
        let games = new Shortcut(gameFolder,gameText,"folder");

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

