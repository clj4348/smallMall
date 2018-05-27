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
      <span class="btn submit-btn">去结算</span>
    </div>
  </div>  
</template>
<script>
import { mapState } from 'vuex'
  export default{
    name: 'CartFooter',
    props:{
      cartProductVoList: Array
    },
    data(){
      return {
        cartList: []
      }
    },
    computed:{
      ...mapState({
        allChecked: 'totalSelection',
        cartTotalPrice:'totalPrice'
      })
    },
    methods:{
      selectAll() {
        this.$emit('selectAllChecked', this.allChecked)
      },
      deleteProduct() {
        let productIds = ''
        for(let item in this.cartList){
          if(this.cartList[item].productChecked === 1){
            if(item < this.cartList.length-1){
              productIds = productIds + this.cartList[item].productId + ','
            }else{
              productIds = productIds + this.cartList[item].productId
            }
          }
        }
        this.$emit('deleteProduct', productIds)
      }
    },
    mounted(){
      this.$watch('cartProductVoList', (newVal, oldVal) => {
        this.cartProductVoList = newVal
        this.cartList =  newVal
      })
    }
  }
</script>

<style lang="stylus" scoped>
.cart-wrap .cart-footer {
    position: relative;
    line-height: 50px;
    background: #eee;
}
.cart-wrap .cart-footer .select-con {
    float: left;
    padding-left: 20px;
}
.cart-wrap .cart-footer .delete-con {
    float: left;
    margin-left: 20px;
}
.cart-wrap .cart-footer .submit-con {
    float: right;
}
.cart-wrap .cart-footer .submit-con .submit-total {
    font-size: 18px;
    color: #c60023;
    font-weight: 700;
    margin-right: 30px;
    vertical-align: middle;
}
</style>