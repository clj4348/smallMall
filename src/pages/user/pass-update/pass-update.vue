<template>
  <div>
    <user-header :title="title"></user-header>
    <div class="pass-info">
      <div class="text-line">
        <span class="text">原始密码：</span>
        <input type="password" @input="passwordOldInput($event)" class="password" autocomplete="off">
      </div>
      <div class="text-line">
        <span class="text">新 密 码 ： </span>
        <input type="password"
          @input="passwordNewConfirm($event)"
          class="password"
          autocomplete="off">
      </div>
      <div class="text-line">
        <span class="text">确认密码：</span>
        <input type="password" class="password"
          @input="passwordNewInput($event)"
          autocomplete="off">
      </div>
      <div class="text-line">
        <span class="btn btn-mini btn-submit" @click="sumitUpdate">提交修改</span>
      </div>
    </div>
  </div>
</template>
<script>
import UserHeader from '../user-common/user-header'

export default{
  name: 'PassUpdate',
  components: {
    UserHeader
  },
  data () {
    return {
      dataForm: {
        passwordOld: '',
        passwordNew: ''
      },
      title: '修改密码',
      confirmPassword: ''
    }
  },
  methods: {
    passwordOldTrim(){
      if(this.dataForm.passwordOld === ''){
        alert('原始密码不能为空')
        return false
      }
      return true
    },
    
    passwordNewTrim(){
      if(this.dataForm.passwordNew === ''){
        alert('新密码不能为空')
        return false
      }
      return true
    },
    passwordNewConfirmTrim(){
      if(this.confirmPassword === ''){
        alert('确认密码不能为空')
        return false
      }else if(this.confirmPassword !== this.dataForm.passwordNew){
        alert('密码必须一致')
        return false
      }
      return true
    },
    passwordNewConfirm(e){
      this.confirmPassword = e.target.value
    },
    passwordOldInput(e){
      this.dataForm.passwordOld = e.target.value
    },
    passwordNewInput(e){
      this.dataForm.passwordNew = e.target.value
    },

    sumitUpdate(){
      if(!this.passwordOldTrim()) return
      if(!this.passwordNewTrim()) return
      if(!this.passwordNewConfirmTrim()) return
      this.axios.post('/api/user/reset_password.do',this.dataForm)
        .then((res) => {
          console.log(res)
          if(res.status === 0){
            alert(res.msg)
          }else{
            alert(res.msg)
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .pass-info
    padding: 0 10px
    .text-line
      margin: 10px 0
      input
        padding: 0 10px        
        border: 1px solid #e5e5e5
    .password
      height: 25px
      line-height: 25px
      outline: none
</style>
