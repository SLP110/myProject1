<template>
    <div id='my'>
     个人中心
        <button @click="exit">退出</button>
    </div>
</template>


<script>

export default {
  methods:{
      exit(){
          localStorage.removeItem('isLogin');
          //用户退出的时候清楚id
          localStorage.removeItem('userInfo');
          this.$router.push({
              name:'myLoading'
          })
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
