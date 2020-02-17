<template>
  <div class="navbar">
    <div id="logo">
		<a href="/">Raphael Bauvin</a>
		<span>Web Apps & Games Developer</span>
	</div>
	<nav>
		<ul>
            <li class="home" ><router-link :to="'/'">Accueil</router-link></li>
            <li class="experience " ><router-link :to="'/Experience'">Mon Expérience</router-link></li>
            <li class="portfolio " ><router-link :to="'/Realisation'">Mes Réalisations</router-link></li>
		</ul>
	</nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props:{
      actualPage:String
  },
  computed:{
      active(){
          if(this.actualPage == 'home')
            document.querySelector('.home').styles.backgroundColor='#0768a0';
          //if(this.actualPage == 'expe')

          //if(this.actualPage == 'real')
          return this.actualPage;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    display: block;
    height: 80px;
    padding: 40px 0 25px;
}

nav {
    width: 430px;
    float: left;
    width: auto;
    margin-right: -4px;
}

#logo span{
    background-color: white;
    mix-blend-mode: screen; 
    color: black;
    font-weight: bold;
    padding: 4px;
}

#logo a {
    display: block;
    text-decoration: none;
    color: #ffffff;
    font-size: 44px;
    font-style : arial;
}

#logo {
    width: 350px;
    float: left;
    margin: 0 12px 10px 12px;
    text-shadow: 0px 5px 5px rgb(65, 65, 65);
    color: #ffffff;
}


nav ul {
    margin: 0;
    padding: 12px 0 0 0;
    list-style-type: none;
    position: relative;
    z-index: 10;
}

nav ul li {
    margin: 5px 0 0 8px;
    float: left;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
}

nav ul li a{
display: block;
padding: 16px 12px;
text-decoration: none;
color: black;
background-color: #e7e7e7;
border-radius: 5px;
font-size : 16px;
}

nav ul li a:hover{
    background-color: #ffffff;
}

/*
header nav ul li#activeA a{
    background-color: #0768a0; 
    color: rgb(255, 255, 255);
}

header nav ul li#activeE a{
    background-color: #04912e; 
    color: rgb(255, 255, 255);
}

header nav ul li#activeR a{
    background-color: #c76912; 
    color: rgb(255, 255, 255);
}*/

</style>