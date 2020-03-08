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
    background-color: #303030;
}

body{
  margin:0;
}

/* -- Style of the labels -- */

.label {
    color: white;
    padding: 4px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    margin-right: 5px;
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

</style>