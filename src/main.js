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
    mode: 'history',
    linkExactActiveClass: 'is-active',
    path:'/',
    component: HomeP,
  },
  {
    path:'/Realisations/:link?',
    component:RealisationP
  }]
})

// STARTING APP PART
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
/*
window.onclick = function(){
alert(document.querySelector('#app').clientWidth);
};*/
