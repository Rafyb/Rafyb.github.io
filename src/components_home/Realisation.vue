<template>
  <div class="realisation">
    <section id="realisation">
      <h1>Accéder à mes réalisations</h1>
    </section>
    <section class="container">
      <img src="@/assets/realisations_access.png" alt="realisation_page">
      <router-link to="/Realisations/" class="btn">Entrer</router-link>
    </section>
  </div> 
</template>

<script>
export default {
  name: 'Realisation',
  components:{
    
  },
  data:function() {
    return{
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  position: relative;
  width: 100%;
}

/* Make the image responsive */
.container img {
  width: 100%;
  height: auto;
  opacity : 0.8;
}

.container .btn{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgb(34, 34, 34);
  color: white;
  font-size: 24px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
}

.container .btn:hover {
  background-color: rgb(138, 138, 138);
} 

/* Style the button and place it in the middle of the container/image */

#realisation{
  background-color: #c76912;
  color: white;
  padding:2%;
}


</style>
