<template>
  <div>
    <user-header></user-header>
    我的订单页面
  </div>
</template>
<script>
import UserHeader from '../user-common/user-header'

export default{
  name: 'OrderList',
  components: {
    UserHeader
  },
  data () {
    return {
      title: '我的订单',
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
