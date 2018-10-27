import http from 'utils/http.js'
import api from '../api/login.js'


const postLogin = (options) =>  http.post(api.API_LOGIN,options); // 首页内容请求

export {
  postLogin
}