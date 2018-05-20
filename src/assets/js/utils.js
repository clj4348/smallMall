class mm{
	constructor() {
		this.ls = window.localStorage;
	}

	// 格式化时间
	formatPassTime(timestamp) {
		let oldDate = new Date(timestamp.replace(/\S/, 'T')); //旧的时间戳
		let year = oldDate.getFullYear(); //格式化年份
		let month = oldDate.getMonth() + 1 < 10 ? '0' + (oldDate.getMonth() + 1) : oldDate.getMonth(); //格式化月份
		let day = oldDate.getDate() < 10 ? '0' + oldDate.getDate() : oldDate.getDate(); //格式化天数
		let now = new Date(); //当前时间戳
		// 转换为秒级的时间戳
		let timer = (now - oldDate) / 1000;
		let tip = ''; //空的字符串

		if(timer <= 0) {
			tip = '刚刚';
		} else if(Math.floor(timer / 60 <= 5)) { //小于五分钟就设为 '刚刚'
			tip = '刚刚';
		} else if(timer < 3600) { //小于一小时就设为 '多少分钟前'
			tip = Math.floor(timer / 60) + '分钟前';
		} else if(timer >= 3600 && timer < 3600 * 24) { //大于或等于一小时 并且小于一天就设为 '多少小时前'
			tip = Math.floor(timer / 3600) + '小时前';
		} else if(timer / (3600 * 24) <= 31) { // 小于一个月就设为 '多少天前'
			tip = Math.floor(timer / (3600 * 24)) + '天前';
		} else {
			tip = `${year}-${month}-${day}`;
		}
		return tip;
	}
	getUrl(){
		let strUrl = window.location.href;
		let arrUrl = strUrl.split("/");
		let strPage = arrUrl[arrUrl.length-1];
		let indexof = strPage.indexOf("?");
		if(indexof != -1){
		  strPage = strPage.substr(0,strPage.indexOf("?"));
		}
		return strPage
	}
	// 获取url的参数
	getUrlParam(name) {
		let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		let result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	}

	// 判断是否为邮箱地址
	isEmail(str) {
		return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
	}

	// 判断是否为手机号
	isPhoneNum(str) {
		return /^(0\86\17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
	}

	// 判断是否为身份
	isIdCard(str) {
		return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
	}

	// 获取缓存数据
	getItem(key) {
		let data = this.ls.getItem(key); //如果没有数据的情况下
		data = JSON.parse(data) || {}; // 注意：如果data是null直接调用data.time就会报错

		if(data.time === 0) {
			return data.value;
		} else if(Date.now() > data.time) { // 缓存过期时间到了就清除
			this.ls.removeItem(key);
			return '';
		} else {
			return typeof data.value != 'undefined' ? data.value : '';
		}
	}

	setItem(key, value, time) {
		if(key === 'undefined') {
			return;
		}
		let data = {
			// 如果有time就等于当前的时间戳(ms),否则为0就为永久保存
			time: time ? Data.now() + time : 0,
			value
		}
		data = JSON.stringify(data); // 对象字符串系列化

		/* 为了防止超出存储
		 * 使用递归
		 * 一旦数据存储超出就清空；再重新保存
		 * */
		try {
			this.ls.setItem(key, data);
		} catch(e) {
			this.ls.clear();
			this.ls.setItem(key, data);
		}
	}

	// 清除指定的缓存
	removeItem(key) {
		this.ls.removeItem(key);
	}

	// 清空所有的缓存
	clearStorage() {
		this.ls.clear();
	}
	// 三个进行比较大小
	threeCompareSzie(a, b, c){
		// 三目表达式
		let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
		return max;
	}
	//判断两个对象是否相等
	equalObj(a,b){
		for(let p in a){
			if(a[p] !== b[p]) return false;
		}
		return true;
	}
	// 判断两个数组是否相等
	 equalArrays(arrOne, arrTwo){
		if(arrOne.length !== arrTwo.length) return false;
		for(let i = 0; i< arrOne.length; i++){
			if(arrOne[i] !== arrTwo[i]) return false;
		}
		return true;
	}
};
let utils = new mm()
export default utils