<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  mounted(){
    window.onresize = getRem;
    function getRem(){
        document.documentElement.style.fontSize = document.documentElement.offsetWidth / 20+'px';
    }
    getRem();
  }
}
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    /* html{
        font-size: 48px;
    } */
    #pgm .mint-swipe-items-wrap{
        padding-bottom: 42.66%;
    }
    #pgm img{
        width: 100%;
    }
    body{
        color: #333;
        font-family: "微软雅黑";
        /* font-size: 0.78rem; */
    }
    a{
        text-decoration: none;
        color: #262626;
        /* font-size: 0.78rem; */
    }
    li{
        list-style: none;
    }
    i{
      font-style: normal;
    }
</style>
