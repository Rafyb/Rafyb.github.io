<template>
    <div class="pahserComponent">

        <div id="logo">
            <a href="/">Raphael Bauvin</a>
            <div class="transparent">
                <span>Web Apps & Games Developer</span>
                <!--<span>Web Apps & Games Developer</span>-->
            </div>

        </div>

        <div id="jeu" width="100%" height="300px"></div>
    
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
        font-size: 2rem;
        box-shadow: 0px 5px 5px rgb(65, 65, 65);
        border-radius: 15px;
        padding: 2px 15px 2px 15px;
        background-color: #fff;
        color: rgb(17, 17, 17);
    }

    #logo a {
        font-size: 4rem;
    }

    #logo {
        top:84px;
        left:64px;
    }
}

@media screen and (max-width: 799px){

    #logo span{
        font-size: 2rem;
        box-shadow: 0px 5px 5px rgb(65, 65, 65);
        padding: 4px;
        background-color: #fff;
        color: rgb(17, 17, 17);
    }

    #logo a {
        font-size: 3rem;
    }

    #logo {
        top:10%;
        left:5%;

    }
}

#logo .transparent{
    
}

#logo .transparent span{

    font-weight: 700;

    /*mix-blend-mode: screen;*/
}
/*
#logo .transparent span:last-child{
    mix-blend-mode: normal;
    color: transparent;
    background: none;
}*/


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