<template>
  <div>
    <Search @search="search"></Search>
    <div class="crumb">
      <div class="w">
        <div class="crumb-con">
          <router-link to="/" class="link">MMall</router-link>
          <span>></span>
          <span class="link-text">商品列表</span>
        </div>
      </div>
    </div>
    <div class="page-wrap w">
      <list-sort @search-list="getChildList"></list-sort>
      <list-con :contentlist="contentlist"></list-con>
      <list-page @pageNum="pageNum"
        :paginate="paginate"
      ></list-page>
    </div>
  </div>
</template>
<script>
import Header from '../common/header'
import Search from '../common/search'
import Footer from '../common/footer'
import ListCon from './components/list-con'
import ListSort from './components/list-sort'
import ListPage from './components/list-page'
import { getSearchList } from 'service/searchList.js' 
export default{
  name: 'List',
  components: {
    ListCon,
    ListSort,
    ListPage,
    Search
  },
  data () {
    return {
      contentlist: [],
      keywordVar:'',
      navigatepageNums:[],

      paginate: {},
      firstPage: 1, //第一页
      lastPage: '',// 最后一页
      size: 0, // 当前页数
      pages: 0, // 总共多少页
      dataList:{
        keyword : this.$route.query.keyword || '',
        categoryId : this.$route.query.categoryId || '',
        orderBy : this.$route.query.orderBy || 'default', // 升序降序
        pageNum : this.$route.query.pageNum || 1,
        pageSize : this.$route.query.pageSize || 2
      }
    }
  },
  created(){
    this.getList()
  },
  methods: {
    getList () {
      getSearchList(this.dataList).then((res) => {
        this.contentlist=res.data.list
        this.paginate = res.data
      })
    },
    // 子组件传参的方法
    search(options){
      this.dataList.keyword = options,
      // 重置参数
      this.dataList.orderBy ='default', // 升序降序
      this.getList();
    },
    pageNum(idx){
      // 删除没必要的字段
      this.dataList.categoryId ? (delete this.dataList.keyword) : (delete this.dataList.categoryId);
      this.dataList.pageNum = idx
      this.getList();
    },
    // 子组件与父组件之间的通信
    getChildList(params){
      // 删除没必要的字段
      this.dataList.categoryId ? (delete this.dataList.keyword) : (delete this.dataList.categoryId);

      // 判断是否为默认状态
      if(params.default === 1){
          // 升序降序处理
        if(params.price === '' || params.price === 1){
          this.dataList.orderBy = 'price_asc';
        }else{
          this.dataList.orderBy = 'price_desc';
        }
      }else {
        this.dataList.orderBy = 'default'; 
      }
      this.getList()
    }
  }
}
</script>
<style lang="stylus" scoped>
  
</style>
