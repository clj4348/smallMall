<template>
  <div>
    <user-header :title="title"></user-header>
    <div class="panel-body">
      <order-con></order-con>
    </div>
  </div>
</template>
<script>
import UserHeader from '../user-common/user-header'
import OrderCon from './components/order-con'
export default{
  name: 'OrderList',
  components: {
    UserHeader,
    OrderCon
  },
  data () {
    return {
      title: '我的订单',
    }
  }
}
</script>

<style lang="stylus" scoped>
.panel-body
  padding: 10px 0
</style>
