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
}
</style>