<template>
  <span class="materials">
    <AsyncCell v-for="(material , index) in materials" :key="index"
      :material=material
      :money=money
      @purchase="purchase"
      @makeMoney="makeMoney"
    />
  </span>
</template>

<script>
import AsyncCell from './async-cell'
export default {
  name: 'Cells',
  props:['materials','money'],
  components:{
    AsyncCell
  },
  methods:{
    purchase:function(id){
      this.$emit('purchase',id)
    },
    makeMoney:function(money){
      this.$emit('makeMoney',money)
    }
  }
}
</script>

<style scoped>
  .materials{
    display:flex ;
    width:800px ;
    flex-wrap:wrap ;
    margin:0 auto ;
  }
</style>
