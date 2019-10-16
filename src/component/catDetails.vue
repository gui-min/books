<template lang="html">
  <main>
    <div class="bg">
      <header>
        <div class="h-left">
          <img src="../assets/images/cat1.png" alt="" @click='back()'>
        </div>
        <div class="h-right">
          <img src="../assets/images/cat2.png" alt="">
          <img src="../assets/images/cat3.png" alt="">
        </div>
      </header>
      <div class="drop">
        <div class="header">
          <div class="h-l" @click='back()'>
              <i class="iconfont icon-zuokuohao"></i>
          </div>
          <div class="h-m">
              全部分类-孔夫子旧书网
          </div>
          <div class="h-r">
              <i class="icon-sandian iconfont dian-icon"  @click="show1 = !show1"></i>
              <div class="cat" v-show="show1" v-cloak>
                  <ul>
                      <i class="trag"></i>
                      <li><i class="iconfont icon-bianji my_icon"></i>消息</li>
                      <li><i class="iconfont icon-gouwuche my_icon"></i>首页</li>
                      <li><i class="iconfont icon-wo my_icon"></i>搜素</li>
                      <li><i class="iconfont icon-wode my_icon my-icon1"></i>购物车</li>
                  </ul>
              </div>
          </div>
        </div>
        <div class="drop-list">
          <ul id="uls">
            <li class='go1'>
              <i :class="{'icon-address':iconshow[0],'iconfont':iconshow[0],'my-icon':true}"></i>
              <span>商品</span>
            </li>
            <li class='go2'>
              <i :class="{'icon-address':iconshow[1],'iconfont':iconshow[1],'my-icon':true}"></i>
              <span>评价</span>
            </li>
            <li class='go3'>
              <i :class="{'icon-address':iconshow[2],'iconfont':iconshow[2],'my-icon':true}"></i>
              <span>详情</span>
            </li>
            <li class='go4'>
              <i :class="{'icon-address':iconshow[3],'iconfont':iconshow[3],'my-icon':true}"></i>
              <span>推荐</span>
            </li>
          </ul>
        </div>
      </div>
      <span v-show="false">{{b}}</span>
      <span v-show='false'>{{c}}</span>
      <div class="banner">
      <swiper :options="swiperOption">
          <swiper-slide v-for="(item,i) in booklist">
            <img :src="item.src" alt="">
          </swiper-slide>
            <div class="list">
            <div class="imgcat">

              <img src="../assets/images/listcat1.png" alt="">
            </div>
            <span>释放查看图文详情</span>
          </div>
          <div class="swiper-pagination my-btn" slot="pagination"></div>
      </swiper>
    </div>
    </div>
   
    <div class="del-1" id="go1">
      <div class="deltails">
        <div class="title">
          <h3>天地盖特藏毛边本《靳以日记书信集》</h3>
          <p class="article">
            钤靳以印章（靳以先生遗物，文物级，首次公开） 章洁思先生签名、盖章（靳以长女、本书整理者） 钤书名印（文物鉴定家、篆刻名家王敦化先生的关门弟子潘方尔刻） 藏书票（版画家杨可扬先生的哲嗣杨以磊创作。靳以印、章洁思印及签名、书名印均在藏书票上呈现，粘贴与扉页） 特制孔网毛边本定制版专属纸盒（按1930年代法藏馆天地盖瓦楞纸盒形制，并作内设改良）
          </p>
          <div class="price">
            <p class="price-l">
              <span class="price-now">
                <i class="now1">￥</i> <i class="now2">418</i>
              </span>
              <span class="price-old">￥398</span>
            </p>
            <p class="price-r">北京朝阳</p>
          </div>
          <div class="address">
            <p class="address-l">全新</p>
            <p class="address-r">库存155件</p>
          </div>
        </div>
        <div class="notes">
          <div class="notes-list">
            <p>
              <span>作者</span>
              <span>靳以著，章洁思整理</span>
            </p>
            <p>
              <span>出版社</span>
              <span>上海辞书出版社</span>
            </p>
            <p>
              <span>ISBN</span>
              <span>9787532653720</span>
            </p>
            <p>
              <span>出版时间</span>
              <span>2019-08</span>
            </p>
            <p>
              <span>版次</span>
              <span>1</span>
            </p>
            <p>
              <span>印刷时间</span>
              <span>2019-08</span>
            </p>
            <p>
              <span>印次</span>
              <span>1</span>
            </p>
            <p>
              <span>印数</span>
              <span>0.3千册</span>
            </p>
            <p>
              <span>装帧</span>
              <span>精装</span>
            </p>
            <p>
              <span>开本</span>
              <span>大16开</span>
            </p>
            <p>
              <span>页数</span>
              <span>504页</span>
            </p>
            <p>
              <span>定价</span>
              <span>398元</span>
            </p>
            <p>
              <span>上书时间</span>
              <span>2019-08-11</span>
            </p>
          </div>
        </div>
      </div>
      <div class="row"></div>
      <section class="delivery">
        <ul>
          <li>
            <p class="p-left">
              <span>送至</span>
              <span>广东省广州市</span>
            </p>
            <p class="p-right">
              <img src="../assets/images/jiantou.png" alt="">
            </p>
          </li>
          <li>
            <p>
              <span>运费</span>
              <span>卖家承担运费</span>
            </p>
          </li>
          <li>
            <p class="p-left">
              <span>活动</span>
              <span>满99.00元包邮（快递）</span>
            </p>
            <p class="p-right">
              <img src="../assets/images/jiantou.png" alt="">
            </p>
          </li>
        </ul>
      </section>
      <div class="row row-now"></div>
    </div>
   
    <!-- 评论 -->
    <div class="comment" id="go2">
      <div class="comment-tit">
        <p class="tit-left">评价 (9456)</p>
        <p class="tit-right">99.75% 好评 <img src="../assets/images/jiantou.png" alt="" class="com-jian"> </p>
      </div>
      <div class="comment-list">
        <ul>
          <li>
            <img src="../assets/images/comment1.jpg" alt="">
            <span>m***l</span>
            <p class="comment-txt">售后跟踪服务很好，价格出现错误，主动退补了。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row"></div>
    <bookstore></bookstore>
    <div class="del-3" id="go3">
      <div class="tit3">
        <p>
          <span class="line">——</span>
          <span>   商品详情   </span>
          <span class="line">——</span>
        </p>
      </div>
      <div class="desc-content">
        <div class="desc-box">
          <div class="desc-tit">
            <p class="desc-p1">品相描述：全新</p>
            <p class="desc-p2">商品描述</p>
            <p class="desc-p3">靳以日记书信集，8月16日正式开售、发货</p>
          </div>
        </div>
        <ul class="desc-con">
          <li v-for="(item,i) in booklist">
            <img :src="item.src" alt="">
          </li>
          <li>
            <img src="../assets/images/cat-store.jpg" alt="">
          </li>
          <li>
            <img src="../assets/images/cat-store2.jpg" alt="">
          </li>
          <li>
            <img src="../assets/images/cat-store3.jpg" alt="">
          </li>
          <li>
            <img src="../assets/images/cat-store4.jpg" alt="">
          </li>
          <li>
            <img src="../assets/images/cat-store5.jpg" alt="">
          </li>
          <li>
            <img src="../assets/images/cat-store6.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="del-3" id="go4">
      <div class="tit3">
        <p>
          <span class="line">——</span>
          <span>   相关推荐   </span>
          <span class="line">——</span>
        </p>
      </div>
    </div>
    <footer>
      <ul>
        <li>
          <i class="icon-dianpu1 iconfont"></i>
          <p>店铺</p>
        </li>
        <li>
          <i class="icon-lianxi-copy iconfont"></i>
          <p>联系</p>
        </li>
        <li>
          <i class="icon-xin2-copy-copy-copy iconfont"></i>
          <p>收藏</p>
        </li>
        <li>
          <span class="catbuy-bth" @click="pres()">加入购物车</span>
        </li>
        <li>
          <span>立即购买</span>
        </li>
      </ul>

    </footer>
    <span :click="aa()"></span>
  </main>
