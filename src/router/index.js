import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index/index'
import My from '@/pages/my/my'
import Msg from '@/pages/msg/msg'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/my',
      name: 'My',
      meta: {
        requireAuth: true, // 需要登录页面
      },
      component: My
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },

  ]
})
