<template>
  <div>
    <div class="nav">
      <div class="w">
        <div class="user-info">
          <span class="user not-login" v-if="userStatus == 1">
            <router-link to="/login" class="link"  target="blank">登录</router-link>
            <router-link to="/register" class="link js-register">注册</router-link>
          </span>
          <span class="user login" v-else>
            <span class="link-text">
              欢迎，
              <span class="username">{{username}}</span>
              </span>
            <span class="link js-logout"> 退出</span>
          </span>
        </div>
        <ul class="nav-list">
          <li class="nav-item">
            <a href="javascript:;" class="link">
              <i class="fa fa-shopping-cart"></i>
              购物车(<span class="cart-count">0</span>)
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/my" class="link">我的订单</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="link">我的MMall</router-link>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="link">关于MMall</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios' 
  export default{
    name: 'Header',
    data () {
      return {
        userStatus: 1,
        username: '',
      }
    },
    methods:{
      userInfo () {
        axios.post('/api/user/get_user_info.do')
        .then((res) => {
          if(res.data.status === 0){
            this.userStatus = res.data.status
            this.username = res.data.data.username
          }
        })
        .catch((err) => {

        })
      }
    },
    mounted () {
      this.userInfo()
    }
  }
</script>

<style lang="stylus" scoped>
.nav
  background: #eee
  height: 30px
  line-height: 30px
  .user
    float: left
    .login
      display: none
      .link
        margin-right: 5px
  .nav-list
    float: right
    .nav-item
      display: inline-block
      margin-left: 5px
</style>
