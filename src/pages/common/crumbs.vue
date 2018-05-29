<template>
  <div class="crumb">
    <div class="w">
        <div class="crumb-list">
            <router-link to="/" class="crumb-item">MMall</router-link>
            <span>&gt;</span>
            <router-link :to="$route.path" class="crumb-item">{{$route.name}}</router-link>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Crumbs',
    props: {
      title: String
    },
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
.crumb 
  .crumb-item
    color: #888
    text-decoration: none
    cursor: pointer
    &:hover
      color: #c60023
</style>
