<template>
  <div class="panel-body">
    <div class="order-info">
      <div class="text-line">
        <span class="text">订单号：1528377421067</span>
        <span class="text">创建时间：2018-06-07 21:17:01</span>
      </div> <div class="text-line">
        <span class="text">收件人：asdf 上海 上海 sdfgasdfg 13600024482 </span>
      </div> <div class="text-line">
        <span class="text">订单状态：已取消</span>
      </div>
      <div class="text-line">
        <span class="text">支付方式：在线支付</span>
      </div>
      <div class="text-line"></div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'InfoCon',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.panel-body
  padding: 10px 0
  overflow: hidden
.order-info 
  padding: 0 10px
 .text
    margin-right: 20px
    height: 30px
    line-height: 30px
</style>
