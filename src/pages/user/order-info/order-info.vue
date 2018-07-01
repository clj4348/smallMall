<template>
  <div>
    <user-header :title="title"></user-header>
    <info-con></info-con>
    <order-table></order-table>
  </div>
</template>
<script>
import UserHeader from '../user-common/user-header'
import InfoCon from './components/info-con'
import OrderTable from './components/order-table'
export default{
  name: 'OrderList',
  components: {
    UserHeader,
    InfoCon,
    OrderTable
  },
  data () {
    return {
      title: '订单信息',
    }
  }
}
</script>

<style lang="stylus" scoped>
.panel-body
  padding: 10px 0
</style>
