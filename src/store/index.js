import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let token = null;
let userMsg = {};
try{
	if(localStorage.userMsg){
		userMsg = JSON.parse(localStorage.userMsg)
	}
	if(localStorage.token){
		token = JSON.parse(localStorage.token)
	}
} catch(e){}

let store = new Vuex.Store({
	// 1. state
	state: {
		// 搜索的数据
		keyword: '',
		token,	
		userMsg
	},
	// 获取区属
	getters: {
		loginStatus: (state) => {
			return state.userMsg.status
		},
		// 参数列表state指的是state中的数据
		username: (state) =>{
			return state.userMsg.data.username
		}
	},
	// 3. actions
	// 通常跟api接口打交道
	actions: {
		// 设置搜索关键字的信息
		// 参数列表: {commit, state}
		// state指的是state中的数据
		// commit调用mutations的方法
		// name就是调用此方法是要传的参数
		changeToken(ctx, tokens){

		},
		changeUserMsg(ctx, userInfo){
			// 调用mutaions里面的方法
		}
	},

	mutations: {
		changeToken(state, tokens){
			state.token = tokens
			try{
				localStorage.token=JSON.stringify(tokens)
			}catch(e){

			}
		},
		removeToken(state){
			state.token = null
			localStorage.removeItem('token')
		},
		// state指的是state中的数据
		changeUserMsg(state, userInfo){
			state.userMsg = userInfo// 将传参设置给state的keyword
			try{
				localStorage.userMsg = JSON.stringify(userInfo)
			}catch(e){

			}
		},
		removeUserMsg(state){
			const params = {
				status: 1,
				data:{
					username: ''
				}
			}
			state.userMsg = params
			try{
				localStorage.userMsg = JSON.stringify(params)
			}catch(e){

			}
		}
	}
})


export default store;