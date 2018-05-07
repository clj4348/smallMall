<template>
  <div>
    <nav-simple></nav-simple>
    <div class="page-wrap">
    <div class="w">
      <div class="user-con">
        <div class="user-title">用户登录</div>
        <div class="user-box">
          <div class="error-item">
            <i class="fa fa-minus-circle error-icon"></i>
            <p class="err-msg">Error</p>
          </div>
          <div class="user-item">
            <label for="username" class="user-label">
              <i class="fa fa-user"></i>
            </label>
            <input class="user-content" id="username" placeholder="请输入用户名" autocomplete="off" type="text" name="">
          </div>
          <div class="user-item">
            <label for="password" class="user-label">
              <i class="fa fa-lock"></i>
            </label>
            <input type="password" class="user-content" id="password" placeholder="请输入密码" autocomplete="off" name="">
          </div>
          <a class="btn btn-submit" id="submit">登录</a>
          <div class="link-item">
            <router-link class="link" to="./user-pass-reset.html">忘记密码</router-link>
            <router-link class="link" to="/register">免费注册</router-link>
          </div>
        </div>
      </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
import axios from  'axios'
import NavSimple from '../common/navSimple'
import FooterNav from '../common/footer'
export default{
  name: 'Login',
  components: {
    NavSimple,
    FooterNav
  },
  data () {
    return {
      userInfo: {
        loginName: '',
        password: '',
      }
    }
  },
  methods: {
    //字段的验证，支持非空、手机、邮箱
    validate : function(value, type){
      //非空验证
      if('require' === type){
        return !!value;
      }
      //手机验证
      if('phone' === type){
        return /^1\d{10}$/.test(value);
      }
      //邮箱格式验证
      if('email' === type){
        return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
/* 最外层容器 */
.page-wrap
  padding: 40px 0
  background: #e72955
  
.user-con{
  position: relative;
  margin:0 auto;
  width: 400px;
  background: #fff;
}

.user-con .user-title{
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
  color: #666;
}

.user-con .user-box{
  padding: 20px ;
}

/* 错误提示框 */
.user-con .user-box .error-item{
  position: relative;
  padding: 4px 0 4px 40px;
  margin-bottom: 10px;
  border:1px solid red;
  color: red;
  background: #fde9e9;
  display: none;
}

/* 错误图标 */
.user-con .user-box .error-icon{
  position: absolute;
  left: 14px;
  top: 50%;
  font-size: 14px;
  margin-top: -7px;
}

.user-con .user-item{
  position: relative;
  margin-bottom: 20px;
}
.user-con .user-item .user-label{
  position: absolute;
  left: 1px;
  top: 1px;
  bottom: 1px;
  width: 40px;
  line-height: 36px;
  background: #f3f3f3;
  font-size: 28px;
  color: #d3d3d3;
  text-align: center;
  border-right: 1px solid #bdbdbd;
}

.user-con .user-item .user-content{
  padding: 10px 0 10px 50px;
  width: 308px;
  height: 18px;
  line-height: 18px;
  font-size: 15px;
  border: 1px solid #bdbdbd;
}

.user-con .btn-submit{
  width: 100%;
  padding: 2px 0;
  text-align: center;
  font-size: 20px;
}

/* 跳转链接 */
.user-con .link-item{
  text-align: right;
  margin-top: 10px;
}

.user-con .link-item .link{
  margin-left: 10px;
  color: #999;
}
</style>
