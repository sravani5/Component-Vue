<template>
  <div class="container nested">
   <h1> Nested component area</h1>
    {{msg}}

     <div style="color:red; background:yellow"> 

       <!-- nested component creation-->
       
       <contact-us></contact-us>

      </div>
    
  </div>
</template>

<script>
export default {
  name: 'localComponent',
  data () {
    return {
      msg: 'Local component registration'
    }
  }
}
</script>

<style>
.nested{
    background: #ccc;
    padding:20px 0;
}
</style>
