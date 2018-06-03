<template>
  <div id="app">
    <div v-if="urlCom">
      <nav-simple></nav-simple>
    </div>
    <div v-else>
      <Header></Header>
      <Search></Search>
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
    urlCom() {
      // 监听路由的变化
      let strUrl = this.$route.path;
      let arrUrl = strUrl.split("/");
      let strPage = arrUrl[arrUrl.length-1];
      let indexof = strPage.indexOf("?");
      console.log(strUrl)
      if(indexof != -1){
        strPage = strPage.substr(0,strPage.indexOf("?"));
      }
      
      if(strPage == 'login' || strPage == 'register'){
        return true
      }
      return false
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
