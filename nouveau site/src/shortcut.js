class Shortcut{

    constructor(sprite, text){
        this.sprite = sprite;
        this.text = text;

        let zone = scene.add.rectangle(sprite.x, sprite.y + 10, 80, sprite.height + 20 + text.height,0x2196f3);
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

        this.zone.on('pointerup', function (pointer) {
            let opened = false

            if(selectedFolder != undefined){

                if(selectedFolder == zone) {
                    new WindowFolder(text._text).show();
                    opened = true;
                }

                selectedFolder.setFillStyle(0x2196f3, 1);
                selectedFolder.alpha = 0.01;
                selectedFolder = undefined;
                if(opened) return;
            }

            selectedFolder = zone;
            zone.setFillStyle(0x2177d8, 1);
    
        });
    }
}