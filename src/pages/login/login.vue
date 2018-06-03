<template>
  <div>
    <div class="page-wrap">
    <div class="w">
      <div class="user-con">
        <div class="user-title">用户登录</div>
        <div class="user-box">
          <div class="error-item" v-if="userErr !== ''">
            <i class="fa fa-minus-circle error-icon"></i>
            <p class="err-msg">{{userErr}}</p>
          </div>
          <div class="user-item">
            <label for="username" class="user-label">
              <i class="fa fa-user"></i>
            </label>
            <input class="user-content"
              @focus="errIint"
              placeholder="请输入用户名" 
              autocomplete="off"
              v-model="userInfo.username" 
              type="text">
          </div>
          <div class="user-item">
            <label for="password" class="user-label">
              <i class="fa fa-lock"></i>
            </label>
            <input @focus="errIint"
              class="user-content"
              type="password"
              id="password"
              v-model="userInfo.password"
              placeholder="请输入密码"
              autocomplete="off"
              name="">
          </div>
          <a class="btn btn-submit" @click="login">登录</a>
          <div class="link-item">
            <router-link class="link" to="./user-pass-reset.html">忘记密码</router-link>
            <router-link class="link" to="/register">免费注册</router-link>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from  'axios'
import Qs from 'qs'
import store from '../../store/index.js'

export default{
  name: 'Login',

  data () {
    return {
      userErr: '',
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 用户名
    isUsername () {
      if(this.userInfo.username == '' ){
        this.userErr = '用户名不能为空'
        return false
      }
      this.userErr =  '' 
      return true
    },
     // 输入密码
    isPassword () {
      if(this.userInfo.password == '' ){
        this.userErr = '密码不能为空'
        return false
      }
      this.userErr =  '' 
      return true
    },
    errIint(){
      this.userErr = ''
    },
    login () {
      if(!this.isUsername()) return
      if(!this.isPassword()) return
      // 校验用户名是否存在
      const userData = Qs.stringify(this.userInfo)
      axios.post('/api/user/login.do',userData,{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
      .then((res) => {
        const status = res.data.status
        if(status === 0){
          this.$store.commit('changeToken',res.data) // 赋值给vuex中的token
          this.$store.commit('changeUserMsg',res.data) // 赋值给vuex中的token
          this.$router.go(-1) //返回上一页
        }else if(status === 1){
          this.userErr = res.data.msg
          return false
        }
      })
      .catch((err) => {
        console.log('请求数据开小差了')
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
/* 最外层容器 */
.page-wrap
  padding: 40px 0
  background: #e72955
  
.user-con
  position: relative
  margin:0 auto
  width: 400px
  background: #fff
  .user-title
    text-align: center
    padding: 10px 0
    border-bottom: 1px solid #ddd
    font-size: 18px
    font-weight: bold
    color: #666
  .user-box
    padding: 20px 
/* 错误提示框 */
    .error-item
      position: relative
      padding: 4px 0 4px 40px
      margin-bottom: 10px
      border:1px solid red
      color: red
      background: #fde9e9
    /* 错误图标 */
    .error-icon
      position: absolute
      left: 14px
      top: 50%
      font-size: 14px
      margin-top: -7px
  .user-item
    position: relative
    margin-bottom: 20px
    .user-label
      position: absolute
      left: 1px
      top: 1px
      bottom: 1px
      width: 40px
      line-height: 36px
      background: #f3f3f3
      font-size: 28px
      color: #d3d3d3
      text-align: center
      border-right: 1px solid #bdbdbd
    .user-content
      padding: 10px 0 10px 50px
      width: 308px
      height: 18px
      line-height: 18px
      font-size: 15px
      border: 1px solid #bdbdbd
.btn-submit
  width: 100%
  padding: 2px 0
  text-align: center
  font-size: 20px
/* 跳转链接 */
.link-item
  text-align: right
  margin-top: 10px
  .link
    margin-left: 10px
    color: #999

</style>
