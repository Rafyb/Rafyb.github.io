import Phaser from 'phaser'
// Création de l'environnement de jeu
export default {
    type: Phaser.WEBGL, // la technologie utilié est WEBGL 
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'jeu',              // element HTML dans lequel est injecté la scène
        width: '100',
        height: 400,
    },
    backgroundColor: '#ababab', // couleur de fond du jeu
    transparent: false,         // définit s'il faut un fond transparent a la div du jeu
    antialias: true,            // anticrénelage
};

