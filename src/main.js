// IMPORT PART
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeP  from './pages/HomeP.vue'
import RealisationP  from './pages/RealisationP.vue'

// ROUTER PART
Vue.config.productionTip = false

Vue.use(VueRouter )

const router = new VueRouter({
  routes:[{
    path:'/',
    component: HomeP,
  },
  {
    path:'/Realisation/',
    component:RealisationP
  }]
})

// STARTING APP PART
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')

// WIP PAGE NOT RESPONSIVE
window.onload =  function(){
  if( window.devicePixelRatio > 2){
    let path = require("@/assets/workingOn.gif");
    document.querySelector('#app').innerHTML = `
      <h1> Cette page n'est pas encore disponible sur smartphone </h1>
      <img src="${path}" style=" margin-left: auto; margin-right: auto; display:block" >
    `;
    document.querySelector('body').style.background ='#f8f8f8';
  }
};