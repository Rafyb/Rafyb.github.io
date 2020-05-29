<template>
  <div class="sidenav">
    <button id="dropdown-btn1" class="dropdown-btn" v-on:click="dropdown">Etudiants <i  id="arrow1" class="fa fa-caret-down"></i> </button>
    <div id="dropdown-container1" class="dropdown-container">
        <router-link class="unvalable" to="/Realisations/PJ"><i class="fa fa-globe"></i> Pokejora </router-link>
        <router-link class="unvalable" to="/Realisations/FU" disabled><i class="fa fa-gamepad" ></i> Flipper Unity</router-link>
        <router-link to="/Realisations/QW"><i class="fa fa-globe"></i> Quizz Web </router-link>
        <router-link class="unvalable" to="/Realisations/LTD"><i class="fa fa-cog"></i> Lanceur Taches diférées </router-link>
        <router-link class="unvalable" to="/Realisations/COM"><i class="fa fa-globe"></i> ComWivMi </router-link>
        <router-link class="unvalable" to="/Realisations/SW"><i class="fa fa-cog"></i> Serveur Web </router-link>
        <router-link to="/Realisations/A3D"><i class="fa fa-window-maximize"></i> Application affichage modèle 3D </router-link>
        <router-link to="/Realisations/JGV"><i class="fa fa-gamepad" ></i> Jeu de gestion de village </router-link>
        <router-link class="unvalable" to="/Realisations/NG"><i class="fa fa-window-maximize"></i> Nuanceur de gris </router-link>
        <router-link class="unvalable" to="/Realisations/JPP"><i class="fa fa-gamepad" ></i> Jeu pédagogique gestion de projet </router-link>
        <router-link to="/Realisations/JEM"><i class="fa fa-gamepad" ></i> Jeu éducatif mathématiques </router-link>
    </div>
    <button id="dropdown-btn2" class="dropdown-btn" v-on:click="dropdown">Personnels <i id="arrow2" class="fa fa-caret-down"></i> </button>
    <div id="dropdown-container2" class="dropdown-container">
        <router-link class="unvalable" to="/Realisations/MSW"><i class="fa fa-globe"></i> Mon site web </router-link>
        <router-link class="unvalable" to="/Realisations/RPG"><i class="fa fa-gamepad" ></i> RPG Multivers </router-link>
        <router-link class="unvalable" to="/Realisations/MBI"><i class="fa fa-gamepad" ></i> Medieval Builder Iso </router-link>
    </div>
    <button id="dropdown-btn3" class="dropdown-btn" v-on:click="dropdown">Reflexions <i id="arrow3" class="fa fa-caret-down"></i> </button>
    <div id="dropdown-container3" class="dropdown-container">
        <router-link  class="unvalable" to="/Realisations/ICPC"><i class="fa fa-calculator"></i> Problèmes ICPC </router-link>
        <router-link  class="unvalable" to="/Realisations/I3D"><i class="fa fa-cubes"></i> Isometrie 2D </router-link>
    </div>
   </div> 
</template>

<script>
export default {
  name: 'sidebar',
  methods:{
    dropdown(event){
      console.log(event.originalTarget.id);
      if('dropdown-btn1'==event.originalTarget.id ||'arrow1'==event.originalTarget.id  ){
        if(document.querySelector('#dropdown-container1').style.display == 'none'){
          document.querySelector('#dropdown-container1').style.display = 'block';
          document.querySelector('#arrow1').classList.remove('fa-caret-left');
          document.querySelector('#arrow1').classList.add('fa-caret-down');
        }else{
          document.querySelector('#dropdown-container1').style.display = 'none';
          document.querySelector('#arrow1').classList.remove('fa-caret-down');
          document.querySelector('#arrow1').classList.add('fa-caret-left');
        }
      }
      if('dropdown-btn2'==event.originalTarget.id ||'arrow2'==event.originalTarget.id){
        if(document.querySelector('#dropdown-container2').style.display == 'none'){
          document.querySelector('#dropdown-container2').style.display = 'block';
          document.querySelector('#arrow2').classList.remove('fa-caret-left');
          document.querySelector('#arrow2').classList.add('fa-caret-down');
        }else{
          document.querySelector('#dropdown-container2').style.display = 'none';
          document.querySelector('#arrow2').classList.remove('fa-caret-down');
          document.querySelector('#arrow2').classList.add('fa-caret-left');
        }
      }
      if('dropdown-btn3'==event.originalTarget.id ||'arrow3'==event.originalTarget.id){
        if(document.querySelector('#dropdown-container3').style.display == 'none'){
          document.querySelector('#dropdown-container3').style.display = 'block';
          document.querySelector('#arrow3').classList.remove('fa-caret-left');
          document.querySelector('#arrow3').classList.add('fa-caret-down');
        }else{
          document.querySelector('#dropdown-container3').style.display = 'none';
          document.querySelector('#arrow3').classList.remove('fa-caret-down');
          document.querySelector('#arrow3').classList.add('fa-caret-left');
        }
      }
    },
  }
}
</script>

<style>
.sidenav .router-link-exact-active{
  background-color: #303030;
  color:white;
}

.sidenav{
  width:300px;
  position: fixed;
  z-index: 15;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  height: -webkit-calc(100% - 68px);
  height: -moz-calc(100% - 68px);
  height: calc(100% - 68px);
  top:68px;
}

.sidenav a, .dropdown-btn {
  text-decoration: none;
  font-size: 1.8em;
  color: #363636;
  display: block;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.sidenav .unvalable{
  color:rgb(170, 170, 170);
  pointer-events: none;
}

.sidenav .unvalable:hover{
  background-color: rgb(255, 255, 255);
  color:rgb(170, 170, 170);
  cursor: not-allowed;
}

.dropdown-container a{
  font-size: 1.2em;
  padding: 12px 8px 7px 30px;
  
}

.dropdown-container a:hover{
  background-color: rgb(131, 131, 131);
  color:white;
}

.dropdown-container{
  margin-bottom: 20px;
}

.dropdown-btn{
  background-color: rgb(224, 224, 224);
  padding: 6px 8px 6px 10px;
  width:100%;
}

.fa-caret-down, .fa-caret-left{
  float: right;
}

@media screen and (max-width: 900px) {
  .sidenav {
      display: none;
      width: 100%;
  }
  
}

@media screen and (min-width: 900px) {
  .sidenav {
      display: "block";
      width:300px;
  }
  
}

</style>