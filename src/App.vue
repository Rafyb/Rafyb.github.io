<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

html{
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #333333;
    width:100%;
    height: 100%;
}


body{
  margin:0;
  width:100%;
  height: 100%;
}

/* -- Style of the labels -- */

.label {
    color: white;
    padding: 4px;
    border-radius: 6px;
    font-size: 0.8em;
    font-weight: bold;
    text-decoration: none;
    margin-right: 5px;
}

.block{
    text-align: justify;
    margin: auto;
}

@media screen and (min-width: 1000px){
  .block{
    width: 900px;
  }
}
/*
@media screen and (min-width: 799px){
  .block{
    width: 700px;
  }
}*/

@media screen and (max-width: 799px){
  .block{
    width: 90%;
  }
}


  
.success {background-color: #4CAF50;} /* Green */
.phaser {background-color: rgb(20, 108, 180);} /* Blue */
.chartjs {background-color: #ff6384;} /* Blue */
.warning {background-color: #ff9800;} /* Orange */
.danger {background-color: #f44336;} /* Red */
.other {background-color: #e7e7e7; color: black;} /* Gray */
.javascript{background-color: #f2dd2d; color:black;}
.webservice{background-color: #f98113;}
.vue{background-color: #41b883;}
.socket{background-color: #e7e7e7; color: black;}
.typescript{background-color: #187abf; }
.java{background-color: #2f6db8;color: white;}

</style>