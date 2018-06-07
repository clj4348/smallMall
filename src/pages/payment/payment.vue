<template>
  <div>
    <Crumbs></Crumbs>
    <div class="pay-wrap w">
      <p class="pay-tips">订单提交成功，请您尽快支付！ 订单号：{{orderNo}}</p>
      <p class="pay-tips enhance">请使用支付宝扫描如下二维码进行支付：</p>
      <div class="img-con">
        <img class="qr-code" :src="qrUrl">
      </div>
    </div>
  </div>
</template>
<script>

import Crumbs from '../common/crumbs'
import axios from 'axios'
export default{
  name: 'Payment',
  components: {
    Crumbs,
  },
  data(){
    return {
      orderNo: this.utils.getUrlParam('orderNo'),
      qrUrl: ''
    }
  },
  methods: {
    // 支付
    payment(){
      axios.get('/api/order/pay.do',{
        params: {
          orderNo: this.orderNo
        }
      }).then((res) => {
        this.qrUrl = res.data.data.qrUrl
        this.$store.commit('changeCartCount', 0)
      }).catch((err)=>{
        alert(err)
      })
    }
  },
  mounted(){
    this.payment()
  }
}
</script>

<style lang="stylus" scoped>
.pay-wrap 
  padding: 10px 0 25px
  background: #fff
  .pay-tips
    padding: 10px
    font-size: 18px
    font-weight: 700
    color: #666
    text-align: center
  .pay-tips.enhance
    color: #c60023
  .img-con
    margin: 0 auto
    width: 300px
    height: 300px
    overflow: hidden
    background: #fff
    border: 1px solid #ddd
    .qr-code
      width: 100%
      height: 100%
</style>
