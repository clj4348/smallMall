<template>
  <div>
    <h2 class="panel-title">收货地址</h2>
    <div class="panel-body address-list clearfix">
      <a class="address-item" v-for="(item, index) of list" :key="item.id">
        <div class="address-title">
          <span class="city">{{item.receiverProvince}} {{item.receiverCity}}</span>
          <span class="name">（
           {{item.receiverName}} 收 ）
          </span>
        </div>
        <div class="address-detail">
          {{item.receiverAddress}} {{item.receiverMobile}}
        </div>
        <div class="address-opera">
          <span class="link address-update">编辑</span>
          <span class="link address-delete">删除</span>
        </div>
      </a>
      <div class="address-item add" @click="showHide">
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
  props: {
    addressList: Array
  },
  data(){
    return {
      list: []
    }
  },
  computed: {
   
  },
  methods: {
    showHide() {
      this.$emit('showHide', true)
    }
  },
  mounted () {
    this.$watch('addressList', (newVal, oldVal) => {
      this.addressList = newVal
      this.list = newVal
      console.log(this.list[1].receiverProvince)
    })
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