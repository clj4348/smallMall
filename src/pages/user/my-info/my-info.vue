<template>
  <div>
    <user-header :title="title"></user-header>
    <div class="user-info">
      <div class="form-line">
        <span class="label">用户名：</span>
        <span class="text">{{userInfo.username}}</span>
      </div>
      <div class="form-line">
        <span class="label">电 话：</span>
        <span class="text">{{userInfo.phone}}</span>
      </div>
      <div class="form-line">
        <span class="label">邮 箱：</span>
        <span class="text">{{userInfo.email}}</span>
      </div>
      <div class="form-line">
        <span class="label">问 题：</span>
        <span class="text">{{userInfo.question}}</span>
      </div>
      <div class="form-line">
        <span class="label">答 案：</span>
        <span class="text">{{userInfo.answer}}</span>
      </div>
      <a class="btn btn-submit" href="./user-center-update.html">编辑</a>
    </div>
  </div>
</template>
<script>
import UserHeader from '../user-common/user-header'

export default{
  name: 'MyInfo',
  components: {
    UserHeader
  },
  data () {
    return {
      title: '个人中心',
      userInfo: this.$store.state.token
    }
  },
  mounted(){
    console.log(this.userInfo)
  }
}
</script>

<style lang="stylus" scoped>
/*右侧内容区*/
.content.with-nav{
  float: left;
  width: 950px;
}
.form-line
  height: 30px
  line-height: 30px
  font-size: 14px
  .label
    display: inline-block
    width: 60px
    text-align: center
</style>
