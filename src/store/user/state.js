let token = null;
let userMsg = {};
try{
  if(localStorage){
    userMsg = JSON.parse(localStorage.userMsg)
    token = JSON.parse(localStorage.token)
  }
} catch(e){}

export {
  userMsg,
  token
}