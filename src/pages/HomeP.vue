<template>
  <div id="HomeP">
    <navbar :actualRoute="currentPage"/>
    <router-view/>
    <webcat/>
    <stickybar/>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import stickybar from '../components/stickybar.vue';
import webcat from '../components/webcat.vue';
export default {
  name: 'HomeP',
  components:{
    navbar,
    stickybar,
    webcat
  },
  data:function(){
    return{
      page:this.$route.path
    }
  },
  computed:{
    currentPage(){
      return this.$route.path;
    }
  }
}
</script>

<style>
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
    padding: 0 30px;
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
p{
  font-size: 16px;
}
</style>