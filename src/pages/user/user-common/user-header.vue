<template>
  <div class="panel-title">
    {{title}}
  </div>
</template>
<script>

export default{
  name: 'UserHeader',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
  .panel-title 
    padding: 10px
    font-size: 14px
    border-bottom: 1px solid #eee
    color: #666
    font-weight: 700
</style>
