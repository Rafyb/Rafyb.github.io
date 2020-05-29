<template>
  <div id="content">
    <div class="type">
        <h1>{{page.title}}</h1>
        <div class="utils">
            <span>Technologies utilisées : </span><a v-for="label in page.badges" :key="label.text" :class="label.class" :href="label.link">{{label.text}}</a>
        </div>
        <img :src="page.icone"/>
        <div v-html="page.description"></div>
        <h2>Démo et exemples</h2>
        <iframe v-if="page.video" width="560" height="315" :src="page.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <a v-if="page.link" class="gitlink github" :href="page.link"><i class="fa fa-github"></i><span> Lien vers le projet </span></a>
  </div>
</template>

<script>
import base from '../json/base.json'
import QW from '../json/QW.json'
import JGV from '../json/JGV.json'
import A3D from '../json/A3D.json'
import JEM from '../json/JEM.json'
export default {
  name: 'contentpage',
  props:{
      link:String
  },
  computed:{
      page(){
          if(this.link == 'QW') return QW;
          if(this.link == 'JGV') return JGV;
          if(this.link == 'A3D') return A3D;
          if(this.link == 'JEM') return JEM;
          return base;
      }
  }
}
</script>

<style>
    #content{
        background-color: white;
        margin-left: 300px;
        height: -webkit-calc(100% - 68px);
        height: -moz-calc(100% - 68px);
        height: calc(100% - 68px);
        margin-top:68px;
        padding: 2%;
        padding-bottom:70px;
    }

    .type h1{
        border-top: none;
        padding: 0;
        text-align: left;
    }

    .type h2{
        font-size: 1.5em;
        padding-bottom: .3em;
        border-bottom: 1px solid#eaecef;
    }

    .type li{
        padding-top: 10px;
        font-size: 1em;
    }

    iframe {
        margin: auto;
        display: block;
    }

    #content .type img {
        width: 60%;
        margin: auto;
        display: block;
    }

    .utils{
        margin: 2%;
    }

    .utils span{
        padding-bottom:10px ;
    }

    #content .fa-github{
        font-size: 40px;
    }

    .gitlink{
        position: fixed;
        z-index: 10;
        right: 10px;
        bottom: 10px;
        border-radius: 10px;
        border-radius: 90px;
        padding: 5px;
    }

    .gitlink span{
        text-decoration: none;
        color: white;
        padding: 5px 10px 5px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .gitlink:hover{
        background-color: #696c6e;
    }

    .gitlink span, .fa {
        vertical-align: middle;
        display: inline-block;
    }

    @media screen and (max-width: 600px) {
        iframe {
            width: 80%;
        }
        
    }

    @media screen and (max-width: 900px) {
        #content {
            margin-left: 0;
        }
        #content .type img {
            width: 80%;
        }
    }

    @media screen and (min-width: 1300px) {
        #content .type {
            display: block;
            width:1000px;
            margin:auto;

        }
    }
</style>