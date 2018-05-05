<template>
  <div class="w">
    <!-- F1 -->
    <div class="floor-wrap" v-for="(item, index) of floorList" :key="index">
      <h1 class="floor-title">F{{(index+1) +" " + item.title}}</h1>
      <ul class="floor-list clearfix">
        <li class="floor-item" v-for="(itemChild, indexChild) of item.children" :key="indexChild">
          <a href="./list.html?categoryId=100006">
            <span class="floor-text">{{itemChild.goodsName}}</span>
            <img class="floor-img" :src="itemChild.imgUrl" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default{
  name: 'Floor',
  props:{
    floorList: Array
  },
  data () {
    return {
      list: this.floorList
    }
  },
  computed:{
    add() {
      this.list.forEach((item, index)=>{
        item.title
      })
      return 
    }
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.floor-wrap 
  .floor-title
    height: 50px
    line-height: 50px
    color: #d58717
    font-weight: normal
    font-size: 20px
    border-bottom: 1px solid #d58717
  &:nth-child(2)
    .floor-title
      color: #3b838c;
      border-bottom: 1px solid #3b838c
  &:nth-child(3)
    .floor-title
      color: #a93931
      border-bottom: 1px solid #a93931
  &:nth-child(4)
    .floor-title
      color: #488bad
      border-bottom: 1px solid #488bad
  &:nth-child(5) 
    .floor-title
      color: #642663
      border-bottom: 1px solid #642663
  .floor-list
    margin-right: -20px
    .floor-item
      position: relative
      width: 200px
      height: 220px
      margin: 15px 20px 15px 0
      float: left
      cursor: pointer
      background: #fff
      &:hover
        box-shadow: 1px 1px 10px rgba(0,0,0,.1)
      .floor-text
        position: absolute
        top: 12px
        left: 20px
        font-size: 16px
        color: #555
      .floor-img
        position: absolute
        right: 15px
        bottom: 10px
        width: 80%
        height: 75%
        border: none
</style>
