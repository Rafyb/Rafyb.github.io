<template>
    <div class="pahserComponent">

        <div id="logo">
            <a href="/">Raphael Bauvin</a>
            <span>Web Apps & Games Developer</span>
        </div>

        <div id="jeu" width="100%"></div>
    
    </div>
</template>

<script>
import Phaser from 'phaser'
import config from '../game/config.js'
import BootState from '../game/states/BootState.js'

export default {
  name: 'headerbar',
  created : function(){
    window.game = new Phaser.Game(config);
    // Ajout des scènes
    window.game.scene.add('Boot', BootState);

    // Lancement de la première scène
    window.game.scene.start("Boot");

  },
  destroyed() {
    window.game.destroy(false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (min-width: 799px){

    #logo span{
        font-size: 3rem;
    }

    #logo a {
        font-size: 5rem;
    }

    #logo {
        top:15%;
        left:15%;
    }
}

@media screen and (max-width: 799px){

    #logo span{
        font-size: 2rem;
    }

    #logo a {
        font-size: 3rem;
    }

    #logo {
        top:10%;
        left:5%;

    }
}

#logo span{
    box-shadow: 0px 5px 5px rgb(65, 65, 65);
    background-color: #fff;
    mix-blend-mode: screen;
    color: #000;
    font-weight: 700;
    padding: 4px;
}

#logo a {
    display: block;
    text-decoration: none;
    color: #ffffff;
    font-style : arial;
    text-shadow: 0px 5px 5px rgb(65, 65, 65);
}

#logo {
    position: absolute;
    z-index: 2;
    color: #ffffff;
}

</style>