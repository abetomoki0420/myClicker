<template>
  <div class="container">
    <div class="display">
      <div>Your Money:</div>
      <div @click="increaseMoney" class="money" >{{ formattedMoney }}</div>
    </div>
    <Cells
      @purchase="purchase"
      @makeMoney="makeMoney"
      :money=money
      :materials="materials"/>
  </div>
</template>

<script>
import Cells from './cells'
import axios from 'axios'
export default {
  name: 'Game',
  components:{
    Cells
  },
  data () {
    return {
      money: 0,
      materials:[]
    }
  },
  mounted(){
    axios
      .get('http://localhost:3000/api')
      .then((res)=>{
        console.log(res)
        this.materials = res.data
      })
  },
  methods:{
    purchase:function(id){
      const idx = this.materials.map( (material)=>{
        return material.id
      }).indexOf(id)

      var selectedMaterial = this.materials[idx]
      if(this.money >= selectedMaterial.price ){
        //購入処理
        // this.materials[idx].count++
        selectedMaterial.count++
        this.money -= selectedMaterial.price

        selectedMaterial.price = Math.ceil( selectedMaterial.price * 1.4 )
      }
    },
    makeMoney:function(money){
      this.money += money
    },
    increaseMoney: function(){
      this.money++
    }
  },
  computed:{
    formattedMoney:function(){
      const formatter = new Intl.NumberFormat('ja-JP')
      return formatter.format(this.money)
    }
  }
}
</script>

<style scoped>
  .container{
    width:1000px;
    height:800px;
    margin:0 auto;
  }

  .money{
    user-select: none;
    cursor:pointer ;
    height: 100px;
    width: 300px;
    margin:0 auto;
    font-size: 40px ;
    line-height: 100px;
  }
</style>
