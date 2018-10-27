import http from 'utils/http.js'
import api from '../api/userInfo.js'

// 获取用户信息
const getUserInfo = (options) =>  http.post(api.API_GET_USER_INFO,options);
// 获取购物车数量
const getCartProductCount = () => http.get(api.API_GET_CART_PRODUCT_COUNT);
// 退出登录
const logout =() => http.post(api.API_LOGOUT); 
export {
  getUserInfo,
  getCartProductCount,
  logout
}