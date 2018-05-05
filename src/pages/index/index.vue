<template>
  <div>
    <Header></Header>
    <Search></Search>
    <index-nav :categoryList="categoryList"></index-nav>
    <Floor :floorList="floorList"></Floor>
    <Footer></Footer>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '../common/header'
import Search from '../common/search'
import Footer from '../common/footer'

import Floor from './components/floor'
import IndexNav from './components/nav'


export default{
  name: 'Index',
  components: {
    Header,
    Footer,
    Search,
    IndexNav,
    Floor
  },
  data () {
    return {
      categoryList: [], // 分类导航
      floorList: [] // 商品楼层 
    }
  },
  methods: {
    getIndexInfo () {
      axios.get('../../../static/mock/index.json')
      .then((res) => {
        const msg = res.data
        this.categoryList = msg.data.categoryNav
        this.floorList = msg.data.floorList
      })
      .catch((arr) => {
      })
    }
  },
  mounted () {
    this.getIndexInfo()
  }
}
</script>
<style lang="stylus" scoped>
  
</style>
