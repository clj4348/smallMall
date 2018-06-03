<template>
  <div>
    <div class="page-wrap">
      <div class="w">
        <div class="user-con">
          <div class="user-title">用户注册</div>
          <div class="user-box">
            <div class="user-item">
              <label for="username" class="user-label">
                <i class="iconfont fa">&#xe600;</i>
              </label>
              <input class="user-content"
                type="text"
                placeholder="请输入用户名"
                maxlength="10"
                v-model="dataForm.username" 
                @blur="isUsername"
                @focus="errIint('userErr')"
                autocomplete="off" />
                <p class="err-msg"
                  v-if="userErr != ''">
                  {{userErr}}
                </p>
            </div>
            <div class="user-item">
              <label for="password" class="user-label">
                <i class="iconfont fa">&#xe621;</i>
              </label>
              <input type="password" 
                class="user-content"
                placeholder="请输入密码"
                maxlength="16" 
                @focus="errIint('initPasswordErr')"
                v-model="initPassword"
                @blur="isPassword"
                autocomplete="off">
                <p class="err-msg" 
                  v-if="initPasswordErr != ''">
                  {{initPasswordErr}}
                </p>
            </div>
            <div class="user-item">
              <label for="passwordConfirm" class="user-label">
                <i class="iconfont fa">&#xe718;</i>
              </label>
              <input type="password"
                class="user-content" 
                placeholder="请再次输入密码"
                v-model="dataForm.password"
                @focus="errIint('passwordErr')"
                @blur="isConfirmPassword"
                autocomplete="off">
                <p class="err-msg" v-if="passwordErr != ''">{{passwordErr}}</p>
            </div>
            <div class="user-item">
              <label for="phone" class="user-label">
                <i class="iconfont fa">&#xe60d;</i>
              </label>
              <input class="user-content"
                type="tel"
                maxlength="11" 
                placeholder="请输入手机号"
                @focus="errIint('phoneErr')"
                @blur="isPhone"
                v-model="dataForm.phone"
                autocomplete="off">
                <p class="err-msg" v-if="phoneErr != ''">{{phoneErr}}</p>
            </div>
            <div class="user-item">
              <label for="email" class="user-label">
                <i class="iconfont fa">&#xe631;</i>
              </label>
              <input class="user-content"
                placeholder="请输入邮箱"
                v-model="dataForm.email"
                @focus="errIint('emailErr')"
                @blur="isEmail"
                autocomplete="off">
                <p class="err-msg" v-if="emailErr != ''">{{emailErr}}</p>
            </div>
            <div class="user-item">
              <label for="question" class="user-label">
                <i class="iconfont fa">&#xe646;</i>
              </label>
              <input class="user-content"
                type="text"
                placeholder="请输入密码提示问题"
                v-model="dataForm.question"
                @focus="errIint('questionErr')"
                @blur="isQuestion"
                autocomplete="off"/>
                <p class="err-msg" v-if="questionErr != ''">{{questionErr}}</p>
            </div>
            <div class="user-item">
              <label for="answer" class="user-label">
                <i class="iconfont fa">&#xe61a;</i>
              </label>
              <input class="user-content"
                type="text"
                v-model="dataForm.answer"
                placeholder="请输入密码提示问题答案"
                @focus="errIint('answerErr')"
                @blur="isAnswer"
                autocomplete="off" />
                <p class="err-msg" v-if="isAnswer != ''">{{answerErr}}</p>
            </div>
            <a class="btn btn-submit" id="submit" @click="register">立即注册</a>
            <div class="link-item">
              <router-link to="/login" class="link"  target="blank">已有账号，去登录>></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'

