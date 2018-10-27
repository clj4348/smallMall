<template>
  <div class="step-con">
    <p class="user-item-text">请输入新密码：</p>
    <div class="user-item">
      <label class="user-label">
        <i class="fa fa-user"></i>
      </label>
        <input type="password" class="user-content"  placeholder="请输入密码" @input="passwordInput($event)" @focus="passwordFocus">
    </div>
    <a class="user-btn" @click="submitPassword">提交</a>
  </div>
</template>
<script type="text/javascript">
  import { postForgetResetPassword } from 'service/forgetPassword.js' 
  export default{
    name: 'NewPassword',
    props: {
      passwordData: Object
    },
    data () {
      return {
        passwordNew: '',
        passwordErrorTest: '' // 错误提示
      }
    },
    methods: {
      passwordInput(e){
        this.passwordNew = e.target.value;
      },
      questionErr(){
        if(this.passwordNew == ''){
          this.$emit('userNameErrTip', '密码不能为空')
          return false
        }
        return true
      },
      passwordFocus(){
        this.$emit('userNameErrTip', '')
      },
      submitPassword(){
        let data = Object.assign({}, {passwordNew:this.passwordNew}, this.passwordData)
        if(!this.questionErr()) return 
        postForgetResetPassword(data).then((res) => {
          if(res.status === 1){
            alert(res.msg)
          } else {
            alert(res.msg)
            this.$router.history.go(-1)
          }
        })
      }
    },

    mounted () {

    }
  }
</script>
<style lang="stylus" scoped>
  .user-item-text
    padding: 0 0 10px
    font-size: 14px
  .user-item
    position: relative
    border: 1px solid #bdbdbd
    margin-bottom: 20px
    .user-label
      position: absolute
      left: 0
      top: 0
      bottom: 0
      width: 40px
      line-height: 36px
      background: #f3f3f3
      font-size: 18px
      color: #d3d3d3
      text-align: center
      border-right: 1px solid #bdbdbd
    .user-content
      padding: 10px 0 10px 50px
      width: 308px
      height: 18px
      line-height: 18px
      font-size: 15px
      color: #333
      border: none
      outline: none
  .user-btn
    display: block
    width: 100%
    text-align: center
    background: #e4393c
    color: #fff
    line-height: 44px
    height: 44px;
    font-size: 20px
    cursor: pointer
    -moz-user-select: none
    -webkit-user-select: none
    -ms-user-select: none
    user-select: none
</style>
