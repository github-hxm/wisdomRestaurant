<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>{{ name}}</h2>
      <div @click="tiaozhuan()">按钮</div>
      <HelloWorld></HelloWorld>
    </div>
  </template>
  
  <script>
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name:'黄佳佳'
      }
    },
    components:{
        HelloWorld
    },
    methods:{
      tiaozhuan() {
        console.log(1111);
        this.$router.push({
          path:'./home'
        })
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>