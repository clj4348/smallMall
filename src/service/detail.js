import http from 'utils/http.js'
import api from '../api/detail.js'

//首页内容请求
const getDetail = (options) =>  http.get(api.API_DETAIL,options);
// 添加购物车
const getCartAdd = (options) => http.get(api.API_CART_ADD,options); 
export {
  getDetail,
  getCartAdd
} 