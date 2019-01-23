<template>
  <div class="material" :class="{available: isAvailableClass}" v-on:click="purchase()">
    <div class="name">{{ material.name }}</div>
    <div class="price">
      {{ material.price }}
      <span class="mini">money.</span>
    </div>
    <div class="count">
      <span class="mini">you have</span>
      {{ material.count }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsyncCell',
  props:['material','money'],
  data () {
    return {
      isRun:false
    }
  },
  methods:{
    purchase: function(){
      this.$emit('purchase',this.material.id )
    },
    run: function(){
      setTimeout( ()=>{
        // this.$emit('makeMoney',this.material.count*this.material.moneyPerSecond)
        this.$emit('makeMoney' , this.material.moneyPerSecond )
        this.run()
      },2000)
    }
  },
  watch:{
    material:{
      handler(material){
        if(material.count != 0  ){
        // if(material.count != 0 && !this.isRun ){
          this.isRun = true
          this.run()
        }
      },
      deep: true,
      immediate: true
    },
  },
  computed:{
    isAvailableClass:function(){
      return this.money >= this.material.price
    }
  }
}
</script>

<style scoped>
  .material{
    height:150px ;
    width: 200px ;
    display: inline-block;
    border: 1px solid white ;
    background: gray ;
    color : white ;
    user-select:none ;
    cursor:pointer ;
    position:relative;
    box-sizing: border-box ;
  }

  .name{
    font-size: 40px ;
    font-weight: bold ;
    text-align: left ;
    margin-left: 10px ;
  }

  .price{
    font-size:40px;
    margin-top: 10px;
  }

  .count{
    position: absolute;
    bottom: 5px ;
    right: 5px ;
  }

  .mini{
    font-size: 20px ;
  }

  .available{
    animation: becomeAvaliable 0.8s ;
    animation-fill-mode: forwards ;
  }

  @keyframes becomeAvaliable{
    0%{
      background-color: gray;
    }
    100%{
      background-color: #4a47ff8a;
    }
  }
</style>
