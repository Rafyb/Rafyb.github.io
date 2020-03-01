<template>
  <div class="footer">
    Made with <img width="16px" :src="require('@/assets/logo.png')"/>  /  Hosted by <img width="20px" :src="require('@/assets/firebase.png')"/>
    
  </div>
</template>

<script>
export default {
  name: 'footerbar',
  data:function(){
      return{

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
    display: block;
    background-color:rgb(48, 48, 48); 
    padding: 4%;
    text-align: center;
    margin-top: 7%;
    color:rgb(207, 207, 207);
    font-size: 20px;
}


</style>