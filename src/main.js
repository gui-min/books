import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './assets/js/router'
import Mint from 'mint-ui'
import axios from 'axios'
import '../iconfont/iconfont.css'
import "../node_modules/mint-ui/lib/style.css"
Vue.use(VueRouter)
Vue.use(Mint)
Vue.prototype.$http = axios

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Vuex from 'vuex'
Vue.use(Vuex)
import store from './assets/js/data.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
