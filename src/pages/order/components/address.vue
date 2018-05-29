<template>
  <div>
    <h2 class="panel-title">收货地址</h2>
    <div class="panel-body address-list clearfix">
      <a class="address-item" data-id="3851">
        <div class="address-title">
          <span class="city">深圳 广东省</span>
          <span class="name">（ clj 收 ）</span>
        </div>
        <div class="address-detail">松岗 13725645427</div>
        <div class="address-opera">
          <span class="link address-update">编辑</span>
          <span class="link address-delete">删除</span>
        </div>
      </a>
      <a class="address-item" data-id="3852">
        <div class="address-title">
          <span class="city">广州 广东省</span>
          <span class="name">（ clj 收 ）</span>
        </div>
        <div class="address-detail"> 天河 136012341342 </div>
        <div class="address-opera">
          <span class="link address-update">编辑</span>
          <span class="link address-delete">删除</span>
        </div>
      </a>
      <div class="address-item add">
        <div class="address-new">
          <i class="fa fa-plus"></i>
          <div class="text">使用新地址</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Address',
  data(){
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>

  .address-item 
    margin: 20px 20px 0 0
    width: 200px
    float: left
    height: 100px
    padding: 10px
    border: 3px dashed #ccc
    cursor: pointer
    .address-title
      font-size: 12px
      color: #666
      padding-bottom: 3px
      border-bottom: 1px solid #ddd
    .address-detail
      margin-top: 5px
      height: 36px
      overflow: hidden
      color: #666
      font-size: 14px
    .address-opera
      text-align: right
      visibility: hidden
      font-size: 12px
    &:hover .address-opera
      visibility: visible
    .address-new 
      padding: 6px
      text-align: center
      color: #ccc

</style>