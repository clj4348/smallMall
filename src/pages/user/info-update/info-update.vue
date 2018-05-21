<template>
  <div>
    <user-header :title="title"></user-header>
    <div class="user-info">
      <div class="text-line">
        <span class="text-label">用户名：</span>
        <span class="input">{{userInfo.username}}</span>
      </div>
      <div class="text-line">
        <span class="text-label">电 话：</span>
        <input type="text" 
          class="input"
          autocomplete="off"
          :value="userInfo.phone"
          @input="editUserInfo($event, 'phone')">
      </div> 
      <div class="text-line">
        <span class="text-label">邮 箱：</span> 
        <input type="text" 
          class="input" 
          autocomplete="off"
          :value="userInfo.email"
          @input="editUserInfo($event, 'email')">
      </div> 
      <div class="text-line">
        <span class="text-label">问 题：</span>
        <input type="text" 
          class="input"
          autocomplete="off" 
          :value="userInfo.question"
          @input="editUserInfo($event, 'question')">
      </div>
      <div class="text-line">
        <span class="text-label">答 案：</span>
        <input type="text" 
          class="input"
          autocomplete="off"
          :value="userInfo.answer"
          @input="editUserInfo($event, 'answer')">
      </div>
      <div class="text-line">
        <span class="btn btn-mini btn-submit" @click="postUserInfo">提交修改</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from  'axios'
import Qs from 'qs'
import UserHeader from '../user-common/user-header'

export default{
  name: 'PassUpdate',
  components: {
    UserHeader
  },
  data () {
    return {
      title: '修改个人信息',
      userInfo: this.$store.state.token
    }
  },
  methods: {
    editUserInfo(event, val){
      let el = event.currentTarget
      switch(val) {
        case 'phone':
          this.userInfo.phone = el.value
          break;
        case 'email':
          this.userInfo.email = el.value
          break;   
        case 'question':
          this.userInfo.question = el.value
          break;
        case 'answer':
          this.userInfo.answer = el.value
          break;
      }
    },

    postUserInfo(){
       // 校验用户名是否存在
       const userInfo = Qs.stringify({
        phone: this.userInfo.phone,
        email: this.userInfo.email,
        question: this.userInfo.question,
        answer: this.userInfo.answer
      })

      axios.post('/api/user/update_information.do',userInfo,{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
        .then((res) => {
          const status = res.data.status
          if(status === 0){
            alert(res.data.msg)
            axios.post('/api/user/get_information.do')
            .then((resInfo) => {
              const infoStatus = resInfo.data.status
              if(infoStatus === 0){
                this.$router.go(-1) //返回上一页
              }else if(infoStatus === 10){
                alert(resInfo.data.msg)
                this.$router.push('/login') // 回到登陆页面
              }
            })
          }else if(status === 1){
            alert(res.data.msg)
          }
      })
    },
  }
}
</script>

<style lang="stylus" scoped>
.user-info
  padding: 0 10px
  .text-line 
    margin: 10px 0
    .text-label
      display: inline-block
      width: 60px
      font-size: 12px
    input.input
      border: 1px solid #f2f2f2
      padding: 10px
      font-size: 12px
</style>