</template>

<script>
import bookstore from '../component/catBookStore.vue'
import { Indicator } from 'mint-ui'
export default {
  data(){
    return{
      booklist: [],
      show1: false,
      listLi: [],
      id: "",
      b: 0,
      c: 0,
      iconshow: [false,false,false,false],
      slide: true,
      swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
      },
    }
  },
  methods: {
    back(){
      this.$router.replace('/')
    },
    innerCat() {
      var id = parseInt(this.id)
      this.$store.commit("innergoods",id);
    },
    pres(){
      Indicator.open('加入购物车成功');
      setInterval(function(){
        Indicator.close();
      },2000)
    },
    aa(){
      $("#uls").on('click','li',function(e){
        var id = $(this).attr("class")
        var h = $('#'+id).offset().top+10;
        $("html,body").animate({scrollTop:h},0);
      });
    },
    showtop(){
      $(window).scroll(function(){
        if($(this).scrollTop() > 400){
          $(".drop").show();
        }else{
          $(".drop").hide();
        }
      });
      var a = this
      $(window).scroll(function(){
        if($(this).scrollTop()<$("#go2").offset().top && $(this).scrollTop()>$("#go1").offset().top){
          a.iconshow[0] = true
          a.iconshow[1] = false
          a.iconshow[2] = false
          a.iconshow[3] = false
          a.b++;
        }else if($(this).scrollTop()<$("#go3").offset().top && $(this).scrollTop()>$("#go2").offset().top){
          a.iconshow[0] = false
          a.iconshow[1] = true
          a.iconshow[2] = false
          a.iconshow[3] = false
          a.b++;
        }else if($(this).scrollTop()<$("#go4").offset().top && $(this).scrollTop()>($("#go3").offset().top-120)){
          a.iconshow[0] = false
          a.iconshow[1] = false
          a.iconshow[2] = true
          a.iconshow[3] = false
          a.b++;
        }else if($(this).scrollTop()>$("#go4").offset().top){
          a.iconshow[0] = false
          a.iconshow[1] = false
          a.iconshow[2] = false
          a.iconshow[3] = true
          a.b++;
        }
        
      });
    },
  },
  components: {
    bookstore
  },
  mounted(){
    if(this.$route.params.m == 0){
      this.$http.get("./data/catDel.json")
      .then((response)=>{
          this.booklist = response.data.img
      });
      this.id = 0;
    }else if(this.$route.params.m == 1){
      this.$http.get("./data/catDel.json")
      .then((response)=>{
          this.booklist = response.data.img2
      });
        this.id = 1;
    }else{
      this.$http.get("./data/my.json")
      .then((response)=>{
        this.booklist = response.data.newbook
      });
      this.id = 2;
    }
    // var a = this
    // $("#uls").on('click','li',function(e){
    //   var num = $(this).index()
    //   a.iconshow[num] = true
      
    //   // if(num == 0){}
    //   // $(this).children('i').addClass("icon-address iconfont").parent().siblings("li").children('i').removeClass("icon-address iconfont");
    //   var id = $(this).attr("class")
    //   var h = $('#'+id).offset().top;
    //   $("html,body").animate({scrollTop:h},0);
    // });

    $(window).bind("scroll",this.showtop);
    $(window).bind('click',this.aa)
  },
  deactivated(){
    console.log(111)
    $(window).unbind('scroll');//监听页面滚动事件

  }
}
</script>

