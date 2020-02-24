<template>
  <div class="navbar">
    <div id="logo">
		<a href="/">Raphael Bauvin</a>
		<span>Web Apps & Games Developer</span>
	</div>
	<nav>
		<ul>
            <li id='activeA'><a href="/" v-on:click="change('Home',$event)">About me</a></li>
            <li id='activeE'><a href="/" v-on:click="change('Expe',$event)">Mon Expérience</a></li>
            <li id='activeR'><a href="/" v-on:click="change('Real',$event)">Mes Réalisations</a></li>
		</ul>
	</nav>
    
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data:function(){
      return{

      }
  },
  methods:{
    change(page,event){
        event.preventDefault();
        this.$emit('changePage',page);
        document.querySelector('#activeA a').style.backgroundColor = '#e7e7e7';
        document.querySelector('#activeA a').style.color = 'black'; 
        document.querySelector('#activeE a').style.backgroundColor = '#e7e7e7';
        document.querySelector('#activeE a').style.color = 'black'; 
        document.querySelector('#activeR a').style.backgroundColor = '#e7e7e7';
        document.querySelector('#activeR a').style.color = 'black'; 
        if(page == "Real"){
        let path = require('@/assets/realisations.png');
        document.querySelector('body').style.background= `#f8f8f8 url('${path}') center -80px no-repeat`;
        document.querySelector('#activeR a').style.backgroundColor = '#c76912';
        document.querySelector('#activeR a').style.color = 'white'; 
        } else if(page == 'Expe'){ 
        let path = require('@/assets/Berdeghem_V6.png');
        document.querySelector('body').style.background= `#f8f8f8 url('${path}') center -80px no-repeat`;
        document.querySelector('#activeE a').style.backgroundColor = '#04912e';
        document.querySelector('#activeE a').style.color = 'white'; 
        } else {
        let path = require('@/assets/home_background.png');
        document.querySelector('body').style.background= `#f8f8f8 url('${path}') center -80px no-repeat`;
        document.querySelector('#activeA a').style.backgroundColor = '#0768a0';
        document.querySelector('#activeA a').style.color = 'white'; 
        }   
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

#activeA a{
    background-color :#0768a0;
    color:white;
}

</style>