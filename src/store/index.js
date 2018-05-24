import Vue from 'vue'
import Vuex from 'vuex'
import {
	token,
	userMsg
} from './user/state.js'

import userMutains from './user/mutations.js'

Vue.use(Vuex)
let store = new Vuex.Store({
	// 1. state
	state: {
		token,
		userMsg
	},

	// 获取区属
	getters: {
		loginStatus: (state) => {
			return state.userMsg.status
		},
		// 参数列表state指的是state中的数据
		username: (state) => {
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
		changeToken(ctx, tokens) {

		},
		changeUserMsg(ctx, userInfo) {
			// 调用mutaions里面的方法
		}
	},

	mutations: {
		changeToken: userMutains.changeToken,
		changeUserMsg: userMutains.changeUserMsg,
		removeToken: userMutains.removeToken,
		removeUserMsg: userMutains.removeUserMsg
	}
})


export default store;