<template>
  <div id="HomePage">
    <div id="HomeP">
      <bgCanvas/>
      <projects/>
      <tabler/>
      <!--
      <headerbar/>
      
      <Home/>
      <Experience/>
      <Realisation/>
      -->
      <webcat/>
      <stickybar/>
    </div>
    <!--<footerbar/>-->
  </div>
</template>

<script>
import bgCanvas from '../components_home/bgCanvas.vue';
import projects from '../components_home/projects.vue';
import tabler from '../components_home/tabler.vue';
//import headerbar from '../components_home/headerbar.vue';
/*
import Realisation from '../components_home/Realisation.vue';
import Home from '../components_home/Home.vue';
import Experience from '../components_home/Experience.vue';
*/
//import footerbar from '../components_home/footerbar.vue';
import stickybar from '../components_home/stickybar.vue';
import webcat from '../components_home/webcat.vue';
export default {
  name: 'HomeP',
  components:{
    bgCanvas,
    projects,
    tabler,
    //headerbar,
    /*
    Realisation,
    Home,
    Experience,
    */
    //footerbar,
    stickybar,
    webcat
  },
  data:function(){
    return{
      page:'Home'
    }
  },
  methods:{
    pageChange:function(page){
      this.page = page;
    }
  }
}
</script>

<style>


@media screen and (max-width: 799px){

}

body{
  /*overflow-y: scroll;*/
}

section{
  box-shadow: 0px 5px 5px #36363677;
}

.sub-title{
        position: relative;
        font-size: 1.2rem;
        /*box-shadow: 0px 5px 5px rgb(65, 65, 65);*/
        border-radius: 15px;
        padding: 2px 15px 2px 15px;
        background-color: #333333;
        color: rgb(255, 255, 255);
        z-index: 3;
        top:-12px;
        left:10px;
}


</style>