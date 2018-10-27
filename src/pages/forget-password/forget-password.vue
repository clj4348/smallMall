<template>
  <div class="user-wrap">
    <div class="user-con w">
      <div class="user-title">找回密码</div>
      <div class="user-box">
        <div class="err-item" :style="{'display': errorTips === '' ? 'none' : 'block' }">
          <p class="err-msg">{{errorTips}}</p>
        </div>
        <user-name v-if="step === 0" @userNameErrTip="userNameErrTip" @questionStep="questionStep"></user-name>
        <Question v-if="step === 1" @userNameErrTip="userNameErrTip" :questionObj="questionObj" @newPasswordStep="newPasswordStep"></Question>
        <new-password v-if="step === 2" @userNameErrTip="userNameErrTip" :passwordData="passwordData"></new-password>
      </div>
    </div>
  </div>
</template>
<script>
import UserName from './components/user-name'
import Question from './components/question'
import NewPassword from './components/new-password'
export default{
  name: 'Index',
  components: {
    UserName,
    Question,
    NewPassword
  },
  data () {
    return {
      errorTips: '', // 错误提示
      step: 0,
      questionObj: {
        question: '',
        username: ''
      },
      passwordData: {}
    }
  },
  methods: {
    userNameErrTip(err){
      this.errorTips = err
    },
    questionStep(options){
      this.step = options.step
      this.questionObj.question = options.question
      this.questionObj.username = options.username
    },
    newPasswordStep(options){
      this.step = options.step
      this.passwordData.username = this.questionObj.username
      this.passwordData.forgetToken =options.forgetToken
    }
  },
  mounted () {
   
  }
}
</script>
<style lang="stylus" scoped>
  .user-wrap
    padding: 40px 0
  .user-con
    position: relative
    width: 400px
    margin: 0 auto
    background: #fff
    .user-title
      text-align: center
      border-bottom: 1px solid #ddd
      padding: 10px 0
      font-size: 18px
      font-weight: 700
      color: #666
    .user-box
      padding: 20px
    .err-item
      position: relative
      padding: 4px 0 4px 40px
      margin-bottom: 10px
      border: 1px solid red
      background: #fde9e9
      color: red
      display: none
</style>
