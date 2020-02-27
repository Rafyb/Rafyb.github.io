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

      <p>Etenim si attendere diligenter, existimare vere de omni hac causa volueritis, sic constituetis,
      iudices, nec descensurum quemquam ad hanc accusationem fuisse, cui, utrum vellet, liceret, nec, cum descendisset,
      quicquam habiturum spei fuisse, nisi alicuius intolerabili libidine et nimis acerbo odio niteretur. Sed ego Atratino,
      humanissimo atque optimo adulescenti meo necessario, ignosco, qui habet excusationem vel pietatis vel necessitatis
      vel aetatis. Si voluit accusare, pietati tribuo, si iussus est, necessitati, si speravit aliquid, pueritiae. Ceteris non
      modo nihil ignoscendum, sed etiam acriter est resistendum.</p>
    </section>
  </div>
</template>

<script>
import timeline from './timeline.vue';
export default {
  name: 'Home',
  components:{
    timeline
  },
  data:function() {
    return{
      timeline:[
        {
          id:1,
          title:'Licence 3 - Sciences du Numérique ',
          info:'Formation sur 1 an, Niveau BAC+3',
          utils:
            [{
              link : "https://www.fges.fr/cursus-universitaire/licence-sts/informatique-et-sciences-du-numerique/",
              text : 'Contenu de la formation',
              class : 'link'
            }]
          ,
          desc:'',
          img:{
            link : "https://www.fges.fr/",
            src : require('@/assets/fges_min.png')
          },
          dateFirst : '2020',
          dateSecond : '2019'
        },
        {
          id:2,
          title:'DUT Informatique',
          info:'Formation sur 2 ans, Niveau BAC+2',
          utils:
            [{
              link : "http://www.iut-a.univ-lille.fr/dut-info/",
              text : 'Contenu de la formation',
              class : 'link'
            }],
          desc:'',
          img:{
            link : "https://www.iut-a.univ-lille.fr/",
            src : require('@/assets/iuta.png')
          },
          dateFirst : '2019',
          dateSecond : '2017'
        },
        {
          id:3,
          title:'Bac STI2D - options SIN',
          info:"Bac Sciences et Technologies de l'Industrie et du Développement Durable - Système de l'Information et du Numérique",
          utils:
            [{
              link : "https://www.cidj.com/etudes-formations-alternance/les-diplomes/bac-sti2d-bac-technologique",
              text : 'Contenu de la formation',
              class : 'link'
            }],
          desc:'',
          img:{
            link : "https://saintremi.fr/",
            src : require('@/assets/stremi.png')
          },
          dateFirst : '2017',
          dateSecond : '2015'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
