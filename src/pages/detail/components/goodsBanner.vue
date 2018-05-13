<template>
	<div class="p-img-con">
		<div class="main-img-con">
			<img class="main-img" src="http://img.happymmall.com/c0660370-8f18-48a1-be87-57bd47cb7439.jpg">
		</div>
		<ul class="p-img-list">
			<li class="p-img-item">
				<img class="p-img" src="http://img.happymmall.com/af13decd-5999-4ef8-a1f4-be2e975012ff.jpg">
			</li>
			<li class="p-img-item">
				<img class="p-img" src="http://img.happymmall.com/56218d54-1605-464e-a0d3-3da0b2c97aff.jpg">
			</li>
			<li class="p-img-item">
				<img class="p-img" src="http://img.happymmall.com/c0660370-8f18-48a1-be87-57bd47cb7439.jpg">
			</li>
			<li class="p-img-item">
				<img class="p-img" src="http://img.happymmall.com/a935fa91-d73a-453d-9a73-8b5155732336.jpg">
			</li>  <li class="p-img-item">
				<img class="p-img" src="http://img.happymmall.com/c3d6715e-3bee-41bc-bc19-7ca69f9e79a6.jpg">
			</li>
		</ul>
	</div>
</template>
<script>

export default{
	name: 'GoodsBanner',
	components: {

	}
}
</script>

<style lang="stylus" scoped>
	/* 图片区 */
 .p-img-con {
	float: left;
	width: 420px;
}


/*主图*/
.p-img-con .main-img-con{
	height: 400px;
	border: 1px solid #ddd;
}

.p-img-con .main-img-con .main-img{
	height: 100%;
	width: 100%;
}
/* 缩略图 */
.p-img-con .p-img-list{
	height: 76px;
	overflow: hidden;
	margin-top: 5px;
	margin-right: -10px;
}

.p-img-con .p-img-item{
	float: left;
	margin-right: 10px;
	width: 72px;
	height: 72px;
	border: 2px solid #eee;
	cursor: pointer;
}
.p-img-con .p-img-item:hover{
	border: 2px solid #c60023;
}
/* 商品详细信息 */
.p-img-con .p-img-item .p-img{
	width: 100%;
	height: 100%;
}

</style>
