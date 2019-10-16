<template lang="html">
  <main>
    <div class="goodbook">
        <div class="tit">
          <div class="left">
            <div class="imgbox">
                <img src="../assets/images/storeLogo2.jpg" alt="">
            </div>
            <div class="text">
              <p class="p1">孔夫子新书广场</p>
              <p class="p2"> <i class="bg bg-sart-zhi"></i> </p>
            </div>
          </div>
          <div class="right">
            <span>收藏店铺</span>
            <span>收藏店铺</span>
          </div>
        </div>
        <ul>
            <li v-for="(item,index) in book3">
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
  </main>
</template>

<script>
export default {
  data(){
    return{
      book3: [],
    }
  },
  mounted(){
    this.$http.get("./data/bookstore.json")
    .then((response)=>{
        this.book3 = response.data.book3
    })
  }
}
</script>

<style lang="css" scoped>
.goodbook{
  width: 93%;
  margin: 0 auto 10px;
  padding: 10px 0 20px 0;
  margin-bottom: 10px;
  border-radius: 5px;
}
.tit{
  overflow: hidden;
  font-size: 0.78rem;
  height: 3.26rem;
  margin: 10px 0;
  padding: 0 5px;
}
.tit .left{
  float: left;
  overflow: hidden;
}
.left .imgbox{
  float: left;
}
.left .text{
  float: right;
  margin: 10px 5px;
}
.p2{
  font-size: 0.6rem;
  color: #999;
}
.bg{
  background: url("../assets/images/level.png") no-repeat 0 0;
  display: inline-block;
  background-size: 4.6rem auto;
  width: 6rem;
  height: 1rem;
  font-size: 0;
}
.bg-sart-zhi{
    background-position: 0 -6.62rem;
}
.tit .left img{
  width: 55px;
  height: 55px;
  border-radius: 10px;
}
.tit .right{
  float: right;
  margin: 13px 0;
}
.tit .right span{
  border: 1px solid #eee;
  color: #9e100e;
  line-height: 1.3rem;
  display: inline-block;
  padding: 5px 7px;
  font-size: 0.68rem;
  border-radius: 5px;
}
.tit .right span:nth-child(1){
  color: #333;
}
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
.p-tit{
  font-weight: 700;
  margin: 20px 0 2% 20px;

}
</style>
