import http from 'utils/http.js'
import api from '../api/cart.js'

//首页内容请求
const getCartList = (options) =>  http.get(api.API_CART_LIST); // 购物车列表
export {
  getCartList
}