<template>
	<div>
		<div class="mui-content">
			<div class="login-position">
				<form class="mui-input-group" id="editform">
					<div class="mui-input-row">
						<span>手机号</span>
						<input type="tel" 
							maxlength="11"
							v-model="userInfo.loginName" 
							autocomplete="off">
					</div>
					<div class="mui-input-row">
						<span>密码</span>
						<span class="icon icon-open-pwd" id="openPwd"></span>
						<input type="password" v-model="userInfo.password" maxlength="25" autocomplete="off" />
					</div>
				</form>
				<div class="code-box">
					<button type="button" class="code-btn" @click="login">登录</button>
				</div>
				<div class="fogotPW">
					<span id="findPassword">找回密码</span>
					<span class="mui-pull-right" id="regist">注册</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from  'axios'
	export default{
		name: 'Login',
		data () {
			return {
				userInfo: {
					loginName: '',
					password: '',
				}
			}
		},
		methods: {
			login(){
				console.log(1);
				axios.post('/api/user/login.do',this.userInfo)
					.then(function(){

					})
					.catch(function(err){
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
.mui-input-group,
.mui-content {
	background: none;
}

.header {
	padding: 20px 20px 0;
}

.header .icon {
	font-size: 20px;
}

.mui-content {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: auto;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	padding: 0 20px;
}

.mui-input-group .mui-input-row {
	position: relative;
	height: auto;
	width: 100%;
	margin-bottom: 30px;
	overflow: initial;
}

.errorTel {
	bottom: -24px;
	width: auto;
}

.mui-input-group:before,
.mui-input-group:after {
	height: 0;
}

.mui-input-group .mui-input-row:after {
	height: 0;
}

button:disabled {
	opacity: 1;
}
.user-name{
	padding-bottom: 15px;
}
#name{
	display: block;
	padding-bottom: 0px;
}
.user-name input{
	border-width: 0px;
	line-height: 40px;
	padding-left: 0;
	width: 100%;
	background: none;
	margin-bottom: 0;
}
#indexline{
	background: #757575;
	height: 1.3px;

}

.mui-input-group .mui-input-row input {
	border-bottom: 1px solid #757575;
	line-height: 40px;
	padding-left: 0;
}

.mui-input-row .mui-input-speech~.mui-icon-speech {
	top: 30px;
	width: auto;
	height: auto;
}

.code-box {
	margin-top: 40px;
	text-align: center;
}

.code-box.sub-pwd {
	display: none;
}

.code-btn {
	width: 90%;
	height: 44px;
	background: #f2b035;
	color: #fff;
	border: none;
	opacity: 1;
	max-width: 340px;
	font-size: 20px;
}

.code-verification {
	position: fixed;
	top: 45%;
	left: 0;
	right: 0;
	margin: auto;
	margin-top: -30%;
	background: #fff;
	z-index: 10;
	max-width: 300px;
	border-radius: 6px;
	padding: 20px 25px 20px 25px;
	display: none;
}

.code-verification.act {
	animation: rock 2s infinite;
	-webkit-animation: rock 2s infinite;
}

.code-verification input {
	border: none;
	border-bottom: 1px solid #757575;
	height:40px;
	width: 100%;
	padding: 0;
	margin-top: 20px;
	border-radius: 0;
}

.code-verification button {
	margin-top: 30px;
	width: 100%;
}

.show-num {
	height: 40px;
	border-bottom: 1px solid #757575;
	margin-bottom: 24px;
	line-height: 40px;
}


.login-thirdpart {
	position: fixed;
	left: 0;
	right: 0;
	margin: auto;
	width: 200px;
	text-align: center;
}

.login-thirdpart img {
	display: block;
	width: 60px;
	margin: auto;
}

.login-thirdpart p {
	margin-top: 10px;
}

.hr {
	position: absolute;
	width: 2px;
	height: 85px;
	background: #fff;
	bottom: -85px;
	left: 0;
	right: 0;
	margin: auto;
}

#close {
	position: absolute;
	bottom: -107px;
	width: 24px;
	color: #fff;
	height: 24px;
	left: 0;
	right: 0;
	margin: auto;
}

.icon-cancel:before {
	color: #fff;
}

.count-down {
	position: relative;
	text-align: center;
	margin-top: 20px;
}

.count-down button {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	margin-top: 0;
	z-index: 2;
	opacity: 0;
}

#openPwd {
	position: absolute;
	bottom: 3px;
	right: 0;
	padding: 10px;
}

.fogotPW{
	margin:25px 20px 0 20px;
}

.fogotPW span{
	font-size: 16px;
	color: #212121;
}


</style>