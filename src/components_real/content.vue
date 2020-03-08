<template>
  <div id="content">
    <div class="type">
        <h1>{{page.title}} ({{this.link}})</h1>
        <iframe v-if="page.video" width="560" height="315" :src="page.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="utils">
            <span>Technologies utilisées : </span><a v-for="label in page.badges" :key="label.text" :class="label.class" :href="label.link">{{label.text}}</a>
        </div>
        <div v-html="page.description"></div>
    </div>
    <a v-if="page.link" class="gitlink github" :href="page.link"><i class="fa fa-github"></i><span> Lien vers le projet </span></a>
  </div>
</template>

<script>
import base from '../json/base.json'
export default {
  name: 'contentpage',
  props:{
      link:String
  },
  computed:{
      page(){
          if(this.link == 'FU') return base;
          return base;
      }
  }
}
</script>

<style scoped>
    #content{
        background-color: white;
        margin-left: 300px;
        height: -webkit-calc(100% - 68px);
        height: -moz-calc(100% - 68px);
        height: calc(100% - 68px);
        margin-top:68px;
        padding: 2%;
    }

    iframe {
        margin: auto;
        display: block;
    }

    .utils{
        margin: 2%;
    }

    .fa-github{
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
    }

    @media screen and (min-width: 1300px) {
        .type {
            display: block;
            width:1000px;
            margin:auto;

        }
    }
</style>