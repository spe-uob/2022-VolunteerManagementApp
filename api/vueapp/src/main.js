import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import { loremIpsum } from "lorem-ipsum"
import Actions from "@/components/Actions";
import All_Activity from "@/components/All_Activity";
import myReferrals from "@/components/myReferrals";


Object.defineProperty(Vue.prototype, '$lorem', { value: loremIpsum });
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  { path: '/vue-test', component: App},
  {path:'/Actions',component: Actions},
  {path:'/allActivity',component: All_Activity},
  {path:'/referrals',component: myReferrals}


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
