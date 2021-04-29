<template>
  <div class="student">
        <h1>Formations</h1>
        <timeline :timeline="timeline"/>
        
  </div>
</template>

<script>
import timeline from './timeline.vue';
import json from '../json/home_timeline.json'
export default {
  name: 'Home',
  components:{
    timeline
  },
  data:function() {
    return{
      
    }
  },
  computed:{
    timeline(){
      console.log(json);
      return json.timeline;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.student{
    background-color: #ffffff;
    height: max-content;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
}

.student>h1{
    color: rgb(42, 42, 42);
}

  ul {
    text-align: center;
    list-style: none;
    padding: 0;
	}
	ul li{
		display: inline;
    margin:10px;
	}

@media screen and (min-width: 799px){
  img{
    width: 100px;
  }
}

@media screen and (max-width: 799px){
  img{
    width: 80px;
  }
}

  img{
    border-radius: 10px;
    filter: grayscale(100%);
    margin-bottom:5px ;
  }

  img:hover{
    filter: grayscale(0%);
  }

  h2{
    margin-top:20px;
    font-size: 1.3em;
  }
</style>
