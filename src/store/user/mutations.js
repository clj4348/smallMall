export default {
  changeToken(state, tokens) {
    state.token = tokens
    try {
      localStorage.token = JSON.stringify(tokens)
    } catch (e) {

    }
  },
  removeToken(state) {
    state.token = null
    localStorage.removeItem('token')
  },
  // state指的是state中的数据
  changeUserMsg(state, userInfo) {
    state.userMsg = userInfo // 将传参设置给state的keyword
    try {
      localStorage.userMsg = JSON.stringify(userInfo)
    } catch (e) {

    }
  },
  removeUserMsg(state) {
    const params = {
      status: 1,
      data: {
        username: ''
      }
    }
    state.userMsg = params
    try {
      localStorage.userMsg = JSON.stringify(params)
    } catch (e) {

    }
  }
}