import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import routes from './router' 

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes
})

// 登陆拦截
router.beforeEach((to, from, next)=> {
  if(to.meta.requireAuth){
    if(store.state.token) {
      next()
    }else {
      next({
        path:'/login',
        query:{redirect: to.fullpath}
      })
    }
  }else{
    next()
  }
})

export default router