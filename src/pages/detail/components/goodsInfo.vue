<template>
  <div class="detail-wrap ">
    <ul class="tab-list">
      <li class="tab-item active">商品详情</li>
    </ul>
    <div class="detail-con" v-html="detailDesc"></div>
  </div>
</template>
<script>

export default{
  name: 'GoodsInfo',
  props:{
    detailDesc: String
  }
}
</script>

<style lang="stylus" scoped>
  /* 商品详细信息 */
.detail-wrap 
  margin-top: 15px
  .tab-list
    background: #eee
    border: 1px solid #ddd
    overflow: hidden
    border-bottom: 1px solid #c60023
    .tab-item
      float: left
      width: 100px
      height: 50px
      line-height: 50px
      font-size: 16px
      text-align: center
      cursor: pointer
      &.active
        background: #c60023
        color: #fff
   .detail-con
      font-size: 0
      padding-top: 20px
      background: #fff
      width: 100%
      text-align: center
      img
        display: block
        width: 100%
        margin: 0 auto 0
/* 错误信息 */
.err-tip
  padding: 0 10px
  height: 60px
  line-height: 60px
  font-size: 16px
  color: #f60
  text-align: center
  background: #eee
</style>
