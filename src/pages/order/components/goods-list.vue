<template>
  <div>
    <h2 class="panel-title">商品清单</h2>
    <table class="product-table">
      <tbody>
        <tr>
          <th width="10%">&nbsp;</th>
          <th width="30%">商品描述</th>
          <th width="20%">价格</th>
          <th width="20%">数量</th>
          <th width="20%">小计</th>
        </tr>
        <tr v-for="item of orders" :key="item.productId">
          <td class="product-cell cell-img">
            <a>
              <img class="p-img" :src="'http://img.happymmall.com/'+ item.productImage ">
            </a>
          </td>
          <td align="left">
            <a class="link p-name" href="./detail.html?productId=77">
            {{item.productName}}</a>
          </td>
          <td>￥{{item.currentUnitPrice}}</td>
          <td>x{{item.quantity}}</td>
          <td>￥{{item.totalPrice}}</td>
        </tr>
      </tbody>
    </table>
    <div class="submit-con">
      <span>订单总价：</span>
      <span class="submit-total">￥{{totalPrice}}</span>
      <span class="btn order-submit">提交订单</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GoodsList',
    props: {
      orderList: Object
    },
    data(){
      return {
        orders: [],
        totalPrice: 0
      }
    },
    mounted(){
      this.$watch('orderList', (newVal, oldVal) => {
        this.orders = newVal.orderItemVoList
        this.totalPrice = newVal.productTotalPrice
      })
    }
  }
</script>
<style lang="stylus" scoped>
  .product-table
    width: 100%
    margin-top: 20px
    border-collapse: collapse
    margin-bottom: 10px
    th
      height: 30px
      line-height: 30px
      border-bottom: 1px dotted #ddd
      text-align: center
      &.left
        text-align: left
    td
      text-align: center
      border-bottom: 1px dotted #ddd 
    .cell-img
      width: 80px
      padding: 10px
      .p-img 
        width: 80px
        height: 80px
        border: 1px solid #ddd
    .p-name
      font-size: 12px
  .submit-con
    text-align: right
    background: #eee
    .submit-total
      font-size: 18px
      color: #c60023
      font-weight: 700
      margin-right: 30px
      vertical-align: middle
  
</style>