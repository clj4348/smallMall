<template>
  <div>
    <Crumbs></Crumbs>
    <div class="pass-update-wrap w">
      <left-nav></left-nav>
      <div class="content with-nav">
          <div class="panel">
          <div class="panel-body">
            <transition name="transitionName">
              <router-view></router-view>
            </transition>  
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../common/header'

import Crumbs from '../common/crumbs'
import LeftNav from './user-common/left-nav'

export default{
  name: 'User',
  data(){
    return {
      transitionName: 'slide-left'
    }
  },
  components: {
    Crumbs,
    LeftNav
  },
}
</script>

<style lang="stylus" scoped>
.transitionName-enter-active,
.transitionName-leave-active
  transition: all 0.4s
.transitionName-enter-active
  opacity: 1; 
.transitionName-leave-active
  opacity: 0; 
.content
  float: left
  width: 950px
  overflow: hidden
  .panel-body
    padding: 10px 0
</style>
