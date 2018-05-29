<template>
  <div class="cart-footer clearfix">
    <div class="select-con">
      <label>
        <div class="cart-select-all" @click="selectAll">
          <a class="all-select-act iconfont" v-if="allChecked">&#xe616;</a>
          <a v-else></a>
        </div>
        <span>全选</span>
      </label>
    </div>
    <div class="delete-con">
      <a class="cart-delete-seleced link">
        <i class="fa fa-trash-o"></i>
        <span @click="deleteProduct">删除选中</span>
      </a>
    </div>
    <div class="submit-con">
      <span>总价：</span>
      <span class="submit-total">￥{{cartTotalPrice.toFixed(2)}}</span>
      <span class="btn submit-btn" @click="orderCreate">去结算</span>
    </div>
  </div>  
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
  export default {
    name: 'CartFooter',
    props: {
      cartProductVoList: Array // 购物车列表
    },
    data() {
      return {
        cartList: [] // 购物车列表
      }
    },
    computed: {
      // 拿取vuex中的
      ...mapState({
        allChecked: 'totalSelection', // 全选状态
        cartTotalPrice: 'totalPrice' // 商品的价格
      })
    },
    methods: {
      // 全选
      selectAll() {
        // 子组件向父组件传递是否为全选
        this.$emit('selectAllChecked', this.allChecked)
      },
      // 删除选中的商品
      deleteProduct() {
        // 参数以字符串逗号隔开传递
        let productIds = ''
        for (let item in this.cartList) {
          // 遍历购物车列表
          // 判断每个商品是否为选中状态  1为选中 0 为 未选中   
          if (this.cartList[item].productChecked === 1) {
            // 判断选中状态是否小于最后一个 
            if (item < this.cartList.length - 1) {
              // 是 productIds 拼接上 逗号
              productIds = productIds + this.cartList[item].productId + ','
            } else {
              // 否 最后一个就不添加 " , "
              productIds = productIds + this.cartList[item].productId
            }
          }
        }
        // 传递都到父组件中去，调用deleteProduct方法
        this.$emit('deleteProduct', productIds)
      },
      // 跳转到订单列表
      orderCreate() {
        // 总价必须大于零才能提交
        if(this.cartTotalPrice <= 0){
          alert('请勾选商品才能提交')
          return;
        }
        this.$router.push('/order')
      }
    },
    mounted() {
      // 监听cartProductVoList是否发生了变化
      this.$watch('cartProductVoList', (newVal, oldVal) => {
        this.cartProductVoList = newVal
        this.cartList = newVal
      })
    }
  }
</script>

<style lang="stylus" scoped>
.cart-wrap 
  .cart-footer 
    position: relative
    line-height: 50px
    background: #eee
  .select-con 
    float: left
    padding-left: 20px
  .delete-con 
    float: left
    margin-left: 20px
  .submit-con
    float: right
    .submit-total
      font-size: 18px
      color: #c60023
      font-weight: 700
      margin-right: 30px
      vertical-align: middle
</style>