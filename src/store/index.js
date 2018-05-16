import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	// 1. state
	state: {
		// 搜索的数据
		keyword: '',
		token: null	
	},
	// 获取区属
	getters: {
		// 参数列表state指的是state中的数据
		getKeywordFn (state) {
			return state.keyword
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
		setKeyword({commit, state}, name){
			// 调用mutaions里面的方法
		}
	},

	mutations: {
		// state指的是state中的数据
		setCity(state, name){
			state.keyword = name; // 将传参设置给state的keyword
		},
		token(state, val){
			state.token = val
		}
	}
})


export default store;