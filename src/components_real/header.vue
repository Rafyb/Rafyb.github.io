<template>
  <div id="header">
    <span id="long"><a href="/">Raphael Bauvin</a> > Réalisations</span>
    <span id="short"><a href="/">Raphael Bauvin</a></span>
    <button href="" class="icon" v-on:click="menu">
        <i class="fa fa-bars"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'headerbar',
  methods:{
      menu(){
          if(document.querySelector(".sidenav").style.display =="block") document.querySelector(".sidenav").style.display ="none";
          else document.querySelector(".sidenav").style.display ="block";
      }
  }
}
</script>

<style scoped>
   #short{
        display: none;
   }
  #header{
      padding: 15px;
      background-color: #303030;
      position: fixed;
      top: 0;
      width: 100%;
  }
  span, #second {
    font-size: 2em;
    font-weight: bold;
    color: white;
  }
  a {
    text-decoration: none;
    background-color: #ffffff;
    padding: 0px;
    color:rgb(46, 46, 46);
    text-shadow: 0px 2px 2px rgb(65, 65, 65);
  }
  button{
    border: 0;
    position: fixed;
    right: 10px;
    top: 10px;
    background-color:#303030;
    color: white;
  }
  .icon{
      font-size: 2em;
      display: none;
  }
  @media screen and (max-width: 900px) {
    .icon {
        display: block;
    }
    #long{
        display: none;
    }
    #short{
        display: block;
    }
  }
  
</style>