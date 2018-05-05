<template>
<div>
  <div class="w">
    <ul class="keywords-list">
      <li class="keywords-item">
        <a href="./list.html?keyword=数码" class="link">数码</a>
        <a href="./list.html?keyword=手机" class="link">手机</a>
      </li>
      <li class="keywords-item">
        <a href="./list.html?keyword=电脑" class="link">电脑</a>
        <a href="./list.html?keyword=办公配件" class="link">办公配件</a>
      </li>
      <li class="keywords-item">
        <a href="./list.html?keyword=电视" class="link">电视</a>
        <a href="./list.html?keyword=空调" class="link">空调</a>
        <a href="./list.html?keyword=冰箱" class="link">冰箱</a>
        <a href="./list.html?keyword=洗衣机" class="link">洗衣机</a>
      </li>
      <li class="keywords-item">
        <a href="./list.html?keyword=厨卫家电" class="link">厨卫家电</a>
        <a href="./list.html?keyword=手机" class="link">小家电</a>
      </li>
       <li class="keywords-item">
        <a href="./list.html?keyword=家具" class="link">家具</a>
        <a href="./list.html?keyword=家装" class="link">家装</a>
      </li>
      <li class="keywords-item">
        <a href="./list.html?keyword=个护化妆" class="link">个护化妆</a>
        <a href="./list.html?keyword=清洁用品" class="link">清洁用品</a>
        <a href="./list.html?keyword=纸品" class="link">纸品</a>
      </li>
      <li class="keywords-item">
        <a href="./list.html?keyword=母婴用品" class="link">母婴用品</a>
        <a href="./list.html?keyword=儿童玩具" class="link">儿童玩具</a>
        <a href="./list.html?keyword=童装童鞋" class="link">童装童鞋</a>
      </li>
      <li class="keywords-item">
        <a href="./list.html?keyword=鞋靴" class="link">鞋靴</a>
        <a href="./list.html?keyword=箱包" class="link">箱包</a>
        <a href="./list.html?keyword=钟表" class="link">钟表</a>
        <a href="./list.html?keyword=钟表" class="link">珠宝</a>
      </li>
      <li class="keywords-item">
        <a href="./list.html?keyword=图书" class="link">图书</a>
        <a href="./list.html?keyword=音箱" class="link">音箱</a>
        <a href="./list.html?keyword=电子书" class="link">电子书</a>
      </li>
    </ul>
    <!-- 右侧的banner容器 -->
    <Banner></Banner>
  </div>
</div>
</template>
<script>
import Banner from './banner'
  export default {
    name: 'IndexNav',
    data(){
      return {

      }
    },
    components: {
      Banner
    }
  }
</script>
<style lang="stylus" scoped>
.keywords-list
  float: left
  width: 240px
  height: 350px
  padding: 10px 0
  margin-right: 10px
  background: #666
  color: #fff
  .keywords-item
    padding-left: 10px
    height: 35px
    line-height: 35px
    font-size: 14px
    &:hover
      background: #999
    .link
      color: #fff
      margin-right: 6px
      &:hover
        color: #c60023
</style>
