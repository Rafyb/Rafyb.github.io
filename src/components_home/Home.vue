<template>
  <div class="home">
    <section id="home_intro">
      <h1>Pour commencer</h1>

      <p>Je m’appelle Raphael Bauvin, j’ai 20 ans et je suis actuellement étudiant à L’université catholique de Lille en Licence 3 Sciences 
      du numérique. Je suis passioné par le milieu de l’informatique et du visuel, plus précisément dans le Développement de Jeux video.</p>

      <p>Mes passe-temps sont le vélo, la photographie et le dessin. Je dessine sur tablette graphique et j’invente des scénarios, personnages 
      et méchanismes de jeux video. Ce qui m’enthousiasme le plus dans le développement, c’est de pouvoir concevoir quelque chose de concret que 
      je puisse expérimenter et améliorer. J’aimerai créer des jeux qui fassent ressentir des émotions par leurs univers, l’ambiance de leurs décors. 
      Mais aussi des jeux avec des gameplays innovants ou qui aident à l'apprentissage. </p>
    </section>
    <section id="home_timeline">
      <h1>Formations</h1>
      <timeline :timeline="timeline"/>
    </section>
    <section id="home_autres">
      <h1>Mes Compétences</h1>

      <h2>Langages utilisés</h2>
        <ul>
          <li><img :src="require('@/assets/java.png')"/></li>
          <li><img :src="require('@/assets/js.png')"/></li>
          <li><img :src="require('@/assets/c.png')"/></li>
          <li><img :src="require('@/assets/html.png')"/></li>
          <li><img :src="require('@/assets/sql.png')"/></li>
        </ul>

      <h2>Outils/Framework utilisés</h2>
        <ul>
          <li><img :src="require('@/assets/git.png')"/></li>
          <li><img :src="require('@/assets/azure.png')"/></li>
          <li><img :src="require('@/assets/vue.png')"/></li>
          <li><img :src="require('@/assets/phaser2.png')"/></li>
          <li><img :src="require('@/assets/unity.png')"/></li>
          <li><img :src="require('@/assets/android.png')"/></li>
        </ul>

        <h2>Langages déja manipulé</h2>
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
  ul {
    text-align: center;
    list-style: none;
	}
	ul li{
		display: inline;
    margin:10px;
	}

  img{
    border-radius: 10px;
    filter: grayscale(100%);
  }

  img:hover{
    filter: grayscale(0%);
  }
</style>
