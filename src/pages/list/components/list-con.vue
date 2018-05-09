<template>
	<div class="srot-con">
		<ul class="p-list-con" v-if="contentlist.length > 0">
		<li class="p-item" v-for="item of contentlist" 
			v-if="item.mainImage != null && item.mainImage != ''">
			<div class="p-img-con">
				<a class="link" href="./detail.html?productId=" target="_blank">
					<img class="p-img" 
					:src="item.mainImage.indexOf(item.imageHost) != -1 ? item.mainImage : (item.imageHost + item.mainImage) " :alt="item.name"/>
				</a>
			</div>
			<div class="p-price-con">
				<span class="p-price">￥{{item.price}}</span>
			</div>
			<div class="p-name-con">
				<a href="./detail.html?productId=" class="p-name">{{item.name}}</a>
			</div>
		</li>
		</ul>
		<p v-else class="err-tip">很抱歉，实在找不到您的商品。</p>
	</div>
</template>
<script>
	export default{
		name: 'ListCon',
		props: {
			contentlist: Array
		}
	}
</script>
<style lang="stylus" scoped>
	/* 列表 */
	.p-list-con{
		margin-top: 15px;
		margin-right: -20px;
		overflow: hidden;
	}

	.p-list-con .p-item{
		position: relative;
		width: 180px;
		float: left;
		padding: 10px;
		margin:0 20px 20px 0;
		background: #fff;
	}

	.p-list-con .p-item .p-img-con{
		width: 180px;
		height: 200px;
	}

	.p-list-con .p-item .p-img-con .p-img{
		width: 100%;
		height: 100%;
	}
	.p-list-con .p-item .p-price-con{
		height: 30px;
		line-height: 30px;
	} 

	.p-list-con .p-item .p-price-con .p-price{
		font-size: 16px;
		color: #e7380d;
	}

	.p-list-con .p-item .p-name-con{
		height: 40px;
		overflow: hidden;
	}

	.p-list-con .p-item .p-name-con .p-name{
		line-height: 20px;
		margin-bottom: 10px;
		color: #666;
		text-decoration: none;
	}

	/* 错误信息 */
	.err-tip{
		padding: 0 10px;
		height: 60px;
		line-height: 60px;
		font-size: 16px;
		color: #f60;
		text-align: center;
		background: #eee;
	}
</style>
