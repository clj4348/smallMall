<template>
  <div class="cart-list">
      <table class="cart-table" v-for="(item, index) of cartList">
        <tbody>
        <tr>
          <td class="cart-cell cell-check">
            <div @click="productChecked(item)">
              <a class="cart-select" v-if="item.productChecked === 0"></a>
              <a class="cart-select cart-select-act iconfont" v-else>&#xe616;</a>
            </div>
          </td>
          <td class="cart-cell cell-img">
            <a href="./detail.html?productId=30">
              <img class="p-img" :src="'http://img.happymmall.com/'+ item.productMainImage">
            </a>
          </td>
          <td class="cart-cell cell-info">
            <a class="link p-name" href="./detail.html?productId=30" target="_blank">{{item.productName}}</a>
          </td>
          <td class="cart-cell cell-price">￥{{item.productPrice.toFixed(2)}}</td>
          <td class="cart-cell cell-count">
            <span class="count-btn" @click="minus(item,index)">-</span>
            <input class="count-input" :value="item.quantity">
            <span class="count-btn" @click="plus(item,index)">+</span>
          </td>
          <td class="cart-cell cell-total">￥{{item.productTotalPrice.toFixed(2)}}</td>
          <td class="cart-cell cell-opera">
            <a class="link cart-delete">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>
<script>
import axios from 'axios'
export default {
  name: 'CartList',
  props: {
    cartProductVoList: Array
  },
  data() {
    return {
      cartList: []
    }
  },
  computed: {
    cartCount() {
      let count =  0;
      for(let i = 0 ; i< this.cartList.length; i++){
        count = count + this.cartList[i].quantity
      }
      return count
    },
    allSeletc() {
      for(let i = 0 ; i< this.cartList.length; i++){
        if(this.cartList[i].productChecked === 0){
          return false
        }
      }
      return true
    }
  },
  methods: {
    productChecked(option){
      option.productChecked = option.productChecked === 0 ? 1 : 0
      // 勾选某个商品
      if(option.productChecked === 1){
        axios.get('/api/cart/select.do', {
          params: {
            productId:option.productId
          }
        })
        .then((res) => {
          this.$store.commit('changeTotalPrice', res.data.data.cartTotalPrice)
        })
        .catch((err) => {})
      }else {
        // 取消选中某个商品
        axios.get('/api/cart/un_select.do', {
          params: {
            productId:option.productId
          }
        })
        .then((res) => {
          this.$store.commit('changeTotalPrice', res.data.data.cartTotalPrice)
        })
        .catch((err) => {})
      }
      this.$store.commit('changeSelectAll', this.allSeletc)
    },
    // 更新单个商品的数量
    update(productId, count) {
      axios.get('/api/cart/update.do', {
          params: {
            productId,
            count
          }
        })
        .then((res) => {
          this.$store.commit('changeTotalPrice', res.data.data.cartTotalPrice)
          //console.log(res.data.data)    
        })
        .catch((err) => {})
    },
    // 购物车数量
    count(){
      this.$store.commit('changeCartCount', this.cartCount)
    },
    oneProductTotalPrice(num, idx) {
      this.cartList[num].productTotalPrice = this.cartList[num].productPrice * idx
    },
    //减法
    minus(params, num) {
      if (params.quantity <= 1) {
        params.quantity = 1
      } else {
        params.quantity--
      }
      this.oneProductTotalPrice(num, params.quantity)
      this.update(params.productId, params.quantity)
      this.count()
    },
    // 加法
    plus(params, num) {
      if (params.quantity >= params.productStock) {
        params.quantity = params.productStock
      } else {
        params.quantity++
      }
      this.oneProductTotalPrice(num, params.quantity)
      this.update(params.productId, params.quantity)
      this.count()
    }
  },
  mounted() {
    this.$watch('cartProductVoList', (newVal, oldVal) => {
      this.cartProductVoList = newVal
      this.cartList = this.cartProductVoList
    })

  }
}
</script>

<style lang="stylus" scoped>
.cart-wrap .cart-table
  width: 100%
  border-collapse: collapse
  border: 1px solid #ebebeb
  margin-bottom: 10px
  .cell-check 
    width: 30px
    padding-left: 20px
    text-align: left
    .cart-select
      display: block
      border: 1px solid #ccc
      width: 15px
      height: 15px
      cursor: pointer
      position: relative
      -webkit-user-select: none;
      -moz-user-select: none; 
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none; 
      &.cart-select-act
        background: #c60023
        color: #fff
        border: 1px solid #c60023
        text-align: center
  .cell-img 
    width: 80px
    padding: 10px
    .p-img
      width: 80px
      height: 80px
      border: 1px solid #ddd
  .cell-info .p-name 
    line-height: 18px
  .cell-count .count-btn
    display: inline-block
    width: 20px
    height: 28px
    line-height: 28px
    border: 1px solid #ddd
    vertical-align: middle
    cursor: pointer
    background: #fff
    -moz-user-select: none
    -webkit-user-select: none
    -ms-user-select: none
    user-select: none
  .cell-count .count-input
    width: 60px
    height: 28px
    line-height: 28px
    border: 1px solid #ddd
    text-align: center
    vertical-align: middle
    outline: none
</style>