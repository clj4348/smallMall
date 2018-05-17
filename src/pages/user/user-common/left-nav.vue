<template>
  <div>
    <ul class="nav-side">
      <li class="nav-item active">
        <router-link to="/user/my-info" class="link">个人中心</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/user/order-list">我的订单</router-link>
      </li>
      <li class="nav-item">
        <a class="link" href="./pass-update.html">修改密码</a>
      </li>
      <li class="nav-item">
        <a class="link" href="./about.html">关于MMall</a>
      </li>
    </ul>
  </div>
</template>
<script>


export default{
  name: 'LeftNav',
}
</script>

<style lang="stylus" scoped>
.nav-side
  float: left
  width: 130px
  min-height: 100px
  .nav-item
    line-height: 25px
    font-size: 13px 
    .link
      color: #888
    &.active 
      .link
        color: #c60023
</style>
