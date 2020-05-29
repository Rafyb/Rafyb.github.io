<template>
  <div class="header">

    <nav>
		<ul>
            <li><a href="#home">About me</a></li>
            <li><a href="#experience">Mon Expérience</a></li>
            <li><a href="#realisation" >Mes Réalisations</a></li>
		</ul>
	</nav>
    
  </div>
</template>

<script>
export default {
  name: 'headerbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (min-width: 799px){
  nav ul li a{
    font-size : 1em;
  }
}

@media screen and (max-width: 799px){
  nav ul li a{
    font-size : 0.8em;;
  }
}

.header {
    background-color:rgb(0, 0, 0); 
    color:rgb(255, 255, 255);
    text-align: right;
    position: sticky;
    top:0;
    z-index: 5;
    height: 5%;
}

nav ul {
    margin: 0;
    padding: 12px 0 0 0;
    list-style-type: none;
}

nav ul li {
    margin: 5px 0 0 8px;
    display: inline-block;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
}

nav ul li a{
    display: block;
    padding: 16px 12px;
    text-decoration: none;
    color: white;
}

nav ul li a:hover{
    border-bottom: 5px solid white;
}


</style>