<template>
  <div class="experience">
    <section id="experience_intro">
      <h1>Le Givre</h1>

      <p>J’ai eu l'occasion à plusieurs reprises de travailler au sein du groupe GIVRE ( Groupe pour l’Innovation, la Valorisation et la Réflexion sur les Enseignements ). 
      Le groupe GIVRE est installé à la Faculté de Pharmacie qui fait partie de l’Université de Lille. Elle compte environ 
      2 900 étudiants en formation initiale ou continue, 140 enseignants chercheurs, une centaine de personnels techniques et administratifs et 
      14 équipes de recherche dont 8 labellisées INSERM et CNRS. Ce groupe est composé d’enseignants-chercheurs, d’une ingénieure TICE, ainsi que 
      d’un pharmacien d'officine associé à la faculté. </p>

      <a href="http://pharmacie.univ-lille.fr/innovations-pedagogiques/le-groupe-givre.html"><img :src="givreImg" style=" margin-left: auto; margin-right: auto; display:block" ></a>
            
      <p>Leur objectif est d’exploiter au mieux les supports numériques pour aider les étudiants dans leurs apprentissages à l’aide de supports 
      de travail adaptatif (Learning Adaptive) et d’outil d’analyse des apprentissages (Learning Analytics).</p>
      <br/>
      <br/>
      <timeline :timeline="timeline"/>
      
    </section>
  </div>
</template>

<script>
import timeline from './timeline.vue';
export default {
  name: 'Experience',
  components:{
    timeline
  },
  data:function() {
    return{
      givreImg : require("@/assets/givre.png"),
      timeline:[
        {
          id:1,
          title:'Licence 3 - Sciences du Numérique ',
          info:'Formation sur 1 an, Niveau BAC+3',
          utils:
            [{
              link : "https://www.fges.fr/cursus-universitaire/licence-sts/informatique-et-sciences-du-numerique/",
              text : 'Contenu de la formation'
            }]
          ,
          desc:'<p>Presentation</p>',
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
              text : 'Contenu de la formation'
            }],
          desc:'Presentation',
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
              text : 'Contenu de la formation'
            }],
          desc:`Durant mon stage à la Faculté de Pharmacie, j’ai dû mettre en place des représentations graphiques de 
                    diverses informations extraites de la plateforme pédagogique Moodle. Ces graphiques venant s’appliquer dans une application
                    sur mobile développée par le groupe GIVRE.<br><br>
                    Pour cela j'ai appri à utiliser l'API ChartJS ainsi que l'utilisation des WebServices de l'API Moodle. Durant ce stage j'ai été amenné
                    à rechercher des solutions techniques et à apporter mes idées sur les données pouvant être utile aussi bien pour un enseignant que
                    pour un étudiant. Ce fut aussi ma première occasion d'utiliser l'élément Canvas d'HTML 5 et de comprendre son fonctionnement.
                    Ce stage fut une bonne première expérience en entreprise pour moi, il m’a permis d’améliorer mes compétences en informatique et d’acquérir 
                    les méthodes de travail en entreprise. <br>

                    <img src="@/assets/bar.jpg" style="width :39%; margin:5%; display:inline-block" >
                    <img src="@/assets/radar.jpg" style="width :39%; margin:5%; display:inline-block" >
                    `,
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
