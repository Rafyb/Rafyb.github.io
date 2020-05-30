<template>
  <div class="slideshow-container">
    <div class="mySlides fade">
        <div class="numbertext">{{this.currentId}} / {{length}}</div>
        <img style="width:100%" :src="currentImg">
    </div>
    <a class="prev" v-on:click="plusSlides(-1)"> &#10094;</a>
    <a class="next" v-on:click="plusSlides(1)">  &#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  props:{
      liste:Array,
      length:Number
  },
  data:function(){
      return{
          currentId:0
      }
  },
  methods:{
      plusSlides(valeur){
          if( this.currentId + valeur < 0 ){
              this.currentId = this.length - 1;
          } else if( this.currentId + valeur >= this.length){
              this.currentId = 0;
          } else {
            this.currentId += valeur;
          }
      }
  },
  computed:{
      currentImg(){
          return this.liste[this.currentId];
      }
  }
}
</script>

<style scoped>
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 90%;
  position: relative;
  margin: auto;
}

.slideshow-container img{
    width:60%;
    box-shadow: 10px 10px 5px grey;
}


/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
background-color: rgba(116, 116, 116, 0.8);
}

/* Position the "next button" to the right */
.next {
  right: -5%;
  border-radius: 0 3px 3px 0;
}

.prev{
  left: -5%;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}


/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}


@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>