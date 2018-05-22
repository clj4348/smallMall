<template>
  <div class="cart-header">
    <table class="cart-table">
      <tbody>
        <tr>
          <th class="cart-cell cell-check">
            <label>
              <input type="checkbox" class="cart-select-all" checked="checked">
              <span>全选</span>
            </label>
          </th>
          <th class="cart-cell cell-info">商品信息</th>
          <th class="cart-cell cell-price">单价</th>
          <th class="cart-cell cell-count">数量</th>
          <th class="cart-cell cell-total">合计</th>
          <th class="cart-cell cell-opera">操作</th>
        </tr>
      </tbody>
    </table> 
  </div>
</template>
<script>
  export default{
    name: 'CartHeader',
    data () {
      return {
       
      }
    },
    computed:{
     
    },
    methods:{
       
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" scoped>
.cart-wrap 
    margin-top: 20px!important
    text-align: left
  .cart-header 
    background: #eee
    .cell-check
      width: 130px
    .cart-cell
      height: 40px
      line-height: 40px
  .cart-table 
    width: 100%
    border-collapse: collapse
    border: 1px solid #ebebeb
    margin-bottom: 10px
    .cell-check
      width: 130px
      padding-left: 20px
      text-align: left

</style>