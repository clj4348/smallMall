<template>
  <div>
    <div class="header">
      <div class="w">
      
        <router-link to="/" class="logo">MMall</router-link>
        <div class="search-con">
            <h1>{{keyword}}</h1>
          <input class="search-input" v-model="searchName" @keyup="show($event)" id="search-input" placeholder="请输入商品名称" />
          <button class="btn search-btn" @click="sendParams(searchName)" id="search-btn">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Search',
    data () {
      return {
        index: 0,
        searchName: ''
      }
    },
    computed:{
      keyword(){
        return this.$store.getters.getKeywordFn
      }
    },
    methods:{
       sendParams (name) {
        this.$router.push({
          path: '/list',
          params: {
            keyword: name
          },
          query: {
              keyword: name
          }
        })
        this.$emit('search', name)
        //location.reload()
      },
      show(e){
        if(e.keyCode == 13){
          this.sendParams(this.searchName)
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../assets/css/varibles.styl'
.header 
  .logo
    position: absolute
    left: 60px
    top: 34px
    display: block
    font-size: 36px
    color: $subjectColor
    font-weight: bold
  .search-con
    padding: 40px 0 30px 250px
    .search-input
      width: 550px
      height: 40px
      line-height: 40px
      padding-left: 10px
      border: 2px solid $subjectColor
    .search-btn
      position: absolute
      height: 44px
      width: 80px
</style>
