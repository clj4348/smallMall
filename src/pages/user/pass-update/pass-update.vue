<template>
  <div>
    <user-header :title="title"></user-header>
   修改密码页面
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
      title: '修改密码',
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
