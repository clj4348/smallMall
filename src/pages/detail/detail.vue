<template>
	<div>
		<Header></Header>
    <Search></Search>
    <div class="page-container w">
    	商品详情
    	<div class="intro-wrap clearfix">
    		<goods-banner></goods-banner>
    		<Sku></Sku>
    	</div>
    	<goods-info></goods-info>
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
import GoodsBanner from './components/goodsBanner'
import GoodsInfo from './components/goodsInfo'
import Sku from './components/sku'

export default{
	name: 'List',
	components: {
		Header,
		Search,
		Footer,
		GoodsBanner,
		GoodsInfo,
		Sku
	},
	data () {
		return {
			a : ''
		}
	},
	methods: {

	},
	mounted () {
	}
}
</script>

<style lang="stylus" scoped>
	.intro-wrap{
		overflow: hidden;
	}
</style>
