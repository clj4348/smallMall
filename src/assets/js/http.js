import axios from 'axios'
import Qs from 'qs'
/*
* axios请求拦截
* @param {object} config axios请求配置对象
* @return {object} 请求成功或失败时返回的配置对象或者promise error对象
*/
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
    return Promise.reject(error)
  }
)

/**
* axios 响应拦截器
* @param {object} response 从服务端响应的数据对象或者error对象
* @return {object} 响应成功或失败时返回的响应对象或者promise error对象
**/
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.resolve(error)
})

function successStatus (res) {
  // loading 
  // 如果 http 状态吗正常，成功回调
  if(res && (res.status === 200 || res.status === 304 || res.status === 400)){
    return res.data
  }
  alert('网络请求出错了')
}

// post和get 方法
export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: Qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-Width': 'XMLHttpRequest',
        'Content-Type':'application/x-www-form-urlencoded; charst=UTF-8'
      }
    }).then((res) => {
      return successStatus(res)
    })
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then((res) => {
      return successStatus(res)
    })
  }
}