<template>
  <div class="experience">

        <h1> Mon Expérience </h1>



        <div class='block'>
        <h2>Le Givre</h2>

        <p>J’ai eu l'occasion à plusieurs reprises de travailler au sein du groupe GIVRE ( Groupe pour l’Innovation, la Valorisation et la Réflexion sur les Enseignements ). 
        Le groupe GIVRE est installé à la Faculté de Pharmacie qui fait partie de l’Université de Lille. Elle compte environ 
        2 900 étudiants en formation initiale ou continue, 140 enseignants chercheurs, une centaine de personnels techniques et administratifs et 
        14 équipes de recherche dont 8 labellisées INSERM et CNRS. Ce groupe est composé d’enseignants-chercheurs, d’une ingénieure TICE, ainsi que 
        d’un pharmacien d'officine associé à la faculté. </p>

        <a href="http://pharmacie.univ-lille.fr/innovations-pedagogiques/le-groupe-givre.html"><img :src="givreImg" style=" margin-left: auto; margin-right: auto; display:block; width:70%;" ></a>
              
        <p>Leur objectif est d’exploiter au mieux les supports numériques pour aider les étudiants dans leurs apprentissages à l’aide de supports 
        de travail adaptatif (Learning Adaptive) et d’outils d’analyse des apprentissages (Learning Analytics).</p>
        <br/>
        <br/>
        <timeline :timeline="timeline"/>
      </div>

  </div>
</template>

<script>
import timeline from './timeline.vue';
import json from '../json/experience_timeline.json';
export default {
  name: 'Experience',
  components:{
    timeline
  },
  data:function() {
    return{
      givreImg : require("@/assets/givre.png"),
    }
  },
  computed:{
    timeline(){
      return json.timeline;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experience{
    background-color: #ffffff;
    height: max-content;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
}

.block{
  width: 100%;
}

.experience>h1{
    color: rgb(42, 42, 42);
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
/*
  #experience{
    background-color: #04912e;
    color: white;
    padding:2%;
  }

  #experience_intro{
    background-color: #f8f8f8;
    color: black;
    padding:5%;
    padding-bottom:8% ;
  }
*/
</style>
