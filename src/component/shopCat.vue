<template lang="html">
  <main>
    <header>
      <div class="header">
          <div class="h-l" @click='back()'>
              <i class="iconfont icon-zuokuohao my-icon"></i>
          </div>
          <div class="h-m">
              购物车
          </div>
          <div class="h-r">
              <i class="icon-sandian iconfont dian-icon dot"></i>
              <showright></showright>
          </div>
      </div>
    </header>
    <div class="inner-list">
      <ul>
        <li>
          <div class="shop-tit">
            <div class="t-left">
              <i :class="{'bg-icon1':true,'red-bg-icon':shopshow}" @click="allRadios()"></i>
              <i class="icon-dianpu1 iconfont"></i>
              <span class="txt">孔夫子新书广场</span>
            </div>
            <div class="t-right">
              <span class="Pmail">满包邮</span>
              <span class="write
              ">编辑</span>
            </div>
          </div>
          <div class="shop-con" v-for="(item,i) in goodslist">
            <div class="shop-con1">
              <div class="c-left">
                <i :class="{'bg-icon1':true,'bg-icon':true,'red-bg-icon':show[i]}" @click="radios(i)"></i>
                <img :src="item.src" alt="">
                <span v-show="false">{{a}}</span>
              </div>
              <div class="c-right">
                  <p>{{item.txt}}</p>
                  <div>
                    <p class="price">￥{{item.price}}</p>
                    <p class="bth">
                      <i @click="subshop(item,i)">-</i>
                      <i>{{item.num}}</i>
                      <i @click="addshop(item,i)">+</i>
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </li>
        <div class="line_gray"></div>
      </ul>
      <div class="bottom-end"></div>
      <div class="footer">
          <div class="f-left">
              <i :class="{'bg-icon1':true,'red-bg-icon':shopshow}" @click="allRadios()"></i>
              <span>全选</span>
          </div>
          <div class="f-right">
            <div class="total_price">
              <span>合计：<i class="f-price">￥{{shopPrice}}</i></span>
              <p class="footer-p">不含运费</p>
            </div>
            <div class="total_num">
              <span>去结算：{{shopnum}}</span>
            </div>
          </div>
       </div>
    </div>
  </main>
</template>

<script>
import showright from '../component/showRight.vue'
export default {
  data(){
    return{
      a: 0,
      show: [],
      shopshow: false,
      showshop: false,
      showall: false,
      goodslist: [],
      num: "",
      shopPrice: 0,
      shopnum: 0,
    }
  },
  components: {
    showright,
  },
  mounted(){
    this.$http.get("./data/cat.json")
    .then((response)=>{
      this.goodslist = response.data.goods
      for(var i=0; i < this.goodslist.length;i++){
        this.show.push(false)
      }
    })
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    addshop(item,i){
      this.goodslist[i].num++
      this.addshopPrice()
    },
    subshop(item,i){
      if(this.goodslist[i].num > 1){
        this.goodslist[i].num--
      }
      this.addshopPrice()
    },
    addshopPrice(){
      this.shopPrice = 0
      this.shopnum= 0
      this.show[i] = !this.show[i];
      for(var i=0; i < this.goodslist.length;i++){
        if(this.show[i]){
          this.shopnum += parseInt(this.goodslist[i].num)
          this.shopPrice +=  this.goodslist[i].num*this.goodslist[i].price
        }
      }
    },
    //选中未选中
    radios(i) {
      this.show[i] = !this.show[i];
      this.addshopPrice();
      this.shopshow = false
      this.a++;
    },
    //控制选中店铺全部li  show: [],
    allRadios(){
      if(this.shopshow){
        for(var i = 0; i < this.goodslist.length; i++){
          this.show[i] = false;
          this.addshopPrice();
        }
      }else{
        for(var i = 0; i < this.goodslist.length; i++){
          this.show[i] = true;
          this.addshopPrice();
        }
      }
      this.shopshow = !this.shopshow
    }
  }
}
</script>

<style lang="css" scoped>
.header{
    width: 93%;
    margin: 0 auto;
}
header{
    height: 50px;
    line-height: 50px;
    background: #fff;
    border-bottom: 1px solid #efefef;
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
}
.inner-list{
  font-size: 0.78rem;
}
.shop-con1,
.shop-tit{
  margin: 0 auto;
  width: 93%;
}
.shop-con1{
  overflow: hidden;
}
.shop-tit{
  overflow: hidden;
  line-height: 50px;
}
.t-left{
  float: left;
}
.bg-icon1{
  background: url('../assets/images/cat_icon.png');
  background-size:320px;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-position: 0 -85px;
  position: relative;
  top: 3px;
  margin-right: 10px;
}
.red-bg-icon{
  background-position: -32px -85px;
}
.Pmail{
  color: #d00000;
  padding-right: 5px;
  border-right:1px solid #efefef;
}
.bg-icon{
  top: -25px;
}
.t-right{
  float: right;
}
.shop-con{
  background: #fbfbfb;
  overflow: hidden;
  padding: 20px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.shop-con .c-left{
  float: left;
  width: 50%;
}
.shop-con .c-right{
  float: right;
  width: 50%;
}
.c-right div{
  margin-top: 20px;
}
.shop-con img{
  width: 120px;
}
.price{
  float: left;
  color: #d00000;
}
.bth{
  float: right;
  border: 1px solid #bbb;
  color: #999;
  margin-top: -8px;
}
.bth i+i{
  border-left: 1px solid #bbb;
}
.bth i{
  display: inline-block;
  padding: 5px 8px;
}
.line_gray{
    background: #f8f8f8;
    height: 8px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.footer{
  overflow: hidden;
  font-size: 0.68rem;
  border: 1px solid #eee;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 94%;
  padding: 5px 10px;
  background: #fff;
  z-index: 10;
}
.footer .f-left{
  font-size: 0.78rem;
    margin-top: 10px;
}
.footer .f-left,
.total_price{
  float: left;
}
.total_price{
  margin-right: 20px;
  margin-top: 5px;
}
.footer .f-right,
.total_num{
  float: right;
}
.footer .f-price{
  font-size: 0.88rem;
  color: #d00000;
}
.footer .total_num {
  background: #d00000;
  color: #fff;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
}
.footer-p{
  margin-left: 40px;
}
.bottom-end{
  margin-top: 50px;
}
</style>
