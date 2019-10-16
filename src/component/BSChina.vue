<template lang="html">
  <div class="goodbook">
      <ul>
          <li v-for="(item,index) in oldbook_chaseList">
              <div class="img-box old-imgbox">
                 <img :src="item.src" alt="">
              </div>
              <div class="good-tit">
                 <p class="old-p">{{item.msg}}</p>
                 <p class="p3">
                      <i>￥ {{item.price}}</i>
                  </p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      oldbook_chaseList: []
    }
  },
  mounted(){
    this.$http.get("./data/bookstore.json")
    .then((response)=>{
        this.oldbook_chaseList = response.data.oldbook_chase1
    })
  }
}
</script>

<style lang="css" scoped>
.goodbook ul{
    overflow: hidden;
}
.goodbook li{
    width: 30%;
    font-size: 0.67rem;
    float: left;
    margin-right: 0.9rem;
}
.goodbook li:nth-child(3n){
    margin-right: 0rem;
}
.img-box{
    width: 100%;
    height: 8.2rem;
    line-height: 8.2rem;
    margin-bottom: 0.5rem;
}
.old-imgbox{
    height: 5.2rem;
    line-height: 5.2rem;
    position: relative;
}
.old-p{
    overflow: hidden;
    height: 1.9rem;
}
.offer{
    position: absolute;
    bottom: -2rem;
    left: 0px;
    color: #fff;
}
.goodbook li img{
    width: 100%;
    height: 100%;
}
.good-tit p{
    margin: 3px 0;
    color: #999;
}
.good-tit .p1{
    white-space: nowrap;
    overflow: hidden;
    color: #333;
}
.good-tit .p3 i{
    color: #9e100e;
    font-size: 0.85rem;
}
</style>
