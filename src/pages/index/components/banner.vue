<template>
  <div class="banner-con">
    <div class="block">
      <el-carousel trigger="click" height="370px" interval.number="4000">
        <el-carousel-item v-for="item in 4" :key="item">
          <router-link to="">
            <img src="http://p894y9s6g.bkt.clouddn.com/banner1.jpg">
          </router-link >
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Banner'
}
</script>
<style lang="stylus" scoped>
.banner-con
  float: left
  height: 370px
  width: 830px
  background: #ff0
.el-carousel__item
  h3
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  &:nth-child(2n) 
     background-color: #99a9bf
  a img
    height: 370px
    width: 830px
  &:nth-child(2n+1) 
     background-color: #d3dce6;
  
</style>
