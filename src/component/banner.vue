<template lang="html">
  <main>
    <mt-swipe :auto="4000" id="pgm">
        <mt-swipe-item v-for='(item,index) in list' class="_it">
            <img :src="item.src" alt="">
        </mt-swipe-item>
    </mt-swipe>
  </main>
</template>

<script>
export default {
  data(){
    return {
      list: ""
    }
  },
  mounted(){
        this.$http.get("./data/my.json")
        .then((response)=>{
        this.list=response.data.img
    })
  }
}
</script>

<style lang="css" scoped>
</style>
