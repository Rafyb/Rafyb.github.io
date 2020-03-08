<template>
  <div class="sidenav">
    <button id="dropdown-btn1" class="dropdown-btn">Etudiants <i  id="arrow1" class="fa fa-caret-down"></i> </button>
    <div id="dropdown-container1" class="dropdown-container">
        <router-link to="/Realisations/FU"><i class="fa fa-gamepad" ></i> Flipper Unity</router-link>
        <router-link to="/Realisations/QW"><i class="fa fa-globe"></i> Quizz Web </router-link>
        <router-link to="/Realisations/LTD"><i class="fa fa-cog"></i> Lanceur Taches diférées </router-link>
        <router-link to="/Realisations/COM"><i class="fa fa-globe"></i> ComWivMi </router-link>
        <router-link to="/Realisations/A3D"><i class="fa fa-window-maximize"></i> Application affichage modèle 3D </router-link>
        <router-link to="/Realisations/JGV"><i class="fa fa-gamepad" ></i> Jeu de gestion de village </router-link>
        <router-link to="/Realisations/SW"><i class="fa fa-cog"></i> Serveur Web </router-link>
        <router-link to="/Realisations/NG"><i class="fa fa-window-maximize"></i> Nuanceur de gris </router-link>
        <router-link to="/Realisations/JPP"><i class="fa fa-gamepad" ></i> Jeu pédagogique gestion de projet </router-link>
        <router-link to="/Realisations/JEM"><i class="fa fa-gamepad" ></i> Jeu éducatif mathématiques </router-link>
    </div>
    <button id="dropdown-btn2" class="dropdown-btn">Personnels <i id="arrow2" class="fa fa-caret-down"></i> </button>
    <div id="dropdown-container2" class="dropdown-container">
        <router-link to="/Realisations/TDU"><i class="fa fa-gamepad" ></i> Tower Defense Unity </router-link>
        <router-link to="/Realisations/MBI"><i class="fa fa-gamepad" ></i> Medieval Builder Iso </router-link>
    </div>
    <button id="dropdown-btn3" class="dropdown-btn">Reflexions <i id="arrow3" class="fa fa-caret-down"></i> </button>
    <div id="dropdown-container3" class="dropdown-container">
        <router-link to="/Realisations/CG"><i class="fa fa-calculator"></i> Colorations de Graphe </router-link>
        <router-link to="/Realisations/I3D"><i class="fa fa-cubes"></i> Isometrie 2D Phaser 3 </router-link>
    </div>
   </div> 
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style scoped>
.sidenav{
  width:300px;
  position: fixed;
  z-index: 5;
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

</style>