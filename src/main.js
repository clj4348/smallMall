// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// 样式初始化
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/layout.styl'
import './assets/css/reset.css'
import utils from './assets/js/utils.js'
import { Carousel, CarouselItem,Pagination} from 'element-ui'
import axios from './assets/js/http.js'
Vue.prototype.axios = axios
Vue.prototype.utils = utils

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
