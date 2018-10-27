import http from 'utils/http.js'
import api from '../api/searchList.js'

//首页内容请求
const getSearchList = (options) =>  http.get(api.API_SEARCH_LIST,options);

export {
  getSearchList
}