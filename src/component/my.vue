<template lang="html">
  <main>
    <header>
      <div class="h-l" @click='back()'>
          <i class="iconfont icon-zuokuohao my-icon"></i>
      </div>
      <div class="h-m">
          个人中心
      </div>
      <div class="h-r">
          <i class="icon-sandian iconfont dian-icon dot"></i>
          <showright></showright>
      </div>
    </header>
    <div class="banner">
      <div class="b-box">
        <div class="b-left">
          <div class="imgbox">
            <img src="../assets/images/my-logo.gif" alt="">
          </div>
          <div class="text">
            <p class="p1">书友_0923_865705</p>
            <p>买家好评率: <i>0%</i> &nbsp; &nbsp;买家信誉：<i>0%</i> </p>
          </div>
        </div>
        <div class="b-right">
          <p>帐户管理 ></p>
        </div>
      </div>
    </div>
    <div class="personal_panel">
      <p class="panel-l">我的订单</p>
      <p class="panel-r panel-rr">查看全部 ></p>
    </div>
    <div class="panel_ul">
      <ul>
        <li>
          <i class="iconfont icon-jiankuohaoyuanxia"></i>
          <p>确认</p>
        </li>
        <li>
          <i class="iconfont icon-daifukuan1"></i>
          <p>待付款</p>
        </li>
        <li>
          <i class="iconfont icon-fahuo"></i>
          <p>待发货</p>
        </li>
        <li>
          <i class="iconfont icon-daishouhuo3"></i>
          <p>待收货</p>
        </li>
        <li>
          <i class="iconfont icon-pingjia2"></i>
          <p>待评价</p>
        </li>
      </ul>
    </div>
    <div class="personal_space"></div>
    <div class="personal_panel">
      <p class="panel-l">我的拍卖交易</p>
      <p class="panel-r panel-rr">查看全部 ></p>
    </div>
    <div class="panel_ul">
      <ul>
        <li>
          <i class="iconfont icon-daifukuan1"></i>
          <p>待付款</p>
        </li>
        <li>
          <i class="iconfont icon-fahuo"></i>
          <p>待发货</p>
        </li>
        <li>
          <i class="iconfont icon-daishouhuo3"></i>
          <p>待收货</p>
        </li>
        <li>
          <i class="iconfont icon-pingjia2"></i>
          <p>待评价</p>
        </li>
      </ul>
    </div>
    <div class="personal_space"></div>
    <div class="personal_panel">
      <p class="panel-l">资金账户</p>
      <p class="panel-r">余额：￥0.00 ></p>
    </div>
    <div class="personal_space"></div>
    <div class="personal_panel">
      <p class="panel-l">邀请有礼</p>
      <p class="panel-r">邀请好友注册得好礼 ></p>
    </div>
    <div class="personal_space"></div>
    <div class="panel_ul panel_uls">
      <ul>
        <li>
          <i class="iconfont icon-qicheqianlian-1-copy cat-icon"></i>
          <p>购物车</p>
        </li>
        <li>
          <i class="iconfont icon-lianxi-copy green-icon"></i>
          <p>我的消息</p>
        </li>
        <li>
          <i class="iconfont icon-wuxiaoxing-kong orange-icon"></i>
          <p>我的收藏</p>
        </li>
        <li>
          <i class="iconfont icon-address address-icon"></i>
          <p>收货地址</p>
        </li>
        <li>
          <i class="iconfont icon-jingpai2 pai-icon"></i>
          <p>我的竞拍</p>
        </li>
        <li>
          <i class="iconfont icon-zuji1-copy zu-icon"></i>
          <p>我的足迹</p>
        </li>
        <li>
          <i class="iconfont icon-dingyue1 yuedu-icon"></i>
          <p>我的阅读</p>
        </li>
        <li>
          <i class="iconfont icon-jiangbei2 jiangbei-icon"></i>
          <p>荣誉档案</p>
        </li>
        <li class="end-li">
          <i class="iconfont icon-kefu2 kefu-icon"></i>
          <p>客服留言</p>
        </li>
        <li class="end-li">
          <i class="iconfont icon-jianduyuan jiandu-icon"></i>
          <p>监督与建议</p>
        </li>
        <li class="end-li">
          <i class="iconfont icon-pingjia1 fan-icon"></i>
          <p>意见反馈</p>
        </li>

      </ul>
    </div>
    <div class="personal_space"></div>
    <div class="panel_ul panel_uls panel_end">
      <ul>
        <li class="li-frist">
          <p>书友_0923_865705</p>
        </li>
        <li>
          <p>退出</p>
        </li>
        <li>
          <p>客服留言</p>
        </li>
        <li>
          <p>电脑版</p>
        </li>
      </ul>
    </div>
    <footer>京ICP证041501 孔夫子拍卖网</footer>
  </main>
