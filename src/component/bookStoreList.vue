<template lang="html">
  <main>
    <div class="goodbook">
        <div class="tit">
          <div class="left">
            <div class="imgbox">
                <img src="../assets/images/storeLogo1.jpg" alt="">
            </div>
            <div class="text">
              <p class="p1">古籍书社 <i class="bg bg-sart"></i> </p>
              <p class="p2">六年老店 | 好评率99.92%</p>
            </div>
          </div>
          <div class="right">
            <span>进店</span>
          </div>
        </div>
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
    <div class="goodbook">
        <div class="tit">
          <div class="left">
            <div class="imgbox">
                <img src="../assets/images/storeLogo2.jpg" alt="">
            </div>
            <div class="text">
              <p class="p1">蓝搏书屋 <i class="bg bg-sart-lan"></i> </p>
              <p class="p2">六年老店 | 好评率99.92%</p>
            </div>
          </div>
          <div class="right">
            <span>进店</span>
          </div>
        </div>
        <ul>
            <li v-for="(item,index) in book1">
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
    <div class="goodbook">
        <div class="tit">
          <div class="left">
            <div class="imgbox">
                <img src="../assets/images/storeLogo2.jpg" alt="">
            </div>
            <div class="text">
              <p class="p1">汉籍奇书舫 <i class="bg bg-sart1"></i> </p>
              <p class="p2">六年老店 | 好评率99.92%</p>
            </div>
          </div>
          <div class="right">
            <span>进店</span>
          </div>
        </div>
        <ul>
            <li v-for="(item,index) in book2">
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
    <div class="goodbook">
        <div class="tit">
          <div class="left">
            <div class="imgbox">
                <img src="../assets/images/storeLogo2.jpg" alt="">
            </div>
            <div class="text">
              <p class="p1">丰诚古籍书店 <i class="bg bg-sart-zhi"></i> </p>
              <p class="p2">六年老店 | 好评率99.92%</p>
            </div>
          </div>
          <div class="right">
            <span>进店</span>
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
    <div class="row"></div>
    <div class="FY-box">
        <div class="forYou">
            <div class="tit-tit">
                <div class="p-tit">为您推荐</div>
            </div>
            <div class="forYou-box">
                <ul>
                    <li v-for="(item,index) in foryouList">
                        <div class="forYou-img">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="forYou-tit-box">
                            <div class="forYou-tit">
                                <div class="">{{item.msg}}</div>
                                <p class="phase">{{item.phase}}</p>
                                <p class="address">{{item.address}}</p>
                            </div>
                            <p class="p3">
                                <i class="price">￥ {{item.price}}</i>
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="no-more">- 没有更多 -</div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      oldbook_chaseList: [],
      book1: [],
      book2: [],
      book3: [],
      foryouList: [],
    }
  },
  mounted(){
    this.$http.get("./data/bookstore.json")
    .then((response)=>{
        this.oldbook_chaseList = response.data.book
        this.book1 = response.data.book1
        this.book2 = response.data.book2
        this.book3 = response.data.book3
        this.foryouList = response.data.foryou
    })
  }
}
</script>

<style lang="css" scoped>

.goodbook{
  width: 93%;
  margin: 0 auto 10px;
  background: #fafafa;
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
  margin: 10px 10px;
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
.bg-sart{
  background-position: 0 0.3rem;
}
.bg-sart1{
  background-position: 0 -3.2rem;
}
.bg-sart-lan{
  background-position: 0 -5.8rem;
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
  border: 1px solid #efefef;
  color: #9e100e;
  line-height: 1.3rem;
  display: inline-block;
  padding: 0 14px;
  font-size: 0.68rem;
  border-radius: 5px;
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
.row{
    height: 0.45rem;
    background: #f3f3f3;
    width: 100%;
    margin: 1rem 0;
}
.FY-box{
    background: linear-gradient(#fff,#f8f8f8 5.42rem,#f8f8f8);
}
.forYou-box ul{
    overflow: hidden;
}
.forYou-box li{
    float: left;
    width: 48.5%;
    background: #fff;
    margin-bottom: 8px;
    border-radius: 5px;
}
.forYou-box li:nth-child(2n+1){
    margin-right: 3%;
}
.forYou-img{
    width: 8.65rem;
    height: 8.4rem;
    text-align: center;
    line-height: 8.4rem;
    /* display: table-cell; */

}
.forYou-box .forYou-img img{
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;

}
.forYou-tit-box{
    padding: 10px;
}
.forYou-tit{
    font-size: 0.68rem;
    overflow: hidden;

}
.forYou-tit .phase{
    float: left;
}
.forYou-tit .address{
    float: right;
}
.forYou-tit .address,
.forYou-tit .phase{
    margin: 5px 0;
    color: #999;
}
.forYou-tit-box .price{
    font-size: 0.78rem;
    color: #9e100e;
}
.no-more{
    width: 4rem;
    margin: 12px auto;
    font-size: 0.68rem;
    color: #999;
    padding-bottom: 60px;
}
.good-tit ._p3 i{
    font-size: 0.68rem;
}
.good-tit .p3 i.current_price{
    color: #999;
}
</style>
