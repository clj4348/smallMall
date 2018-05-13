<template>
	<div class="p-info-con">
		<p class="p-name">Apple iPhone X (A1865) 全面屏手机 64GB 深空灰色</p>
		<p class="p-subtitle">全面屏，全面绽放</p>
		<div class="p-info-item p-price-con">
			<span class="lable">价格:</span>
			<span class="p-price">￥8316</span>
		</div>
		<div class="p-info-item p-quantity-con">
			<span class="lable">库存:</span>
			<span class="p-price">9945</span>
		</div>
		<div class="p-info-item p-count-con">
			<span class="lable">数量:</span>
			<input class="p-count" value="1" readonly="readonly">
			<span class="p-count-btn plus" data-opera-type="plus">+</span>
			<span class="p-count-btn minus" data-opera-type="minus">-</span>
		</div>
		<div class="p-info-item">
			<a class="btn cart-add">加入购物车</a>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Sku'
}
</script>

<style lang="stylus" scoped>
	/* 商品信息 */
.p-info-con 
	float: left
	width: 640px
	margin-left: 20px
	.p-name
		font-size: 20px
		color: #333
	.p-subtitle
		font-size: 15px
		color: #c60023
		line-height: 30px
	.p-info-item
		position: relative
		padding: 0 10px
		margin-top: 20px
		.lable
			display: inline-block
			width: 50px
			color: #999
		/* 价格部分 */
		.p-price-con
			background: #eee
			padding: 10px
			.info
				color: #c60023
				font-size: 18px
		/* 数量部分 */
		.p-count
			height: 36px
			line-height: 36px
			font-size: 15px
			width: 45px
			text-align: center
			outline: none
			border: 1px solid #aaa
		.p-count-btn
			position: absolute
			left: 115px
			display: block
			width: 20px
			height: 15px
			line-height: 15px
			text-align:center
			font-size: 10px
			border: 1px solid #aaa
			background: #fff
			cursor: pointer
			user-select: none
			-webkit-user-select: none
			-moz-user-select: none
			-ms-user-select: none
			&.plus
				top: 0
			&.minus
				bottom: 0

</style>
