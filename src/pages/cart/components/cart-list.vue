<template>
  <div class="cart-list">
      <table class="cart-table" v-for="item of cartProductVoList">
        <tbody>
        <tr>
          <td class="cart-cell cell-check">
            <input type="checkbox" class="cart-select" checked="checked">
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
            <span class="count-btn" data-opera-type="minus">-</span>
            <input class="count-input" :value="item.quantity">
            <span class="count-btn" data-opera-type="plus">+</span>
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
  export default{
    name: 'CartList',
    props: {
      cartProductVoList:Array
    },
    data () {
      return {
       
      }
    },
    computed:{
     
    },
    methods:{
       
    },
    mounted () {
      this.$watch('cartProductVoList', (newVal, oldVal) => {
        this.cartProductVoList = newVal
        console.log(this.cartProductVoList)
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
.cart-wrap .cart-table .cell-check 
    width: 30px
    padding-left: 20px
    text-align: left
.cart-wrap .cart-list .cart-table .cell-img 
    width: 80px
    padding: 10px
.cart-wrap .cart-list .cart-table .cell-img .p-img 
    width: 80px
    height: 80px
    border: 1px solid #ddd
.cart-wrap .cart-table .cell-info .p-name 
    line-height: 18px
.cart-wrap .cart-table .cell-count .count-btn
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
.cart-wrap .cart-table .cell-count .count-input
    width: 60px
    height: 28px
    line-height: 28px
    border: 1px solid #ddd
    text-align: center
    vertical-align: middle
    outline: none
</style>