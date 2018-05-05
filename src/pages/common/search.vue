<template>
	<div>
		<div class="header">
			<div class="w">
				<a href="./index.html" class="logo">MMall</a>
				<div class="search-con">
					<input class="search-input" id="search-input" placeholder="请输入商品名称" />
					<button class="btn search-btn" id="search-btn" >搜索</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Search',
		data () {
			return {
				index: 0
			}
		},
		mounted () {
		}
	}
</script>

<style lang="stylus" scoped>
.header 
	.logo
		position: absolute
		left: 60px
		top: 34px
		display: block
		font-size: 36px
		color: #c60023
		font-weight: bold
	.search-con
		padding: 40px 0 30px 250px
		.search-input
			width: 550px
			height: 40px
			line-height: 40px
			padding-left: 10px
			border: 2px solid #c60023
		.search-btn
			position: absolute
			height: 44px
			width: 80px
/* 面包屑导航 */
.crumb
	margin-bottom: 15px
	height: 50px
	line-height: 50px
	background: #eee
	color: #888
	font-size: 14px
	border-top: 2px solid #c60023
</style>
