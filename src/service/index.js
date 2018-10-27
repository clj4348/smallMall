import http from 'utils/http.js'
import api from '../api/index.js'

//首页内容请求
const getIndexInfo = () =>  http.get(api.API_INDEX,{});

export {
  getIndexInfo
}