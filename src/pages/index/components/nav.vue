<template>
<div>
  <ul class="keywords-list">
    <li class="keywords-item" v-for="item of categoryList" :key="item.id">
      <a @click="sendParams(navItem.name)" 
        class="link"
        v-for="navItem of item.children" 
        >{{navItem.name}}
      </a>
    </li>
  </ul>
</div>
</template>
<script>
  export default {
    name: 'IndexNav',
    // 接收父组件传递的参数
    props: {
      categoryList: Array,
    },
    methods: {
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
      }
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
