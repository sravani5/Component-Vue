<template>
  <div class="container">
    <local-component> </local-component>   
    
  </div>
</template>

<script>
import localComponent from "./localComponent.vue"
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components :{
    localComponent
  }

}
</script>

<style>

</style>