<style lang="css" scoped>
.deltails,
.delivery,
.comment,
.desc-box{
  width: 93%;
  margin: 0 auto;
}
.bg{
  background: #fafafa;
}
.row{
  height: 0.45rem;
  background: #f3f3f3;
  width: 100%;
  margin: 1rem 0;
}
header{
  width: 93%;
  margin: 0 auto;
  overflow: hidden;

}
header img{
  width: 35px;
  padding: 20px 0;
}
.h-left{
  float: left;
}
.h-right{
  float: right;
}
.h-right img{
  margin-right: 10px;
}
.h-right img:nth-child(2){
  margin-right: 0px;
}
.banner img{
  width: 100%;
}
.banner{
  position: relative;
}
.my-btn{
  position: relative;
  top: 0;
  font-size: 0.68rem;
  bottom: -30px;
  left: 86%;
  width: 40px;
  background: #efefef;
  padding: 3px 0;
  border-radius: 5px;
}
.list{
  position: relative;
}
.list img{
  position: absolute;
  left: -30px;
  top: 40%;
  transform: rotate(180deg);

}
.list{
  font-size: 14px;
  margin: 3rem 2rem;;
  text-align: center;
}
.header{
    width: 94%;
    z-index: 1;
    height: 50px;
    padding: 2px 11px;
    line-height: 50px;
    background: #fff;
}
.h-l{
    float: left;
    font-size: 0.9rem;
}
.my-icon,.dian-icon{
    font-size: 22px;
    font-weight: 700;
}
.h-m{
    float: left;
    font-size: 0.9rem;
    font-weight: 700;
    text-align: center;
    width: 87%;
}
.h-r{
    float: right;
    position: relative;
}
.h-l .iconfont{
  font-size: 20px;
  color: #111;
}

