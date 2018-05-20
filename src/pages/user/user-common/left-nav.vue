<template>
  <div>
    <ul class="nav-side">
      <li class="nav-item" 
        :class="{'active': indexAct == idx}" 
        v-for="(item, idx) in navList" 
        @click="navAct(idx)"
        :key="idx">
        <router-link :to="item.url" class="link">{{item.name}}</router-link>
      </li>
      </li>
    </ul>
  </div>
</template>
<script>


export default{
  name: 'LeftNav',
  data() {
    return {
      indexAct: 0,
      navList:[{
        url: '/user/my-info',
        name: '个人中心'
      },{
        url: '/user/order-list',
        name: '我的订单'
      },{
        url: '/user/pass-update',
        name: '修改密码'
      },{
        url: '/about',
        name: '关于商城'
      }]
    }
  },
  computed:{
    getAct () {
      return this.indexAct
    }
  },
  watch: {
    indexAct(nVal,oVal){
      this.indexAct = nVal
    }
  },
  methods: {
    navAct(num) {
      this.indexAct = num
    }
  },
  mounted (){
    for(let i = 0; i < this.navList.length; i++){
      let arrUrl = this.navList[i].url.split("/");
      let strPage = arrUrl[arrUrl.length-1];
      let indexof = strPage.indexOf("?");
      if(indexof != -1){
        strPage = strPage.substr(0,strPage.indexOf("?"));
      }
      if(this.utils.getUrl() == strPage){
        this.indexAct = i
        break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-side
  float: left
  width: 130px
  min-height: 100px
  .nav-item
    line-height: 25px
    font-size: 13px 
    .link
      color: #888
    &.active 
      .link
        color: #c60023
</style>
