import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home  from './components/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter )

const router = new VueRouter({
  routes:[{
    path:'/',
    component:Home
  },
  {
    path:'/Experience',
    component:Home
  },
  {
    path:'/Realisation',
    component:Home
  }]
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')