export default{
  name: 'Register',
  data () {
    return {
      userErr: '', // 用户名错误提示
      phoneErr: '', // 手机错误提示
      initPasswordErr: '', // 第一次填入密错误提示
      passwordErr: '', // 密码错误提示
      emailErr: '', // 邮箱错误提示
      questionErr: '', // 问题错误提示
      answerErr: '', // 答案错误提示
      phoneReg: /^1\d{10}$/,
      emailReg: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
      initPassword: '',
      dataForm: {
        username: '', // 用户名
        password: '', // 密码
        email: '', // 邮箱
        phone: '', // 手机号
        question: '', // 问题
        answer: ''// 答案
      }
    }
  },
  methods: {

    space (value) {
      var msg = value.replace(/\s/g, '')
      return msg
    },

    errIint(msg){
      switch (msg) {
        case 'userErr':
          this.userErr = ''
          break
        case 'initPasswordErr':
          this.initPasswordErr = ''
          break
        case 'passwordErr':
          this.passwordErr = ''
          break
        case 'phoneErr':
          this.phoneErr = ''
          break
        case 'emailErr':
          this.emailErr = ''
          break
        case 'questionErr':
          this.questionErr = ''
          break
        case 'answerErr':
          this.answerErr = ''
          break
      }
    },

    // 用户名
    isUsername () {
      if(this.space(this.dataForm.username) == '' ){
        this.userErr = '用户名不能为空'
        return false
      }else if(this.space(this.dataForm.username).length < 3) {
        this.userErr = '用户名不能少于3个字符'
        return false
      }
      // 校验用户名是否存在
      const userData = Qs.stringify({
        'str': this.dataForm.username, 
        'type': 'username'
      })
      axios.post('/api/user/check_valid.do',userData,{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
      .then((res) => {
        if(res.data.status === 1){
          this.userErr = res.data.msg
          return false
        }
      })
      .catch((err) => {
      })
      this.userErr =  '' 
      return true
    },

    // 输入密码
    isPassword () {
      if(this.initPassword == '' ){
        this.initPasswordErr = '密码不能为空'
        return false
      }else if(this.initPassword.length < 6 || this.initPassword.length > 15) {
        this.initPasswordErr = '用户名不能少于6个字符或大于15个字符'
        return false
      }
      this.initPasswordErr =  '' 
      return true
    },

    // 确认密码
    isConfirmPassword () {
      if(this.initPassword !== this.dataForm.password){
        this.passwordErr = '两次密码不一致'
        return false
      }
      return true
    },
    
    // 手机
    isPhone () {
      if(this.dataForm.phone == ''){
        this.phoneErr = '手机号不能为空'
        return false
      } else if(!this.phoneReg.test(this.dataForm.phone)){
        this.phoneErr = '请输入正确的手机号'
        return false
      }
      this.phoneErr = ''
      return true
    },

    // 邮箱
    isEmail () {
      if(this.dataForm.email == ''){
        this.emailErr = '邮箱不能为空'
        return false
      } else if(!this.emailReg.test(this.dataForm.email)){
        this.emailErr = '请输入正确的邮箱'
        return false
      }
      this.emailErr = ''
      return true
    },
    // 密码提示问题
    isQuestion () {
      if(this.dataForm.question == '' ){
        this.questionErr = '密码提示问题不能为空'
        return false
      }
      this.questionErr =  '' 
      return true
    },
    // 密码问题答案
    isAnswer () {
      if(this.dataForm.answer == '' ){
        this.answerErr = '密码提示问题答案不能为空'
        return false
      }
      this.answerErr =  '' 
      return true
    },
    register () {
      if(!this.isUsername()) return
      if(!this.isPassword()) return 
      if(!this.isConfirmPassword()) return
      if(!this.isPhone()) return
      if(!this.isEmail()) return 
      if(!this.isQuestion()) return
      if(!this.isAnswer()) return 
      const registerData = Qs.stringify(this.dataForm)
      axios.post('/api/user/register.do',registerData)
      .then((res) => {
        if(res.staut);
      })
      .catch((err) => {
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
  /* 表单框 */
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
      .error-item
        position: relative
        padding: 4px 0 4px 40px
        margin-bottom: 10px
        border:1px solid red
        color: red
        background: #fde9e9
      .error-icon
        position: absolute
        left: 14px
        top: 50%
        font-size: 14px
        margin-top: -7px

      .user-item
        position: relative
        margin-bottom: 30px
        .err-msg
          position: absolute
          bottom: -20px
          left: 50px
          font-size: 14px
          color: #c60023
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

.user-con .user-item .fa{
  font-size: 24px;
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
