<template>
  <div class="nav-simple">
    <div class="w">
      <router-link to="/" class="logo">MMall</router-link>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'NavSimple'
  }
</script>

<style lang="stylus" scoped>
@import '../../assets/css/varibles.styl'
.nav-simple
  height: 60px
  line-height: 60px
  border-bottom: 1px solid #ddd
  background: $white
  .logo
    font-size: 26px
    font-weight: bold
    color: #c60023
</style>
