<template>
  <div class="cart-footer clearfix">
    <div class="select-con">
      <label>
        <input type="checkbox" class="cart-select-all" checked="checked">
        <span>全选</span>
      </label>
    </div>
    <div class="delete-con">
      <a class="cart-delete-seleced link">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        <span>删除选中</span>
      </a>
    </div>
    <div class="submit-con">
      <span>总价：</span>
      <span class="submit-total">￥11312.9</span>
      <span class="btn submit-btn">去结算</span>
    </div>
  </div>  
</template>
<script>
  export default{
    name: 'CartFooter',
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