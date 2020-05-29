<template>
  <div class="footer">
    Made with <img width="16px" :src="require('@/assets/logo.png')"/>  /  Hosted by <img width="20px" :src="require('@/assets/firebase.png')"/> / Contact : <a href="mailto:raphael.bauvin@univ-lille.fr"><i class="fa fa-envelope-o" aria-hidden="true"></i> Mail</a>
    
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
    padding : 30px;
    text-align: center;
    color:rgb(207, 207, 207);
    font-size: 1em;
}

a{
  text-decoration: none;
  color: #cfcfcf;
}


</style>