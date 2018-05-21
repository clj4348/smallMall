<template>
  <div class="crumb">
    <div class="w">
        <div class="crumb-list">
            <router-link to="/" class="crumb-item">MMall</router-link>
            <span>&gt;</span>
            <router-link to="/about" class="crumb-item">{{$route.name}}</router-link>
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
</style>
