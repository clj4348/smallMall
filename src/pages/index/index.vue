<template>
  <div>
    <Header></Header>
    <Search></Search>
    <index-nav :categoryList="categoryList"></index-nav>
    <Footer></Footer>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '../common/header'
import Search from '../common/search'
import Footer from '../common/footer'
import IndexNav from './components/nav'

export default{
  name: 'Index',
  components: {
    Header,
    Footer,
    Search,
    IndexNav,
  },
  data () {
    return {
      categoryList: [] // 分类导航
    }
  },
  methods: {
    getIndexInfo () {
      axios.get('../../../static/mock/index.json')
      .then((res) => {
        const msg = res.data
        this.categoryList = msg.data.categoryNav;
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