.trag{
  position: absolute;
  top: -16px;
  right: 16px;
  width: 0px;
  height: 0px;
  border: 8px solid transparent;
  border-bottom: 8px solid #efefef;
}
.cat{
    position: absolute;
    top: 50px;
    right: -10px;
    width: 100px;
    box-shadow: 0 0 2px 2px #efefef;
    background: #fff;
    z-index: 2;
    padding: 0 20px;
    /* display: none; */
}
[v-cloak]{
  display: none;
}
.cat li{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #efefef;
}
.cat li .my_icon{
  margin-right: 10px;
}
.drop{
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  display: none;
}
.drop-list ul{
  overflow: hidden;
  height: 45px;
  line-height: 45px;
  background: #fff;
  width:100%;
  margin-top: -2px;
}
/* .drops{
  display: none;
} */
.drop-list li{
  font-size: 0.78rem;
  float: left;
  /* margin-right: 2rem;; */
  width: 25%;
  text-align: center;
  padding-left: -20px;
}
.drop-list li:nth-child(4){
    margin-right: 0;
}
.my-icon{
  font-size: 0.78rem;
  color: #d00000;
}
.del-1{
  font-size: 0.68rem;
  margin-top: 2.5rem;
}
.del-1 .title h3{
  margin-left: 5px;
  margin-bottom: 6px;
}
.del-1 .article{
  max-height: 2.5rem;
  overflow: hidden;
  line-height: 1.3rem;
  word-wrap: break-word;
  letter-spacing: 0;
  text-align: justify;
  color: #856d49;
  font-size: 0.68rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  margin-bottom: 20px;
}
.price,
.address{
  overflow: hidden;
  margin: 10px 0;
  color: #999;
  font-size: 0.68rem;
}
.price-l,
.address-l{
  float: left;
}
.del-1 .price-now{
  color: #9e100e;
}
.del-1 .now2{
  font-size: 1.1rem;;
}
.del-1 .price-old{
  text-decoration: line-through;
}
.price-r,
.address-r{
  float: right;
}
.address-l{
  background-color: #efefef;
  padding: 4px 10px;
  border-radius: 3px;
}
.notes{
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}
.notes-list p{
    font-size: 0.68rem;
    line-height: 1.2rem;
}
.notes-list p span:nth-child(1){
  display: inline-block;
  width: 20%;
  color: #c7c7c7;
}

.delivery p span:nth-child(1){
  color: #999;
  margin-right: 15px;

}
.delivery li{
  overflow: hidden;
  line-height: 2.5rem;
  height: 2.5rem;
  /* border-bottom: 1px solid #f5f5f5; */
}
.delivery li+li{
  border-top: 1px solid #f3f3f3;
}
.delivery .p-left{
  float: left;
}
.delivery .p-right{
  float: right;
}
.p-right img{
  width: 20px;
}
.row-now{
  margin: 0 0;
}
.comment{
  /* margin-top: 20px; */
  font-size: 0.78rem;
}
.comment-tit{
  overflow: hidden;
  padding: 14px 0;
  border-bottom: 1px solid #f3f3f3;
}
.tit-left{
  float: left;
  color: #999;
}
.tit-right{
  float: right;
  color: #9e100e;
}
.comment-list li{
  margin: 0px 0 0px 20px;
  line-height: 35px;
  font-size: 0.68rem;
  color: #999;
}
.comment-list li img{
  width: 35px;
  border-radius: 50%;
  position: relative;
  top: 10px;
}
.comment-txt{
  color: #333;
}
.com-jian{
  width: 20px;
  position: relative;
  top: 3px;
}
.del-3 .tit3{
  background: #f3f3f3;
  padding: 20px 0;
  color: #aeaeae;
}
.del-3 .tit3 p{
  width: 6.1rem;
  font-size: 0.68rem;
  margin: 0 auto;
}
.desc-tit{
  font-size: 0.78rem;
}
.desc-tit .desc-p2,
.desc-tit .desc-p1{
  font-weight: bold;
}
.desc-tit .desc-p1{
  line-height: 3rem;
  border-bottom: 1px solid #f3f3f3;
}
.desc-p2{
  margin-top: 20px;
  margin-bottom: 10px;
}
.desc-con{
  margin-top: 4rem;
}
.desc-con img{
  width: 100%;
}
footer ul{
  width: 100vw;
  /* overflow: hidden; */
  padding: 10px 0;
  position: fixed;
  bottom: 0px;
  left: 0;
  background-color: #fff;
  z-index: 10;
  font-size: 0.68rem;
}
footer li{
  float: left;
  margin-right: .5rem;
}
footer li:nth-child(1),
footer li:nth-child(2),
footer li:nth-child(3){
  width: 15%;
  text-align: center;
}
footer li:nth-child(4),
footer li:nth-child(5){
  width: 20%;
  background: red;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #9e100e;
  border-radius: 5px;
}
footer li:nth-child(4){
    background: #d48c68;
}

</style>
