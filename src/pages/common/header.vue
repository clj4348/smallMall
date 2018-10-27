<template>
  <div>
    <div class="nav">
      <div class="w">
        <div class="user-info">
          <span class="user not-login" v-if="this.user.status == 1">
            <router-link to="/login" class="hear-link">登录</router-link>
            <span class="hr">|</span>
            <router-link to="/register" class="hear-link">注册</router-link>
          </span>
          <span class="user login" v-else>
            <span class="link-text">
              欢迎，
              <span class="username">{{this.user.username}}</span>
              </span>
            <span class="hear-link" @click="onLogout"> 退出</span>
          </span>
        </div>
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/cart" class="hear-link">
              <i class="fa fa-shopping-cart"></i>
              购物车 <span class="cart-count" v-if="count != 0">({{this.count}})</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="hear-link" to="/user/order-list">我的订单</router-link>
          </li>
          <li class="nav-item">
            <router-link class="hear-link" to="/user/my-info">我的MMall</router-link>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="hear-link">关于MMall</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getUserInfo, getCartProductCount, logout } from 'service/userInfo.js' 
import { mapState } from 'vuex' 
  export default{
    name: 'Header',
    data () {
      return {
        userStatus: 1,
        username: '',
      }
    },
    computed:{
      ...mapState({
        user: 'userMsg',
        count: 'cartCount'
      })
    },
    created(){
      // 获取用户信息
      getUserInfo({}).then((res) => {
        console.log(res.data)
        if(res.status === 0){
          this.$store.commit('changeUserMsg',res.data)
          this.$store.commit('changeToken',res.data)
        } else {
          this.$store.commit('removeUserMsg')
          this.$store.commit('changeToken', null)
        }
      })
      // 获取购物车数量
      getCartProductCount().then((res) => {
        this.$store.commit('changeCartCount', res.data)
      })
    },
    methods:{
      // 退出登陆
      onLogout () {
        logout().then((res) => {
          const status = res.data.status
          if(status === 0){
            this.$store.commit('changeToken', null)
            this.$store.commit('removeUserMsg')
            this.$router.push('/login')
          }else if(status === 1){
            alert(res.data.msg)
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../assets/css/varibles.styl'
.nav
  background: $heard-bg
  height: 30px
  line-height: 30px
  .user
    float: left
    .link-text
      color: #b0b0b0
    .login
      display: none
  .nav-list
    float: right
    .nav-item
      display: inline-block
      margin-left: 15px
.hear-link
  color: #b0b0b0
  font-size: $fs-14
  cursor: pointer
  &:hover
    color: #fff
.hr
  position: relative
  top: -1px
  margin: 0 5px
  color: #999
</style>
