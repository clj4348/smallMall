import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
import utils from '../assets/js/utils.js'
import axios from 'axios'

import Index from '@/pages/index/index'
import User from '@/pages/user/user'
import Msg from '@/pages/msg/msg'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'
import List from '@/pages/list/list'
import Detail from '@/pages/detail/detail'
import Cart from '@/pages/cart/cart'

import MyInfo from '@/pages/user/my-info/my-info'
import OrderList from '@/pages/user/order-list/order-list'
import About from '@/pages/user/about/about'
import PassUpdate from '@/pages/user/pass-update/pass-update'
import InfoUpdate from '@/pages/user/info-update/info-update'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: '首页',
    component: Index
  }, {
    path: '/user/my-info',
    name: '个人中心',
    meta: {
      requireAuth: true, // 需要登录页面
    },
    component: User,
    children: [{
      path: '/user/my-info',
      name: '个人中心',
      meta: {
        requireAuth: true, // 需要登录页面
      },
      component: MyInfo
    }, {
      path: "/user/order-list",
      name: "我的订单",
      meta: {
        requireAuth: true, // 需要登录页面
      },
      component: OrderList
    }, {
      path: "/about",
      name: "关于商城",
      component: About
    }, {
      path: "/user/pass-update",
      name: "修改密码",
      meta: {
        requireAuth: true, // 需要登录页面
      },
      component: PassUpdate
    }, {
      path: "/user/info-update",
      name: "修改个人信息",
      meta: {
        requireAuth: true, // 需要登录页面
      },
      component: InfoUpdate
    }]
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/list',
    name: 'List',
    meta: {
      title: '商品列表'
    },
    component: List
  }, {
    path: '/detail',
    name: '商品详情',
    component: Detail
  }, {
    path: '/cart',
    name: '我的购物车',
    meta: {
      requireAuth: true,
    },
    component: Cart
  }]
})
// 登陆拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullpath
        }
      })
    }
  } else {
    next()
  }
})

export default router