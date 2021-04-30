<template>
  <div id="container-bottom">
        <span class="sub-title">Informations</span>
        <span id="big" class="sub-title"><a v-on:click=big>{{taille}}</a></span>
        <div class="tabler">
            <div class="content-box">
                <div class = "box">
                <h1>A propos</h1>
                <p>
                    Contact : raphaelbauvin@yahoo.fr
                </p>
                </div>
                <div class = "box">
                <h1>Compétences</h1>
                <h2 >  Langages utilisés</h2>
                    <ul>
                    <li><img :src="require('@/assets/java.png')"/></li>
                    <li><img :src="require('@/assets/js.png')"/></li>
                    <li><img :src="require('@/assets/csharp.png')"/></li>
                    <li><img :src="require('@/assets/c.png')"/></li>
                    <li><img :src="require('@/assets/html.png')"/></li>
                    <li><img :src="require('@/assets/sql.png')"/></li>
                    </ul>

                <h2 >  Outils/Framework utilisés</h2>
                    <ul>
                    <li><img :src="require('@/assets/git.png')"/></li>
                    <li><img :src="require('@/assets/azure.png')"/></li>
                    <li><img :src="require('@/assets/vue.png')"/></li>
                    <li><img :src="require('@/assets/phaser2.png')"/></li>
                    <li><img :src="require('@/assets/unity.png')"/></li>
                    <li><img :src="require('@/assets/android.png')"/></li>
                    </ul>

                    <h2>  Langages déja manipulé</h2>
                    <ul>
                    <li><img :src="require('@/assets/python.png')"/></li>
                    <li><img :src="require('@/assets/typescript.png')"/></li>
                    <li><img :src="require('@/assets/cobol.png')"/></li>
                    <li><img :src="require('@/assets/jsp.png')"/></li>
                    <li><img :src="require('@/assets/bash.png')"/></li>
                    </ul>
                </div>
                <student />
            </div>
            
            <experience id="experience" class="content-box"/>
        </div>
      
    <!--<router-view/>-->
  </div>
</template>

<script>
import student from '../components_home/student.vue';
import experience from '../components_home/Experience.vue';

export default {
  name: 'tabler',
    components:{
        student,
        experience
    },
        data:function(){
        return{
            taille:"Agrandir",
            changed:false
        }
    },
    methods:{
      big(event){
          event.preventDefault();
          let doc = document.querySelector('#container-bottom');
          if(this.changed)
          {
                this.taille = "Agrandir";
                doc.style.zIndex = 0;
                doc.style.position = "relative";
                doc.style.top = "-15px";
                doc.style.height = "420px";
                doc.style.backgroundColor = "none";
          }
          else
          {
              this.taille = "Réduire";
              doc.style.zIndex = 10;
              doc.style.width = "100%";
              doc.style.height = "100%";
              doc.style.position = "absolute";
              doc.style.top = "20px";
              doc.style.backgroundColor = "#36363677";
          }
          this.changed = !this.changed;

          /*
          if(document.querySelector('#mydiv').style.display == "block") document.querySelector('#mydiv').style.display = "none";
          else {
            document.querySelector('#mydiv').style.display = "block";
            Document.dragElement();
          }
          */
      }
  }
}
</script>

<style>

.box{
    background-color: #ffffff;
    height: max-content;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
}

.box>h1{
    color: rgb(42, 42, 42);
}

#experience{
    width : 80%;
}

@media screen and (min-width: 799px){

    .content-box{
        display: inline-block;
        width: 45%;
    }

    .tabler{
        display: flex;
    }

}

@media screen and (max-width: 799px){

    .content-box{
        display: block;
        width: 100%;
    }
}


.tabler {
    position: relative;
    top:-20px;
    background-color: #0d1117;
    overflow: auto;
    border : 2px solid rgb(59, 59, 59);
    height: 98%;
    margin: 10px;
}
#container-bottom{
    position:relative;
    top:-15px;
    height: 420px;
}
#big{
    background-color: rgb(55, 125, 190);
}
#big:hover{
    background-color: rgb(1, 72, 138);
}

.box ul {
    text-align: center;
    list-style: none;
    padding: 0;
}

.box ul li{
		display: inline;
    margin:10px;
	}

@media screen and (min-width: 799px){
  .box img{
    width: 100px;
  }
}

@media screen and (max-width: 799px){
  .box img{
    width: 80px;
  }
}

.box img{
    border-radius: 10px;
    filter: grayscale(100%);
    margin-bottom:5px ;
  }

.box img:hover{
    filter: grayscale(0%);
  }

.box h2{
    margin-top:20px;
    font-size: 1.3em;
  }

</style>