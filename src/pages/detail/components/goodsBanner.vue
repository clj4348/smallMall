<template>
  <div class="p-img-con">
    <div class="main-img-con">
      <img class="main-img" :src="imageHost + bannerList[index]">
    </div>
    <ul class="p-img-list">
      <li class="p-img-item"
        :class="{'active': index == idx}"
        @mouseover="swperBanner(idx)"
        v-for="(item, idx) of bannerList"
        :key="item">
        <img class="p-img" :src="imageHost + item">
      </li>
    </ul>
  </div>
</template>
<script>

export default{
  name: 'GoodsBanner',
  props: {
    detailInfo: Object 
  },
  data () {
    return {
      bannerInfo: '',
      imageHost: '',
      index: 0
    }
  },
  
  computed: {
    bannerList () {
      let arr = this.bannerInfo.split(',')
      return arr
    }
  },
  methods:{
    swperBanner(option){
      this.index = option
    }
  },
  mounted(){
    this.$watch('detailInfo', function(newVal, oldVal){
      this.bannerInfo = newVal.subImages
      this.imageHost = newVal.imageHost
    });
  }
}
</script>

<style lang="stylus" scoped>
  /* 图片区 */
 .p-img-con {
  float: left;
  width: 420px;
}


/*主图*/
.p-img-con .main-img-con{
  height: 400px;
  border: 1px solid #ddd;
}

.p-img-con .main-img-con .main-img{
  height: 100%;
  width: 100%;
}
/* 缩略图 */
.p-img-con .p-img-list{
  height: 76px;
  overflow: hidden;
  margin-top: 5px;
  margin-right: -10px;
}

.p-img-con .p-img-item{
  float: left;
  margin-right: 10px;
  width: 72px;
  height: 72px;
  border: 2px solid #eee;
  cursor: pointer;
}
.p-img-con .p-img-item.active{
  border: 2px solid #c60023;
}
.p-img-con .p-img-item:hover{
  border: 2px solid #c60023;
}
/* 商品详细信息 */
.p-img-con .p-img-item .p-img{
  width: 100%;
  height: 100%;
}

</style>
