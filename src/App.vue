<template>
  <div id='app'>
    <div class="container">
           <div class="router">
                <router-link class="link" :to="{name:'search'}">综合检索</router-link>
                <router-link class="link" :to="{name:'college'}">高校检索</router-link>
                <router-link class="link"  :to="{name:'major'}">专业检索</router-link>
            </div>
    </div>
    
      <router-view></router-view>
  </div>
</template>
 
<script>


export default {
  name: 'app',
  components: {
    
  },
};
</script>
<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router{
    margin: 0 auto;
    width: 90%;
    margin-top: 40px;
    border-bottom: 1px solid #000;
    text-align: left;
    padding-left: 17px;
   
}
.link{
    display: inline-block;
    width: 80px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    text-decoration: none;
}
.link:hover{
     color: #fff;
     background: rgba(0, 160, 92, 1);
}
.router{
    margin: 0 auto;
    width: 1020px;
    margin-top: 40px;
    border-bottom: 1px solid #000;
    text-align: left;
}
.link{
    display: inline-block;
    width: 80px;
    height: 35px;
    text-align: center;
    line-height: 35px;
}
.link:hover{
     color: #fff;
     background: rgba(0, 160, 92, 1);
}
</style>
