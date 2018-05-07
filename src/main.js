// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 样式初始化
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/layout.styl'
import './assets/css/reset.css'
import utils from './assets/js/utils.js'
import { Carousel, CarouselItem} from 'element-ui'

Vue.prototype.utils = utils
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
