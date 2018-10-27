import http from 'utils/http.js'
import api from '../api/register.js'

// 用户名检测是否存在
const postCheckValid = (options) =>  http.post(api.API_CHECK_VALID,options);
const postRegister = (options) =>  http.post(api.API_REGISTER,options);

export {
  postCheckValid,
  postRegister
}