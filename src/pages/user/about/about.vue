<template>
  <div>
    <user-header :title="title"></user-header>
   关于商城界面
  </div>
</template>
<script>
import UserHeader from '../user-common/user-header'

export default{
  name: 'About',
  components: {
    UserHeader
  },
  data () {
    return {
      title: '关于商城',
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
