import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import utils from '../assets/js/utils.js'

import Index from '@/pages/index/index'
import User from '@/pages/user/user'
import Msg from '@/pages/msg/msg'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'
import List from '@/pages/list/list'
import Detail from '@/pages/detail/detail'

import MyInfo from '@/pages/user/my-info/my-info'
import OrderList from '@/pages/user/order-list/order-list'
import About from '@/pages/user/about/about'
import PassUpdate from '@/pages/user/pass-update/pass-update'

Vue.use(Router)

if(utils.getItem('token')){
  store.state.token = utils.getItem('token')
}
const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/user/my-info',
      name: 'User',
      meta: {
        requireAuth: true, // 需要登录页面
      },
      component: User,
      children:[
        {
          path: "/user/my-info",
          component: MyInfo
        },
        {
          path: "/user/order-list",
          component: OrderList 
        },
        {
          path: "/about",
          component: About 
        },
        {
          path: "/user/pass-update",
          component: PassUpdate
        }
      ]
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      meta: {
        title: '商品列表'
      },
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      meta: {
        title: '商品详情'
      },
      component: Detail
    }
  ]
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