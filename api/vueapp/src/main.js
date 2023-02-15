import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import { loremIpsum } from "lorem-ipsum"
import myActions from "@/components/myActions";
import All_Activity from "@/components/All_Activity";
import myReferrals from "@/components/myReferrals";
import myOrganisation from "@/components/myOrganisation";
import myVolunteers from "@/components/MyVolunteers";
import myResident from "@/components/MyResident";


Object.defineProperty(Vue.prototype, '$lorem', { value: loremIpsum });
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  { path: '/vue-test', component: App},
  {path:'/Actions',component: myActions},
  {path:'/allActivity',component: All_Activity},
  {path:'/referrals',component: myReferrals},
  {path:'/organisation',component: myOrganisation},
  {path: '/volunteers',component: myVolunteers},
  {path: '/residents',component: myResident}


]

const router = new VueRouter({
  routes
})
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')

  // new Vue({
  //     router,
  //     render: h => h(one)
  //   }).$mount('#one')

  // new Vue({
  //     router,
  //     render: h => h(One),
  // }).$mount('#app')
