<template>
  <div class="pg-content">
    <span class="pg-total pg-item" @click="prevPage()">上一页</span>
    <span class="text pg-item" @click="firstPage()">第一页</span>
    <span class="pg-item"
      v-for="item of indexs"
      :class="{'active': numAct === item}"
      @click="numActive(item)"
      :key="item">{{item}}
    </span>
    <span class="text pg-item" @click="lastPage()">最后一页</span>
    <span class="pg-total pg-item" @click="nextPage()">下一页</span>
    <span class="text">&nbsp;&nbsp; 第{{paginatePlugins.pageNum}}/{{paginatePlugins.pages}}页</span>
  </div>
</template>
<script>
  export default{
    name: 'ListPage',
    props: {
      paginate: Object
    },
    data () {
      return {
        numAct: 1, // 当前页码
        paginatePlugins: {},
        cur: []
      }
    },
    computed: {
      indexs () {
        let left = this.numAct // 当前页数
        let right = this.paginatePlugins.pages // 总页数
        // 空数组
        let arr = []
        // 判读页数是否大于5页
        if(this.paginatePlugins.pages >= 5){
          // 当前页数是否 大于 3页 并且 小于最后 两页
          if(this.numAct > 3 && this.numAct < this.paginatePlugins.pages-2){
            left = this.numAct - 2
            right = this.numAct + 2
          }else{
            // 如果小于 3 回到初始值
            if(this.numAct <= 3){
              left = 1
              right = this.paginatePlugins.pages >= 5 ? 5 : this.paginatePlugins.pages
            }else {
              // 否 从新计算页数
              right = this.paginatePlugins.pages
              left = this.paginatePlugins.pages  - 4
            }
          }
        }else{
          left = 1
          right = this.paginatePlugins.pages
        }
        while (left <= right){
          arr.push(left)
          left ++
        }
        return arr
      }
    },
    methods: {
      numActive(index){
        this.numAct = index
        this.$emit('pageNum', this.numAct);
      },
      // 第一页
      firstPage(){
        this.$emit('pageNum', this.paginatePlugins.firstPage);
        this.numAct = this.paginatePlugins.firstPage
      },
      // 最后一页
      lastPage() {
        this.$emit('pageNum', this.paginatePlugins.lastPage);
        this.numAct = this.paginatePlugins.lastPage
      },
      // 下一页
      nextPage(){
        if(this.numAct >= this.paginatePlugins.lastPage) return
        this.numAct = this.paginatePlugins.nextPage
        this.$emit('pageNum', this.numAct);
      },
      // 上一页
      prevPage() {
        if(this.numAct <= this.paginatePlugins.firstPage) return
           this.numAct = this.paginatePlugins.prePage
        this.$emit('pageNum', this.numAct); 
      }
    },
    watch: {
      paginate(newVal, odlVal){
        this.paginatePlugins = newVal
      },
      numAct(newVal, odlVal) {
        this.numAct = newVal
        console.log(this.indexs)
      }    
    },
    mounted(){

    }
  }
</script>
<style lang="stylus" scoped>
  .pg-content
    text-align: center
    color: #333
    .pg-item
      display: inline-block
      height: 36px
      line-height: 36px
      padding: 0 15px
      margin: 0 2px
      border: 1px solid #ccc
      background: #eee
      cursor: pointer
      -webkit-user-select: none
      -moz-user-select: none
      user-select: none
      &.disabled
        color: #ccc
        background: none
        cursor: auto
      &.active
        border: 1px solid #f6f6f6
        background: none
        cursor: auto
    .pg-total
      margin-left: 10px
      background: none
      cursor: auto
</style>
