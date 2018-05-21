<template>
  <div>
    <user-header :title="title"></user-header>
    <div class="user-info">
      <div class="form-line">
        <span class="label">用户名：</span>
        <span class="text">{{this.userInfo.data.username}}</span>
      </div>
      <div class="form-line">
        <span class="label">电 话：</span>
        <span class="text">{{this.userInfo.data.phone}}</span>
      </div>
      <div class="form-line">
        <span class="label">邮 箱：</span>
        <span class="text">{{this.userInfo.data.email}}</span>
      </div>
      <div class="form-line">
        <span class="label">问 题：</span>
        <span class="text">{{this.userInfo.data.question}}</span>
      </div>
      <div class="form-line">
        <span class="label">答 案：</span>
        <span class="text">{{this.userInfo.data.answer}}</span>
      </div>
      <router-link class="btn btn-submit" to="/user/info-update">编辑</router-link>
    </div>
  </div>
</template>
<script>
import UserHeader from '../user-common/user-header'
import { mapState } from 'vuex'
export default{
  name: 'MyInfo',
  components: {
    UserHeader
  },
  data () {
    return {
      title: '个人中心',
    }
  },
  computed:{
    ...mapState({
      userInfo: 'token'
    })
  },
  methods:{

  }
}
</script>

<style lang="stylus" scoped>
/*右侧内容区*/
.content.with-nav
  float: left
  width: 950px
.user-info
  padding: 0 10px
  .form-line
    height: 30px
    line-height: 30px
    font-size: 12px
    .label
      display: inline-block
      width: 60px
      text-align: left
      font-size: 12px
</style>
