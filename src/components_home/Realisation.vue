<template>
  <div class="realisation">
    <section class="container">
      <h1>Accéder à mes réalisations</h1>
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

/* Make the image responsive */
.container img {
  width: 770px;
  height: auto;
  opacity : 0.7;
}

/* Style the button and place it in the middle of the container/image */
.container .btn{
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 26px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
}

.container .btn:hover {
  background-color: rgb(138, 138, 138);
} 

</style>
