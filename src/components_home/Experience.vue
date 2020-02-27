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
          title:"Développement d'un moteur de jeu 2D isométrique",
          info:"Vacataire 6 mois",
          utils:
            [{
              link : "",
              text : 'JavaScript',
              class : "label javascript"
            },
            {
              link : "http://phaser.io/",
              text : 'Phaser 3',
              class : "label phaser"
            }],
          desc:`Présentation<br>
                    
                <img src="${require('@/assets/Carte2DMOSAIC_V2.png')}" style="width :90%; margin:10px; display:block" >
                `,
          img:{
            link : "",
            src : require('@/assets/city_icone.png')
          },
          dateFirst : 'Juil\n2020',
          dateSecond : 'Déc\n2019'
        },
        {
          id:2,
          title:"Développement d'un mode multijoueurs en ligne",
          info:"CDD 1 mois",
          utils:
            [{
              link : "",
              text : 'JavaScript',
              class : "label javascript"
            },
            {
              link : "",
              text : 'WebService',
              class : "label webservice"
            },
            {
              link : "http://phaser.io/",
              text : 'Phaser 2',
              class : "label phaser"
            }],
          desc:`Présentation<br>
                    
                <img src="${require('@/assets/creation.png')}" style="width :28%; margin:2%;   display:inline-block" >
                <img src="${require('@/assets/rejoindre.png')}" style="width :28%; margin:2%;  display:inline-block" >
                <img src="${require('@/assets/partie.png')}" style="width :28%; margin:2%;  display:inline-block" >
                `,
          img:{
            link : "",
            src : require('@/assets/multijoueurs_icone.png')
          },
          dateFirst : 'Aout\n2019',
          dateSecond : 'Juil\n2019'
        },
        {
          id:3,
          title:'Intégration de graphiques interactifs et responsives de visualisation de données sur Moodle',
          info:"Stage 3 mois",
          utils:
            [{
              link : "",
              text : 'JavaScript',
              class : "label javascript"
            },
            {
              link : "",
              text : 'WebService',
              class : "label webservice"
            },
            {
              link : "https://www.chartjs.org/",
              text : 'ChartJS',
              class : "label chartjs"
            }],
          desc:`Durant mon stage à la Faculté de Pharmacie, j’ai dû mettre en place des représentations graphiques de 
                    diverses informations extraites de la plateforme pédagogique Moodle. Ces graphiques venant s’appliquer dans une application
                    sur mobile développée par le groupe GIVRE.<br><br>
                    Pour cela j'ai appri à utiliser l'API ChartJS ainsi que l'utilisation des WebServices de l'API Moodle. Durant ce stage j'ai été amenné
                    à rechercher des solutions techniques et à apporter mes idées sur les données pouvant être utile aussi bien pour un enseignant que
                    pour un étudiant. Ce fut aussi ma première occasion d'utiliser l'élément Canvas d'HTML 5 et de comprendre son fonctionnement.
                    Ce stage fut une bonne première expérience en entreprise pour moi, il m’a permis d’améliorer mes compétences en informatique et d’acquérir 
                    les méthodes de travail en entreprise. <br>

                    <img src="${require('@/assets/bar.jpg')}" style="width :39%; margin:5%; display:inline-block" >
                    <img src="${require('@/assets/radar.jpg')}" style="width :39%; margin:5%; display:inline-block" >
                    `,
          img:{
            link : "",
            src : require('@/assets/chartjs-logo.png')
          },
          dateFirst : 'Juil\n2019',
          dateSecond : 'Avril\n2019'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
