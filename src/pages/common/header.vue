<template>
	<div>
		<div class="nav">
			<div class="w">
				<div class="user-info">
					<span class="user not-login">
						<span class="link js-login">登录</span>
						<span class="link js-register">注册</span>
					</span>
					<span class="user login">
						<span class="link-text">
							欢迎，
							<span class="username"></span>
							</span>
						<span class="link js-logout">退出</span>
					</span>
				</div>
				<ul class="nav-list">
					<li class="nav-item">
						<a href="javascript:;" class="link">
							<i class="fa fa-shopping-cart"></i>
							购物车(<span class="cart-count">0</span>)
						</a>
					</li>
					<li class="nav-item">
						<a href="javascript:;" class="link">我的订单</a>
					</li>
					<li class="nav-item">
						<a href="javascript:;" class="link">我的MMall</a>
					</li>
					<li class="nav-item">
						<a href="javascript:;" class="link">关于MMall</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Header',
		data () {
			return {
				a:''
			}
		},
		mounted () {
		}
	}
</script>

<style lang="stylus" scoped>
.nav
	background: #eee
	height: 30px
	line-height: 30px
	.user
		float: left
		.login
			display: none
			.link
				margin-right: 5px
	.nav-list
		float: right
		.nav-item
			display: inline-block
			margin-left: 5px
</style>
