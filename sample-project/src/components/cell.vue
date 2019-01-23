<template>
<span>
  <button>{{ name }}</button>
</span>
</template>

<script>
export default {
  name: 'Cell',
  props:['name'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  button{
    height:50px ;
    width: 50px ;
    font-size: 2em ;
    background: #2d2aff ;
    color : white ;
  }
</style>
