<template>
  <div>
    <div class="w">
      <index-nav :categoryList="categoryList"></index-nav>
      <Banner :bannerList="bannerList"></Banner>
    </div>
    <Floor :floorList="floorList"></Floor>
  </div>
</template>
<script>
import Floor from './components/floor'
import IndexNav from './components/nav'
import Banner from './components/banner'
import {getIndexInfo} from 'service/index.js' 

export default{
  name: 'Index',
  components: {
    IndexNav,
    Banner,
    Floor,
  },
  data () {
    return {
      categoryList: [], // 分类导航
      floorList: [], // 商品楼层
      bannerList: [], // banner图
      arr:[]
    }
  },
  created(){
    getIndexInfo().then((res)=>{
      const msg = res.data
      this.categoryList = msg.categoryNav
      this.floorList = msg.floorList
      this.bannerList = msg.swiperList
      this.arr = this.arr.concat(this.bannerList)
      this.arr.splice(2,1);
    })
  }
}
</script>
<style lang="stylus" scoped>
  
</style>
