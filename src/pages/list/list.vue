<template>
	<div>
		<Header></Header>
		<Search></Search>
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
    	<list-sort></list-sort>
			<list-con :contentlist="contentlist"></list-con>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
import Header from '../common/header'
import Search from '../common/search'
import Footer from '../common/footer'
import ListCon from './components/list-con'
import ListSort from './components/list-sort'
export default{
	name: 'List',
	components: {
		Header,
		Search,
		Footer,
		ListCon,
		ListSort
	},
	data () {
		return {
			contentlist: [],
			dataList:{
				keyword : this.utils.getUrlParam('keyword') || '',
				categoryId : this.utils.getUrlParam('categoryId') || '',
				orderBy : this.utils.getUrlParam('orderBy') || 'default',
				pageNum : this.utils.getUrlParam('pageNum') || 1,
				pageSize : this.utils.getUrlParam('pageSize') || 10
			}
		}
	},
	methods: {
		getList () {
			let listParm  = Qs.stringify(this.dataList)
			axios.get('/api/product/list.do', {
				params:this.dataList
			})
			.then((res) => {
				this.contentlist=res.data.data.list
			})
			.catch((err) => {

			})
		}
	},
	mounted () {
		this.getList()
	}
}
</script>
<style lang="stylus" scoped>
	
</style>
