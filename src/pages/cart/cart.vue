<template>
  <div>
    <Header></Header>
    <Search></Search>
    <Crumbs></Crumbs>
    <div class="cart-wrap w">
      <cart-header></cart-header>
      <cart-list :cartProductVoList="cartProductVoList"></cart-list>
      <cart-footer></cart-footer>
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
import CartHeader from './components/cart-header'
import CartFooter from './components/cart-footer'
import CartList from './components/cart-list'

export default{
  name: 'Index',
  components: {
    Header,
    Footer,
    Crumbs,
    Search,
    CartHeader,
    CartFooter,
    CartList
  },
  data () {
    return {
      cartProductVoList: [], // 购物车列表
      cartTotalPrice: ''// 总金额
    }
  },
  methods: {
    cartList(){
      axios.get('/api/cart/list.do', {})
      .then((res) => {
        // 购物车列表
        this.cartProductVoList = res.data.data.cartProductVoList
        // 总金额
        this.cartTotalPrice = res.data.data.cartTotalPrice
      })
      .catch((err) => {

      })
    }
  },
  mounted () {
    this.cartList()
  }
}
</script>
<style lang="stylus">
  .cart-wrap .cart-table .cell-info {
    width: 400px;
    padding: 0 10px;
}

.cart-wrap .cart-table .cell-price {
    width: 100px;
    text-align: center;
}
.cart-wrap .cart-table .cell-count {
    width: 200px;
    text-align: center;
}
.cart-wrap .cart-table .cell-total {
    width: 100px;
    text-align: center;
}
.cart-wrap .cart-table .cell-opera {
    width: 110px;
    text-align: center;
}
</style>
