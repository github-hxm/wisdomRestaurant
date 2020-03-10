<template>
  <div id="login">
    <img src="@/assets/logo.png">
    <div>
        <div>
          <div class="line"><span class="text">账号:</span><input placeholder="请输入账号" v-model="userid"> </div>
          <div><span class="text">密码:</span><input placeholder="请输入密码" v-model="password"></div>
        </div>
        <div><button @click="login()">登录</button></div>
        <div class="jump"><span @click="toRegister()">注册</span><span @click="toForget()">忘记密码</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userid: '',
      password:''
    }
  },
  methods:{
    toRegister(){
      this.$router.push({
        path:'./register'
      })
    },
    toForget(){
      this.$router.push({
        path:'./forget'
      })
    },
    login(){
      var param={
        userid:this.userid,
        password:this.password
      };
      console.log(param)
    }
  }
}

</script>

<style lang="scss">
  img{
    height: px2rem(206px);
    width: 100%;
  }
  .line{
    margin-bottom: 10px;
  }
  .text{
    font-size: 20px;
  }
  input{
    font-size: 14px;
    width: 160px;
    height: 20px;
    outline: none;
    border-radius: 5px;
  }
  button{
    background-color: #e64340;
    color: #fff;
    font-size: 14px;
    border-radius: 17px;
    width: px2rem(200px);
    height: px2rem(33px);
    border: none;
    margin-top: 20px;
  }
  .jump{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 12px;
  }

</style>