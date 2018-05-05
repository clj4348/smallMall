<template>
  <div class="banner-con">
      <div class="banner">
        <ul>
          <li>
            <a href="./list.html?categoryId=100021" target="_blank">
              <img class="banner-img" src="http://p894y9s6g.bkt.clouddn.com/banner1.jpg" alt="">
            </a>
          </li>
        </ul>
        <div class="banner-arrow prev">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="banner-arrow next">
          <i class="fa fa-angle-right"></i>
        </div>
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
  background: #eee
</style>
