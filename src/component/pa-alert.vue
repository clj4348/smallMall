<template>
  <transition name="fade">
    <div class="container" v-show="hidden">
      <div class="mask" @click="onCancel"></div>
      <div class="content">
        <p>{{title}}</p>
        <div class="confirm-btns">
          <button class="btn" @click.stop="onCancel">{{cancelBtn}}</button>
          <button class="btn btn-primary" @click.stop="onConfirm">{{confirmBtn}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'pa-alert',
    props: {
      hasBtn:{
        type:Boolean,
        default: true
      },
      title: {
        type: String,
        default: '这是标题'
      },
      cancelBtn:{
        type: String,
        default: '取消'
      },
      confirmBtn:{
        type: String,
        default: '确定'
      }
    },
    data() {
      return {
        hidden: true
      }
    },
    methods: {
      onCancel() {
        this.hidden = false;
      },
      onConfirm(){
        this.hidden = false;
        this.$emit('onConfirm', '')
      },
      onShow(){
        this.hidden = true
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .container
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 100
  .mask
    position: fixed
    width: 100%
    height: 100%
    left: 0
    right: 0
    z-index: 1
    background-color: rgba(55,55,55,.6)
  .content
    position: absolute
    top: 50%
    left: 0
    right: 0
    margin: auto
    transform: translateY(-50%)
    width: 400px
    box-sizing: border-box
    padding: 30px 40px
    background-color: #fff
    border-radius: 6px
    z-index: 2
  .fade-enter-active, .fade-leave-active
    transition: all 0.5s ease     
  .fade-enter, .fade-leave-active
    opacity: 0 
</style>
