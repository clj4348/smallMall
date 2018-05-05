<template>
	<div>
		<div class="footer">
		 	<div class="w">
		 		<div class="links">
		 			<a href="http://www.imooc.com" target="_blank" class="link">慕课网</a> | 
		 			<a href="https://www.baidu.com" target="_blank" class="link">百度</a> | 
		 			<a href="https://www.taobao.com" target="_blank" class="link">淘宝</a> | 
		 			<a href="https://www.zhihu.com" target="_blank" class="link">知乎</a> | 
		 		</div>
		 		<p class="copyright">
		 			Copyright © 2017 happymmall.com All Right Reserved
		 		</p>
		 	</div>
		 </div>
	</div>
</template>

<script>
	export default{
		name: 'Footer',
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
	.footer
		padding-bottom: 10px
		.links
			text-align: center
			color: #666
			line-height: 30px
			.link
				padding: 0 10px
	.copyright
		text-align: center
		color: #666
		line-height: 30px
</style>
