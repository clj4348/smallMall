<template>
	<div>
		<Header></Header>
		<Search></Search>
		<index-nav></index-nav>
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
	mounted () {
		axios.get('../../../static/mock/index.json')
			.then((res) => {

			})
			.catch((arr) => {

			})
	}
}
</script>
<style lang="stylus" scoped>
	
</style>
