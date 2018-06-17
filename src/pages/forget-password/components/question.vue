<template>
  <div class="step-con step-username">
    <p class="user-item-text">密码提示问题为: <span>{{questionObj.question}}</span></p>
    <p class="user-item-text">密码提示答案：</p>
    <div class="user-item">
      <label class="user-label">
        <i class="fa fa-user"></i>
      </label>
        <input type="text" class="user-content"  placeholder="请输入密码提示答案" @input="questionInput($event)" @focus="questionFocus">
    </div>
    <a class="user-btn" id="submit-username" @click="submitQuestion">下一步</a>
  </div>
</template>
<script type="text/javascript">
  import axios from 'axios'
  import Qs from 'qs'
  export default{
    name: 'Question',
    props: {
      questionObj: Object
    },
    data () {
      return {
        answer: '',
        questionErrorTest: '' // 错误提示
      }
    },
    methods: {
      questionInput(e){
        this.answer = e.target.value;
      },
      questionErr(){
        if(this.answer == ''){
          this.$emit('userNameErrTip', '密码提示答案不能为空')
          return false
        }
        return true
      },
      questionFocus(){
        this.$emit('userNameErrTip', '')
      },
      submitQuestion(){
        
        let data = Object.assign({}, {answer:this.answer}, this.questionObj)
        data = Qs.stringify(data)
        if(!this.questionErr()) return 
        axios.post('/api/user/forget_check_answer.do',data
        )
          .then((res) => {
              if(res.data.status === 1){
                this.$emit('userNameErrTip', res.data.msg)
              }else{
                this.$emit('userNameErrTip', '')
                this.$emit('newPasswordStep', {forgetToken: res.data.data, step:2})
              }
          }).catch((err) => {

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
