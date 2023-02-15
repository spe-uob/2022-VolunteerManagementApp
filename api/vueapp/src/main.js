import Vue from 'vue'
import App from './App.vue'
import actionTable from './components/actionTable'
import All_Activity from './components/All_Activity'
import referralTable from './components/referralTable'
import Start_Call from './components/Start_Call'
import residentPage from './components/residentPage'
import VueRouter from 'vue-router'
import { loremIpsum } from "lorem-ipsum"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Object.defineProperty(Vue.prototype, '$lorem', { value: loremIpsum });
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/vue-test', component: App},
  { path: '/Actions', component: actionTable},
  { path: '/Referrals', component: referralTable},
  { path: '/All Activity', component: All_Activity},
  { path: '/Start_Call', component: Start_Call},
  { path: '/add/:id', component: residentPage, name: 'add'}
]

const router = new VueRouter({
  routes
})
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
