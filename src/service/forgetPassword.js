import http from 'utils/http.js'
import api from '../api/forgetPassword.js'
// 忘记密码
const postForgetResetPassword = (options) =>  http.post(api.API_FORGET_RESET_PASSWORD, options);
// 忘记密码答案
const postForgetCheckAnswer = (options) => http.post(api.API_FORGET_CHECK_ANSWER, options);
// 忘记密码问题
const postForgetGetQuestion = (options) => http.post(api.API_FORGET_GET_QUESTION, options);
export {
  postForgetResetPassword,
  postForgetCheckAnswer,
  postForgetGetQuestion
}