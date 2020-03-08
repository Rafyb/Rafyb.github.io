<template>
  <div id="RealisationP">
    <headerbar/>
    <sidebar/>
    <contentpage :link="link"/>
    
  </div>
</template>

<script>
import headerbar from '../components_real/header.vue';
import sidebar from '../components_real/sidebar.vue';
import contentpage from '../components_real/content.vue';
export default {
  name: 'RealisationP',
  components:{
    headerbar,
    sidebar,
    contentpage
  },
  computed: {
        link() {
            console.log(document.querySelector('.icon'));
            let json = "Table des réalisations";
            if( this.$route && this.$route.params && this.$route.params.link){
              json = this.$route.params.link;
            } 
            if(document.querySelector('.icon') && document.querySelector('.icon').clientWidth > 0)document.querySelector(".sidenav").style.display ="none";
            return json;
        }
  },
}
</script>

<style scoped>
  #RealisationP{
    background : #303030;
    width:100%;
    height: 100%;
  }

</style>