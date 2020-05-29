<template>
  <div id="HomePage">
    <div id="HomeP">
      <headerbar/>
      <bgCanvas/>
      <Home/>
      <Experience/>
      <Realisation/>
      <webcat/>
      <stickybar/>
    </div>
    <footerbar/>
  </div>
</template>

<script>
import headerbar from '../components_home/headerbar.vue';
import bgCanvas from '../components_home/bgCanvas.vue';
import Realisation from '../components_home/Realisation.vue';
import Home from '../components_home/Home.vue';
import Experience from '../components_home/Experience.vue';
import footerbar from '../components_home/footerbar.vue';
import stickybar from '../components_home/stickybar.vue';
import webcat from '../components_home/webcat.vue';
export default {
  name: 'HomeP',
  components:{
    headerbar,
    bgCanvas,
    Realisation,
    Home,
    Experience,
    footerbar,
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
  overflow-y: scroll;
}

section{
  box-shadow: 0px 5px 5px #36363677;
}

</style>