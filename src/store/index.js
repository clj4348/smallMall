import Vue from 'vue'
import Vuex from 'vuex'
import { userMsg, token } from './user/state'
import userMutations from './user/mutations'
import { defaultCartCount, setlectAllChecked, defaultCartTotalPrice } from './cart/state'
import cartMutations from './cart/mutations'
Vue.use(Vuex)


let store = new Vuex.Store({
	// 1. state
	state: {
		token,	
		userMsg,
		cartCount:defaultCartCount,
		totalSelection: setlectAllChecked,
		totalPrice : defaultCartTotalPrice
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
		changeToken: userMutations.changeToken,
		removeToken: userMutations.removeToken,
		changeUserMsg: userMutations.changeUserMsg,
		removeUserMsg: userMutations.removeUserMsg,
		changeCartCount: cartMutations.changeCartCount,
		changeSelectAll: cartMutations.changeSelectAll,
		changeTotalPrice:cartMutations.changeTotalPrice
	}
})


export default store;