// IMPORT PART
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Experience  from './components/Experience.vue'
import Realisation  from './components/Realisation.vue'
import Home  from './components/Home.vue'
import HomeP  from './pages/HomeP.vue'
import RealisationP  from './pages/RealisationP.vue'

// ROUTER PART
Vue.config.productionTip = false

Vue.use(VueRouter )

const router = new VueRouter({
  routes:[{
    path:'/',
    component: HomeP,
    children:[{
        path: '',
        component:Home,
      },
      {
        path: 'Experience',
        component:Experience
      },
      {
        path: 'Realisation',
        component:Realisation
      }
    ]
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
