// 数据进行处理
const convertData = (data) => {
  // 是否为对象
  if(typeof data === 'object') {
    let converResult = "";
    for(let item in data) {
      // 字符串给拼接起来 a=a&b=b
      converResult += item + "=" + data[item] + "&"
    }
    converResult = converResult.substring(0, converResult.length - 1)
    return converResult
  } else {
    return data;
  }
}
  
const ajax = (url, params) => {
  let httpData = {
    type: (params.type && params.type.toLocaleUpperCase()) || "GET", // 请求方式
    async: params.async || true, // 是否为异步默认为异步
    data: params.data || null, // 参数
    dataType: params.dataType || "json", // 请求类型
    timeOut: params.timeOut || 50000,
    contentType: params.contentType || "application/x-www-form-urlencoded", //请求头
  }
  const xhr = new XMLHttpRequest(); // 创建http
  let timeOutFlag = false;
  const timeOut = setTimeout(() => {
    timeOutFlag = true
    xhr.abort(); // 终止请求
  }, timeOut)
  
  xhr.responseType = "json"; // 接收数据类型
  // 如果是get请求就 使用url传惨
  if(httpData.type === "GET") {
    url = url + '?' + convertData(httpData.data) // url拼接
  }
  xhr.open(httpData.type, url, httpData.async); // 请求方式 open第三个参数关系到是否为异步，true为异步，false为同步
  if(params.contentType) {
    for(let item in params.contentType) {
      xhr.setRequestHeader(item, params.contentType[item]); // 设置请求头
    }
  }
  if(httpData.type === "GET" || httpData.type === 'DELETE') {
    xhr.send();
  } else if(httpData.type === "POST" || httpData.type === 'PUT') {
    xhr.send(convertData(httpData.data));
  }
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      
      /*
       * readyState == 4 请求完成,
       * xhr.status == 200 请求成功
       * xhr.status == 304
       */
      if(xhr.readyState !== 4) {
        return
      }
      if(timeOutFlag) return;
      clearTimeout(timeOut);

      if(xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
  })
}

export default ajax