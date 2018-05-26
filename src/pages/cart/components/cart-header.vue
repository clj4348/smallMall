<template>
  <div class="cart-header">
    <table class="cart-table">
      <tbody>
        <tr>
          <th class="cart-cell cell-check">
            <label>
              <div class="cart-select-all" @click="selectAll">
                <a class="all-select-act iconfont" v-if="allChecked">&#xe616;</a>
                <a v-else></a>
              </div>
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
import { mapState } from 'vuex'
  export default{
    name: 'CartHeader',
    computed:{
      ...mapState({
        allChecked: 'totalSelection'
      })
    },
    methods:{
       selectAll(){
          this.$emit('selectAllChecked', this.allChecked)
       }
    },
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