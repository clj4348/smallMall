<template>
	<div>
		<Header></Header>
		<Search></Search>
		<Crumbs :title="title"></Crumbs>
		<div class="pass-update-wrap w">
			<left-nav></left-nav>
			<div class="content with-nav">
	      <div class="panel">
	        <div class="panel-body">
	        	<router-view></router-view>  
	        </div> 
      	</div>
    	</div>
    </div>
		<Footer></Footer>
	</div>
</template>
<script>
import Header from '../common/header'

import Search from '../common/search'
import Footer from '../common/footer'
import Crumbs from '../common/crumbs'
import LeftNav from './user-common/left-nav'

export default{
	name: 'User',
	components: {
		Header,
		Search,
		Footer,
		Crumbs,
		LeftNav
	},
	data () {
		return {
			title: '个人中心',
		}
	}
}
</script>

<style lang="stylus" scoped>
.content
	float: left
	width: 950px
	.panel-body
		padding: 10px 0
</style>
