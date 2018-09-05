<template>
  <div id="app">
    <div v-if="urlCom">
      <nav-simple></nav-simple>
    </div>
    <div v-else>
      <Header></Header>
      <Search v-if="searchUrl"></Search>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './pages/common/header'
import NavSimple from './pages/common/navSimple'
import Search from './pages/common/search'
import Footer from './pages/common/footer'
export default {
  name: 'App',
  components: {
    NavSimple,
    Header,
    Footer,
    Search,
  },
  data() {
    return {
      url: ''
    }
  },
  computed: {
    urlParam() {
      let strUrl = this.$route.path
      let arrUrl = strUrl.split("/")
      let strPage = arrUrl[arrUrl.length-1]
      let indexof = strPage.indexOf("?")
      return {
        strPage,
        indexof
      }
    },
    urlCom() {
      // 监听路由的变化
      if(this.urlParam.indexof != -1){
        this.urlParam.strPage = this.urlParam.strPage.substr(0,this.urlParam.strPage.indexOf("?"))
      }
      
      if(this.urlParam.strPage == 'login' || this.urlParam.strPage == 'register' || this.urlParam.strPage == 'forget-password'){
        return true
      }
      return false
    },
    searchUrl(){
      if(this.urlParam.strPage == 'list'){
        return false
      }
      return true
    }
  },
  mounted(){
    
    this.$watch('url', (newVal, oldVal) => {

      this.url = this.utils.getUrl()
    })
  }
}
</script>

<style lang="stylus">

</style>
