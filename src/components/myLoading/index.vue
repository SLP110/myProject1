<template>
  <div id="myLoading">
    <input type="number" v-model="number">
    <input type="password"><br/>
    <button @click="myLogin">登陆</button>
  
  </div>

</template>

<script>
export default {
  data(){
    return{
      number:''
    }
  },
  methods:{
    myLogin(){
      localStorage.setItem('isLogin',true);
      //保存用户id
      localStorage.setItem('userInfo',this.number);//userinfo=this.number
      //获取to里面的信息
      var toPath=localStorage.getItem('toPath');
      this.$router.push({
        name:toPath    
      })
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
