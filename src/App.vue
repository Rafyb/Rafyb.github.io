<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
export default {
  name: 'App',
  components:{
    navbar
  }
}
</script>

<style>
html,body{
    height : 100%;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}

#app {
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
</style>