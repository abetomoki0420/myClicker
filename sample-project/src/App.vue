<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script>
import Game from './components/game'

export default {
  name: 'App',
  data: function(){

  },
  components:{
    Game
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
