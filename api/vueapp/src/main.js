import Vue from 'vue'
import App from './App.vue'
//import App from './One.vue'
import one_one from './components/one_one.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import { loremIpsum } from "lorem-ipsum"
Object.defineProperty(Vue.prototype, '$lorem', { value: loremIpsum });
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  { path: '/one_one', component: one_one },
  { path: '/vue-test', component: App},
  { path: '/one_two', component: one_one}
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