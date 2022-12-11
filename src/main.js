import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import request from "@/utils/request";

// use axios to jump through frontend and backend
import axios from "axios";
//mount axios
Vue.prototype.$http = axios
import store from './store';
Vue.use(store);

//Setting the access path
axios.defaults.baseURL = "http://localhost:3000"
Vue.prototype.Request = request
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
