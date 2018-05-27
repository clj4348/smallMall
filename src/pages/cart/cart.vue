<template>
  <div>
    <Header></Header>
    <Search></Search>
    <Crumbs></Crumbs>
    <div class="cart-wrap w" v-show="isCartProductVoList">
      <cart-header @selectAllChecked="allCheckeds"></cart-header>
      <cart-list :cartProductVoList="cartProductVoList"
        @selectGoods="selectGoods"
        @deleteProduct="deleteProduct"></cart-list>
      <cart-footer 
        @selectAllChecked="allCheckeds"
        @deleteProduct="deleteProduct" 
        :cartProductVoList="cartProductVoList"></cart-footer>
    </div>
    <div class="cart-wrap w" v-show="!isCartProductVoList">
      <p class="err-tip">
        <span>您的购物车空空如也，</span>
        <router-link to="/">立即去购物</router-link>
      </p>
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
export default {
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
  data() {
    return {
      cartProductVoList: [], // 购物车列表
    }
  },
  computed:{
    isCartProductVoList(){
      return  this.cartProductVoList.length > 0 ? true : false
    }
  },
  methods: {
    selectAllReq() {

    },
    allCheckeds(opt) {
      if(this.cartProductVoList.length > 0){
        if (opt) {
          for(let i = 0; i< this.cartProductVoList.length; i++){
            this.cartProductVoList[i].productChecked = 0
          }
          axios.get('/api/cart/un_select_all.do', {})
            .then((res) => {
              this.$store.commit('changeTotalPrice', res.data.data.cartTotalPrice)
            })
            .catch((err) => {})
        } else {
          for(let i = 0; i< this.cartProductVoList.length; i++){
            this.cartProductVoList[i].productChecked = 1
          }
          axios.get('/api/cart/select_all.do', {})
            .then((res) => {
              this.$store.commit('changeTotalPrice', res.data.data.cartTotalPrice)
            })
            .catch((err) => {})
        }
         this.$store.commit('changeSelectAll', !opt)
      }
    },
    // 选中的购物车数量
    selectGoods (cartArr) {
      this.cartProductVoList = cartArr
    },
    cartList() {
      axios.get('/api/cart/list.do', {})
        .then((res) => {
          // 购物车列表
          this.cartProductVoList = res.data.data.cartProductVoList
          console.log(this.cartProductVoList.length > 0);
          // 总金额
          this.$store.commit('changeTotalPrice', res.data.data.cartTotalPrice)
          if(this.cartProductVoList.length > 0){
            this.$store.commit('changeSelectAll', res.data.data.allChecked)
          }else{
            this.$store.commit('changeSelectAll', false)
          }
          
        })
        .catch((err) => {})
    },
    // 移除某个商品或多个商品
    deleteProduct(params){
      if(params != '' && params != undefined ){
        axios.get('/api/cart/delete_product.do', {
          params:{
            productIds:params
          }
        })
        .then((res) => {
          // 购物车列表
          this.cartProductVoList = res.data.data.cartProductVoList
          // 总金额
          this.$store.commit('changeTotalPrice', res.data.data.cartTotalPrice)
          this.$store.commit('changeSelectAll', false)
        })
        .catch((err) => {})
      }
    }
  },
  mounted() {
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
.cart-select-all
  float: left
  margin: 12px 10px 0 0 
  a
    display: block
    border: 1px solid #ccc
    width: 15px
    height: 15px
    cursor: pointer
    line-height: 15px
    position: relative
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    &.all-select-act
      background: #c60023
      color: #fff
      border: 1px solid #c60023
      text-align: center
</style>