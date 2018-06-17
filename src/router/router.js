
import User from '@/pages/user/user'
import Msg from '@/pages/msg/msg'
import Login from '@/pages/login/login'
import Register from '@/pages/register/register'


import Payment from '@/pages/payment/payment'

import MyInfo from '@/pages/user/my-info/my-info'

import About from '@/pages/user/about/about'
import PassUpdate from '@/pages/user/pass-update/pass-update'
import InfoUpdate from '@/pages/user/info-update/info-update'

export default [
    {
      path: '/',
      name: '首页',
      component: () => import('@/pages/index/index')
    }, {
      path: '/user/my-info',
      name: '个人中心',
      meta: {
        requireAuth: true, // 需要登录页面
      },
      component: User,
      children:[
        {
          path: "/user/order-list",
          name: "我的订单",
          meta: {
            requireAuth: true, // 需要登录页面
          },
          component: () => import('@/pages/user/order-list/order-list')
        },
        {
          path: "/about",
          name: "关于商城",
          component: About 
        },
        {
          path: "/user/pass-update",
          name: "修改密码",
          meta: {
            requireAuth: true, // 需要登录页面
          },
          component: PassUpdate
        },
        {
          path: "/user/info-update",
          name: "修改个人信息",
          meta: {
            requireAuth: true, // 需要登录页面
          },
          component: InfoUpdate
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
      path: '/forget-password',
      name: '忘记密码',
      component: () => import('@/pages/forget-password/forget-password')
    },
    {
      path: '/list',
      name: 'List',
      meta: {
        title: '商品列表'
      },
      component: () => import('@/pages/list/list')
    },
    {
      path: '/detail',
      name: '商品详情',
      component: () => import('@/pages/detail/detail')
    },
    {
      path: '/cart',
      name: '我的购物车',
      meta: {
        requireAuth: true,
      },
      component: () => import('@/pages/cart/cart')
    },
    {
      path: '/order',
      name: '订单确认',
      meta: {
        requireAuth: true,
      },
      component: () => import('@/pages/order/order')
    },
    {
      path: '/payment',
      name: '订单支付',
      meta: {
        requireAuth: true,
      },
      component: Payment
    }
 
  ]
