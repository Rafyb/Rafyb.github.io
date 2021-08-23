class Shortcut{

    constructor(sprite, name){
        this.sprite = sprite;
        this.name = name;

        let zone = scene.add.rectangle(sprite.x, sprite.y + 10, 80, sprite.height + 20 + name.height,0x2196f3);
        this.zone = zone;
        this.zone.setDepth(-2);
        this.zone.setInteractive();
        this.zone.alpha = 0.01;

        this.zone.on('pointerover',function(pointer){
            console.log("ohver")
            zone.alpha = 1;
        })

        this.zone.on('pointerout',function(pointer){
            if (selectedFolder == undefined || selectedFolder != zone) zone.alpha = 0.01;
        })

        this.zone.on('pointerdown', function (pointer) {
            console.log('click')

            if(selectedFolder != undefined){

                if(selectedFolder == zone) {
                    console.log("Open");
                    return;
                }
                
                if(selectedFolder != zone){
                    selectedFolder.setFillStyle(0x2196f3, 1);
                    selectedFolder.alpha = 0.01;
                }
            }

            selectedFolder = zone;
            zone.setFillStyle(0x2177d8, 1);
    
        });
    }
}