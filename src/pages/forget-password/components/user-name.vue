<template>
  <div class="step-con step-username">
    <p class="user-item-text">用户名：</p>
    <div class="user-item">
      <label class="user-label">
        <i class="fa fa-user"></i>
      </label>
        <input type="text" class="user-content"  placeholder="请输入用户名" @input="userInput($event)" @focus="userFocus">
    </div>
    <a class="user-btn" id="submit-username" @click="submitUsername">下一步</a>
  </div>
</template>
<script type="text/javascript">
  import { postForgetGetQuestion } from 'service/forgetPassword.js' 
  export default{
    name: 'UserName',
    data () {
      return {
        username: '',
        usernameErrorTest: '' // 错误提示
      }
    },
    methods: {
      userInput(e){
        this.username = e.target.value
      },
      userFocus(){
        this.$emit('userNameErrTip', '')
      },
      usernameErr(){
        if(this.username == ''){
          this.$emit('userNameErrTip', '用户名不能为空')
          return false
        }
        return true
      },
      submitUsername(){
        if(!this.usernameErr()) return 
        postForgetGetQuestion({username:this.username})
          .then((res) => {
              if(res.status === 1){
                this.$emit('userNameErrTip', res.msg)
              }else{
                this.$emit('userNameErrTip', '')
                this.$emit('questionStep', {
                  username: this.username,
                  question: res.data,
                  step:1})
              }
          })
      }
    },
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
