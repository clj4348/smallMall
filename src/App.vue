<template>
	<div id="app">
		<router-view v-if="isRouterAlive"/>
 	</div>
</template>

<script>

export default {
  name: 'App',
  data() {
  	return {
  		isRouterAlive: true
  	}
  },
  methods:{
  	reload(){
  		this.isRouterAlive = false
  		this.$nextTick(() => (this.isRouterAlive = true))
  	}
  }
}
</script>

<style lang="stylus">

</style>
