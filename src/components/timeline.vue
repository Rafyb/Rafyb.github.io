<template>
    <div class="timeline">
        <div v-if="!vide">
        <ul>
            <li v-for="time in timeline" :key="time.id" ><span></span>
            <div>
            <div class="title">{{time.title}}</div>
            <div class="info">{{time.info}}</div>
            <div class="utils"><a :href="time.utils[0].text">{{time.utils[0].text}}</a></div>
            <div class="type">{{time.desc}}</div>
            <div class="img"><a v-bind:href="time.img.link"><img v-bind:src="time.img.src"></a></div>
            </div> <span class="number"><span>{{time.dateFirst}}</span> <span>{{time.dateSecond}}</span></span>
            </li>
        </ul>
        </div>
        <div v-if="vide">
        <ul>
            <li><span></span>
                <div>
                    <div class="title">Développement d'un système de Jeu en 2D isométrique </div>
                    <div class="info">Vacataire 6 mois </div>
                    <div><a href="/"><span class="label javascript">JavaScript</span></a> <a href="http://phaser.io/"><span class="label phaser">Phaser 3</span></a> </div>
                    <div class="type">Présentation<br>
                    
                    <img src="@/assets/Carte2DMOSAIC_V2.png" style="width :90%; margin:10px; display:block" >
                    
                </div>
                <div class="img"><img src="@/assets/city_icone.png" ></div>
                </div> <span class="number"><span>Jui<br>2020</span> <span>Déc 2019</span></span>
            </li>
            <li>
                <div><span></span>
                    <div class="title">Développement d'un mode multijoueurs en ligne</div>
                    <div class="info">CDD 1 mois </div>
                    <div> <a href="/"><span class="label javascript">JavaScript</span></a> <a href="http://phaser.io/"><span class="label phaser">Phaser 2</span></a> </div>
                    <div class="type">Présentation<br>
                    
                    <img src="@/assets/creation.png" style="width :28%; margin:2%;   display:inline-block" >
                    <img src="@/assets/rejoindre.png" style="width :28%; margin:2%;  display:inline-block" >
                    <img src="@/assets/partie.png" style="width :28%; margin:2%;  display:inline-block" >
                    
                </div>
                <div class="img"><img src="@/assets/multijoueurs_icone.png" ></div>
                </div> <span class="number"><span>Aout 2019</span><span>Jui<br>2019</span></span>
            </li>
            <li>
                <div><span></span>
                    <div class="title">Intégration de graphiques interactifs et responsives de visualisation de données sur Moodle </div>
                    <div class="info">Stage 3 mois </div>
                    <div><a href="/"><span class="label javascript">JavaScript</span></a> <a href="/"><span class="label webservice">WebService</span></a> <a href="https://www.chartjs.org/"><span class="label chartjs">ChartJS</span> </a> </div>
                    <div class="type">Durant mon stage à la Faculté de Pharmacie, j’ai dû mettre en place des représentations graphiques de 
                    diverses informations extraites de la plateforme pédagogique Moodle. Ces graphiques venant s’appliquer dans une application
                    sur mobile développée par le groupe GIVRE.<br><br>
                    Pour cela j'ai appri à utiliser l'API ChartJS ainsi que l'utilisation des WebServices de l'API Moodle. Durant ce stage j'ai été amenné
                    à rechercher des solutions techniques et à apporter mes idées sur les données pouvant être utile aussi bien pour un enseignant que
                    pour un étudiant. Ce fut aussi ma première occasion d'utiliser l'élément Canvas d'HTML 5 et de comprendre son fonctionnement.
                    Ce stage fut une bonne première expérience en entreprise pour moi, il m’a permis d’améliorer mes compétences en informatique et d’acquérir 
                    les méthodes de travail en entreprise. <br>

                    <img src="@/assets/bar.jpg" style="width :39%; margin:5%; display:inline-block" >
                    <img src="@/assets/radar.jpg" style="width :39%; margin:5%; display:inline-block" >
                    </div>
                    <div class="img"><img src="@/assets/chartjs-logo.png" ></div>
                </div> <span class="number"><span>Jui<br>2019</span> <span>Avril 2019</span></span>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'timeline',
  props:{
      timeline:Array
  },
  computed:{
      vide(){
          return this.timeline == undefined;
      }
  }
}
</script>

<style>
.timeline ul {
    margin: 0;
    list-style: none;
    position: relative;
    padding: 1px 40px;
    color: rgb(83, 83, 83);
    font-size: 13px;
}
.timeline ul:before {
    content: "";
    width: 5px;
    height: 100%;
    left:71px;
    position: absolute;
    border-left: 3px dashed rgb(56, 56, 56);
}
.timeline ul li {
    position: relative;
    margin-left: 30px;
    background-color: rgb(209, 209, 209);
    padding: 14px;
    border-radius: 6px;
    left:30px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
    transition: box-shadow .3s;
    color : #181818;
}
.timeline ul li:hover {
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.411);
    background-color: rgb(49, 49, 49);
    color : #f8f8f8;
}
.timeline ul li:not(:first-child) {
    margin-top: 60px;
}
.timeline ul li > span {
    width: 5px;
    height: 100%;
    background: rgb(43, 43, 43);
    top: 0;
    position: absolute;
    left:-30px;
}
.timeline ul li > span:before, ul li > span:after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgb(32, 32, 32);
    position: absolute;
    background: #86b7e7;
    left:-8px;
    top: 0;
}
.timeline ul li span:after {
    top: 100%;
}
.timeline ul li > div {
    margin-left: 10px;
}
.timeline div .title{
    font-weight: 600;
    font-size: 20px;
    width:80%;
}
.timeline div .type{
    margin-top: 15px;
    font-size: 16px;
}
.timeline div a{
    text-decoration: none;
    margin-top: 10px;
    font-size: 16px;
    color:#0768a0;
}
.timeline div a:hover{
    color:#86b7e7;
}
.timeline div .info {
    font-weight: 300;
    font-size : 16px;
    font-style : italic;
    margin-bottom: 10px;
    width:80%;
  }
.timeline div .img {
    position: absolute;
    right: -5px;
    top: -50px;
    border-radius: 5px;
    background-color: #ffffffa8;
}
.timeline div > div {
    margin-top: 5px;
}
span.number {
    height: 100%;
}
span.number span {
    position: absolute;
    font-size: 15px;
    left: -55px;
    font-weight: bold;
}
span.number span:first-child {
    top: 0;
}
span.number span:last-child {
    top: 100%;
}
</style>