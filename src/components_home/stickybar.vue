<template>
    <div class="icon-bar">
            <a href="#" class="youtube" v-on:click="clochette"><i class="fa fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/rapha%C3%ABl-bauvin-b6911a151/" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="https://github.com/Rafyb" class="github"><i class="fa fa-github"></i></a>
    </div>
</template>

<script>

export default {
  name: 'stickybar',
  methods:{
      clochette(){
          if(document.querySelector('#mydiv').style.display == "block") document.querySelector('#mydiv').style.display = "none";
          else {
            document.querySelector('#mydiv').style.display = "block";
            Document.dragElement();
          }
      }
  }
}
</script>

<style>
/* -- Style the social icon bar -- */

.icon-bar {
    position: fixed;
    bottom: 5px;
    right: 5px;
}

.icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
}
  
.icon-bar a:hover {
    background-color: #000;
}
  
.facebook {
    background: #3B5998;
    color: white;
}
  
.twitter {
    background: #55ACEE;
    color: white;
}
  
.google {
    background: #dd4b39;
    color: white;
}
  
.linkedin {
    background: #007bb5;
    color: white;
}
  
.youtube {
    background: #bb0000;
    color: white;
}

.github {
      background: #24292e;
      color: white;
}
</style>