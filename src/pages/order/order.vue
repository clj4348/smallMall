<template>
  <div>
    <Header></Header>
    <Search></Search>
    <Crumbs></Crumbs>
    <div class="confirm-wrap w">
      <Address></Address>
      <goods-list :orderList="orderList"></goods-list>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '../common/header'
import Search from '../common/search'
import Crumbs from '../common/crumbs'
import Footer from '../common/footer'
import Address from './components/address'
import GoodsList from './components/goods-list'
export default {
  name: 'Order',
  components: {
    Header,
    Footer,
    Crumbs,
    Search,
    Address,
    GoodsList
  },
  data(){
    return {
      orderList: {}
    }
  },
  methods:{
    getOrderList () {
      axios.get('/api/order/get_order_cart_product.do')
      .then((res) => {
        this.orderList = res.data.data
      })
      .catch((arr) => {

      })
    }
  },
  mounted () {
    this.getOrderList()
  }
}
</script>
<style lang="stylus" scoped>
  .confirm-wrap >>> .panel-title
    font-size: 15px
    font-weight: 700
    line-height: 35px
    height: 35px
    color: #333
    border-bottom: 1px solid #ddd
</style>