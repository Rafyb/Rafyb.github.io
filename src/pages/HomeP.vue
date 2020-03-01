<template>
  <div id="HomePage">
    <div id="HomeP">
      <navbar @changePage="pageChange"/>
      <div v-if="page=='Home'">
        <Home/>
      </div>
      <div v-if="page=='Expe'">
        <Experience/>
      </div>
      <div v-if="page=='Real'">
        <Realisation/>
      </div>
      <webcat/>
      <stickybar/>
    </div>
    <footerbar/>
  </div>
</template>

<script>
import navbar from '../components_home/navbar.vue';
import Realisation from '../components_home/Realisation.vue';
import Home from '../components_home/Home.vue';
import Experience from '../components_home/Experience.vue';
import footerbar from '../components_home/footerbar.vue';
import stickybar from '../components_home/stickybar.vue';
import webcat from '../components_home/webcat.vue';
export default {
  name: 'HomeP',
  components:{
    navbar,
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
  #HomePage{
    display: none;
  }
}

body{
  overflow-y: scroll;
  background : #f8f8f8 url('../assets/home_background.png') center -80px no-repeat;
}
section{
  padding-top: 20px;
}
#HomeP {
    max-width: 800px;
    min-width: 380px;
    margin: 0 auto;
    text-align: justify;
    text-justify: inter-word;
}
h1{
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    color: #333;
    padding-top: 20px;
    border-top: 1px dashed#ccc;
    text-shadow: 0px 1px 1px#fff;
}

h2{
    font-size: 24px;
    font-weight: normal;
    color: rgb(88, 88, 88);
    padding-top: 20px;
    text-shadow: 0px 1px 1px#fff;
}
p{
  font-size: 16px;
}
.home, .experience, .realisation{
  margin: 2%;
}
</style>