</template>

<script>
import showright from '../component/showRight.vue'
export default {
  data(){
    return {
      show1: false
    }
  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  },
  components: {
    showright
  }

}
</script>

<style lang="css" scoped>
header{
    width: 93%;
    margin: 0 auto;
}
header{
    /* overflow: hidden; */
    height: 50px;
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
    width: 85%;
}
.h-r{
    float: right;
    /* position: relative; */
}
.banner{
  background: url(../assets/images/my1.jpg) no-repeat;
  width: 100%;
  height: 100px;
  font-size: 0.68rem;
  color: #fff;
}
.b-box{
  margin: 0px auto;
  width: 93%;
  overflow: hidden;
}
.b-box{
    padding: 20px 0;
}
.b-left{
  overflow: hidden;
}
.b-left img{
  width: 60px;
}
.b-left,
.imgbox,
.panel-l{
  float: left
}
.b-right{
  margin-top: 5px;
}
.b-right,
.text,
.panel-r{
  float: right;
}
.panel-rr{
  color: #999;
}
.text{
  margin-top: 5px;
  margin-left: 10px;
}
.text{
  line-height: 26px;
  color: rgba(255,255,255,0.6);
  white-space: nowrap;
}
.text .p1{
  font-size: 0.88rem;
  color: #fff;
  max-width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.personal_panel{
  font-size: 0.78rem;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #EEE;
  padding: 0 10px;
}
.panel_ul{
  font-size: 0.68rem;
}

.panel_ul ul{
  overflow: hidden;
  margin: 10px auto;
}
.panel_ul ul li{
  float:left;
  width: 20%;
  text-align: center;
  line-height: 26px;
  color: #999;
}
.panel_uls ul li{
  /* margin-bottom: 20px; */
  width: 25%;
}
.panel_uls ul li{
  margin-bottom: 20px;
}
.panel_uls ul li.end-li{
  margin-bottom: 0px;
}
.panel_ul .iconfont{
  font-size: 20px;
}
.personal_space{
  height: 8px;
  background: #f8f8f8;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.cat-icon{
  color: #f38f80;
}
.green-icon{
  color: #00bb9c;
}
.orange-icon{
  color: #eb4f38;
}
.address-icon{
  color: #344861;
}
.pai-icon{
  color: orange;
}
.zu-icon{
  color: #56abe4;
}
.dingyue-icon{
  color: #12cc6e;
}
.jiangbei-icon{
  color: #9b4949;
}
.kefu-icon{
  color: #005fb5;
}
.jiandu-icon{
  color:#ea7702;
}
.fan-icon{
  color: yellow;
}
.li-frist{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 25%;
}
.panel_end{
  padding: 0 0px 0 20px; ;
}
.panel_end ul li{
  margin-bottom: 0px;
  /* width: 24%; */
}
footer{
  text-align: center;
  font-size: 0.68rem;
  color: #999;
  line-height: 35px;
  height: 35px;
  border-top: 1px solid #efefef;
}

</style>
