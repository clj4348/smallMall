<template>
  <div class="crumb">
    <div class="w">
        <div class="crumb-list">
            <router-link to="/" class="crumb-item">MMall</router-link>
            <span>&gt;</span>
            <span class="crumb-item">{{title}}</span>
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
