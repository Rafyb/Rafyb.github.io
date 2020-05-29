<template>
  <div class="home">
    <section id="home">
        <h1> Présentation </h1>
    </section>
    <section id="home_intro">
      <div class='block'>
        <h1>Pour commencer</h1>

        <p>Je m’appelle Raphael, j’ai 21 ans et je suis actuellement étudiant à L’université catholique de Lille en Licence 3 Sciences 
        du numérique. Je suis passioné par le milieu de l’informatique et du visuel, plus précisément dans le Développement de Jeux video.</p>

        <p>Mes passe-temps sont le vélo, la photographie et le dessin. Je dessine sur tablette graphique. Ce qui m’enthousiasme le plus dans le développement,
        c’est de pouvoir concevoir quelque chose de concret que je puisse utiliser et ou qui puisse être utile à des personnes. J’aimerai créer des jeux qui 
        fassent ressentir des émotions par leurs univers, l’ambiance de leurs décors. Mais aussi des jeux avec des gameplays innovants ou qui aident à l'apprentissage. 
        </p>
        </div>
    </section>
    <section id="home_timeline">
      <div class='block'>
        <h1>Formations</h1>
        <timeline :timeline="timeline"/>
      </div>
    </section>
    <section id="home_autres">
      <h1 class='block'>Mes Compétences</h1>

      <h2 class='block'> > Langages utilisés</h2>
        <ul>
          <li><img :src="require('@/assets/java.png')"/></li>
          <li><img :src="require('@/assets/js.png')"/></li>
          <li><img :src="require('@/assets/c.png')"/></li>
          <li><img :src="require('@/assets/html.png')"/></li>
          <li><img :src="require('@/assets/sql.png')"/></li>
        </ul>

      <h2 class='block'> > Outils/Framework utilisés</h2>
        <ul>
          <li><img :src="require('@/assets/git.png')"/></li>
          <li><img :src="require('@/assets/azure.png')"/></li>
          <li><img :src="require('@/assets/vue.png')"/></li>
          <li><img :src="require('@/assets/phaser2.png')"/></li>
          <li><img :src="require('@/assets/unity.png')"/></li>
          <li><img :src="require('@/assets/android.png')"/></li>
        </ul>

        <h2 class='block'> > Langages déja manipulé</h2>
        <ul>
          <li><img :src="require('@/assets/csharp.png')"/></li>
          <li><img :src="require('@/assets/typescript.png')"/></li>
          <li><img :src="require('@/assets/python.png')"/></li>
          <li><img :src="require('@/assets/cobol.png')"/></li>
          <li><img :src="require('@/assets/jsp.png')"/></li>
          <li><img :src="require('@/assets/bash.png')"/></li>
        </ul>

    </section>
  </div>
</template>

<script>
import timeline from './timeline.vue';
import json from '../json/home_timeline.json'
export default {
  name: 'Home',
  components:{
    timeline
  },
  data:function() {
    return{
      
    }
  },
  computed:{
    timeline(){
      console.log(json);
      return json.timeline;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #home{
    background-color: #0768a0;
    color: white;
    padding:2%;
  }
  
  #home_intro{
    background-color: black;
    color: white;
    padding:5%;
  }

  #home_timeline{
    background-color: #f8f8f8;
    padding:5%;
  }

  #home_autres{
    background-color:#2e2e2e;
    color: white;
    padding:5%;
  }

  ul {
    text-align: center;
    list-style: none;
    padding: 0;
	}
	ul li{
		display: inline;
    margin:10px;
	}

@media screen and (min-width: 799px){
  img{
    width: 100px;
  }
}

@media screen and (max-width: 799px){
  img{
    width: 80px;
  }
}

  img{
    border-radius: 10px;
    filter: grayscale(100%);
    margin-bottom:5px ;
  }

  img:hover{
    filter: grayscale(0%);
  }

  h2{
    margin-top:20px;
    font-size: 1.3em;
  }
</style>
