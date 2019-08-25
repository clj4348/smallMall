<template>
  <ul class="sort-con clearfix">
    <li class="sort-item" :class="{'active': act === 0}" @click="actAn(0)">默认排序</li>
    <li class="sort-item" :class="{'active': act === 1}" @click="actAn(1)">
      <span>价格</span>
      <i class="iconfont fa-sort-asc" :style="{'opacity' : actBefore == 2 ? '0.6' : ''}">&#xe78f;</i>
      <i class="iconfont fa-sort-desc" :style="{'opacity' : actBefore == 1 ? '0.6': ''}">&#xe791;</i>
    </li>
  </ul>
</template>
<script>
  export default{
    name: 'ListSort',
    data () {
      return {
        act: 0,
        actBefore: ''
      }
    },
    methods:{
      actAn(option) {
        if(option == 1){
          this.act = option
          this.actBefore = this.actBefore == 1 ? 2 : 1; 
        }else {
          this.actBefore = ''
          this.act = option
        }
        this.$emit('search-list',{default:this.act,price:this.actBefore})
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .srot-con
    overflow: hidden
    .sort-item
      float: left
      display: inline-block
      position: relative
      padding: 0 8px
      width: 60px
      height: 24px
      line-height: 24px
      border: 1px solid #ccc
      margin-right: -1px
      background: #fff
      columns: #333
      cursor: pointer
      &.active
        background: #c60023
        border: 1px solid #c60023
        color: #fff
      .fa-sort-asc
        position: absolute
        top: -4px
        right: 4px
      .fa-sort-desc
        position: absolute
        top: 4px
        right: 4px
      &.asc .fa-sort-asc
        opacity: .6
      &.desc .fa-sort-desc
        opacity: .6
</style>
