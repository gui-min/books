<template>
    <main>
        <div class="container">
          <header>
            <div class="h-l">
              <img src="../assets/images/search_logo.png" alt="" @click="back()">
            </div>
            <div class="h-m">
              <input type="text" placeholder="请输入书名或作者">
              <img src="../assets/images/sousuo.png" alt="">
            </div>
            <div class="h-r">
                <i class="icon-sandian iconfont dian-icon dot"></i>
                <showright></showright>
            </div>
          </header>
        </div>
        <div class="tit-list">
          <ul class="tit">
            <li>
              <span :class="{one:show}">默认排序</span>
              <i class="_trg" @click="show = !show" :class="{color:show}"></i>
            </li>
            <li>
              <span :class="{one:addressShow}">所在地</span>
              <i class="_trg" @click="addressShow = !addressShow" :class="{color:addressShow}"></i>
            </li>
            <li>
              <span :class="{one:screenShow}">筛选</span>
              <i class="_trg" @click="screenShow = !screenShow" :class="{color:screenShow}"></i>
              <i class="icon-category iconfont my-icon"></i>
            </li>
          </ul>
          <div class="height_8_gray"></div>
          <div class="list1" v-show="show">
            <ul>
              <li class="now">
                <span>默认排序</span>
                <span class="check"></span>
              </li>
              <li>
                <span>价格升序</span>
                <span class="check"></span>
              </li>
              <li>
                <span>价格降序</span>
                <span class="check"></span>
              </li>
              <li>
                <span>出版时间升序</span>
                <span class="check"></span>
              </li>
              <li>
                <span>出版时间降序</span>
                <span class="check"></span>
              </li>
              <li>
                <span>上书时间升序</span>
                <span class="check"></span>
              </li>
              <li>
                <span>上书时间降序</span>
                <span class="check"></span>
              </li>
              <li>
                <span>书店等级降序</span>
                <span class="check"></span>
              </li>
            </ul>
          </div>
          <div class="list_address" v-show='addressShow'>
            <p class="address-tit">卖家所在地</p>
            <ul>
              <li :class="{addressBg:i==0}" v-for="(item,i) in addresslist">
                <router-link to="#">
                  <span>{{item}}</span>
                </router-link>
              </li>
            </ul>

          </div>
          <div class="list-screen"  v-show='screenShow'>
            <p class="tit">您已选择</p>
            <div class="slot-tit">
              <p class="tit">按价格筛选</p>
              <span class="price">商品价格</span>
              <input type="text" placeholder="最低价"> --
              <input type="text" placeholder="最高价">
              <span class="sure">确定</span>
            </div>
            <div class="cat_option">
              <p class="tit">分类浏览</p>
              <ul>
                <li v-for="(item,i) in opctionList">
                  <p>{{item.con}}</p>
                  <p>{{item.count}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="content" v-show="contentShow">
           <div class="book">
              <ul>
                  <li v-for='(item,i) in contentbook1'>
                        <div class="left">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="right">
                          <div class="r-tit">{{item.tit}}</div>
                          <div class="msg">
                            <p class="p1">{{item.p1}}</p>
                            <p class="p2">{{item.p2}}(<i class="mark">{{item.mark}}</i>)</p>
                          </div>
                          <div class="desc">
                            <p class="price">￥{{item.price}}</p>
                            <p class="p4">{{item.p4}}</p>
                          </div>
                      </div>
                  </li>
                </ul>
            </div>
        </div>
    </main>
</template>
<script>
  import showright from '../component/showRight.vue'
    export default{
        data(){
            return {
                list: "",
                show: false,
                addressShow: false,
                screenShow: false,
                contentShow: true,
                addresslist: ['不限','北京市',"上海市","天津市",'重庆市','安徽省','福建省','甘肃省','广东省','广西','贵州省','海南省','河北省','河南省','黑龙江省','湖北省','湖南省','吉林省','江苏省','江西省','辽宁省','内蒙古','宁夏','青海省','山西省','山西省','陕西省','四川省','西藏','新疆','云南省','浙江省','澳门','中国台湾','香港','海外地区'],
                opctionList: "",
                contentbook1: [],
                contentbook2: []
            }
        },
        methods: {
          back(){
            this.$router.go(-1);
          }
        },
        components: {
          showright,
        },
        mounted(){
            this.$http.get("./data/titleDel.json")
            .then((response)=>{
                this.opctionList = response.data.opction
            });

            if(this.$route.params.m == 0){
              this.$http.get("./data/titleDel.json")
              .then((response)=>{
                  this.contentbook1 = response.data.contentBook
              });
            }else if(this.$route.params.m == 1){
              this.$http.get("./data/titleDel.json")
              .then((response)=>{
                  this.contentbook1 = response.data.contentBook2
              });
            }else if(this.$route.params.m == 2){
              this.$http.get("./data/titleDel.json")
              .then((response)=>{
                this.contentbook1 = response.data.contentBook3
              });
            }else{
              this.$http.get("./data/titleDel.json")
              .then((response)=>{
                this.contentbook1 = response.data.contentBook4
              });
            }
        }
    }
</script>

<style scoped>
  header{
    width: 93%;
    margin: 0 auto;
  }
  .container{
    border-bottom: 1px solid #efefef;
    background: #fafafa;
  }
  header{
    height: 50px;
    margin-bottom: 5px;
    line-height: 50px;
  }
  .height_8_gray{
    height: 8px;
    background: #f8f8f8;
  }
  .h-l{
    float: left;
    width: 20%;
  }
  .h-l img{
    width: 100%;
  }
  .h-m{
    float: left;
    margin-left: 10px;
    width: 70%;
    position: relative;
  }
  .h-m input{
    width: 85%;
    outline: none;
    border: none;
    background: #efefef;
    height: 35px;
    line-height: 35px;
    padding-left: 30px;
    position: relative;
    top: -2px;
  }
  .h-m img{
    width: 15px;
    position: absolute;
    left: 5px;
    top: 20px;
  }
  .h-r{
    float: right;
    /* width: 10%; */
  }
  .tit-list .tit li{
    font-size: 0.78rem;
    text-align: center;
    float: left;
    width: 32.7%;
    padding: 10px 0;
    border: 1px solid #eee;
  }
  .tit .my-icon{
    margin-left: 26px;
  }
  .tit:after{
    content: "";
    display: block;
    clear: both;
  }

  .tit-list .list1 li{
    position: relative;
    height: 50px;
    line-height: 50px;
    font-size: 0.78rem;
    border-bottom: 1px solid #efefef;
    /* padding-left: 20px; */

  }
  li.now .check{
    background: url('../assets/images/icon_shop.png') no-repeat -203px -130px;
    width: 28px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 15px;
  }
  .now {
    color: red;
  }
  .one{
    color: red;
  }
  ._trg{
      border: 5px solid transparent;
      border-top: 5px solid #333;
      width: 0;
      height: 0;
      display: inline-block;
      position: relative;
      top: 3px;
  }
  .color {
      border-top: 5px solid red;
      transform: rotate(180deg);
      position: relative;
      top: -2px;
  }
  .address-tit,
  .list-screen p.tit
  {
    margin: 10px 0px;
    font-weight: bold;
  }
  .list-screen p.tit{
    margin: 30px 0;
  }
  .list_address,
  .list-screen{
    font-size: 0.78rem;
    margin: 0 auto;
    width: 93%;
  }
  .list_address ul{
    overflow: hidden;
  }
  .list_address li{
    float: left;
    margin-bottom: 16px;
    width: 22%;
    margin-right: 4%;
    background: #eee;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .list_address li:nth-child(4n){
    margin-right: 0;
  }
  .list_address .addressBg{
    background: #d00000;
  }
  .addressBg span{
    color: #fff;
  }
  .slot-tit input{
    width: 3rem;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: #eee;
    outline: none;
    border: 1px solid #eee;
    margin-left: 0.5rem;
  }
  .price{
    margin-right: 10px;
  }
  .sure{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left: 30px;
    width: 3rem;
    text-align: center;
    border: 1px solid #d00000;
    color: #d00000;
    border-radius: 5px;
  }
  .cat_option li{
    float: left;
    width: 28.5%;
    margin-right: 20px;
    padding: 10px 0;
    text-align: center;
    margin-bottom: 20px;
    background: #eee;
  }
  .cat_option li:nth-child(3n){
      margin-right: 0;
  }
  .content{
    width: 93%;
    margin: 0 auto;
  }
  .book{
    overflow: hidden;
    font-size: 0.78rem;
  }
  .book li{
    margin-bottom: 20px;
    overflow: hidden;
  }
  .left{
    float: left;
    width: 30%;
    height: 150px;
    display: flex;
    align-items: center
  }
  .left img{
    width: 100%;
    height: 120px;
    align-items: center
  }
  .right{
    float: right;
    width: 65%;
    margin-left: 5%;
    border-bottom: 1px solid #efefef;
  }
  .right .r-tit{
    color: #333;
    min-height: 20px;
    line-height: 20px;
    max-height: 40px;
    overflow: hidden;
    font-weight: normal;
    font-size: 15px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    word-break: break-all;
    display: -webkit-box;
  }
  .right .msg,
  .right .desc{
    overflow: hidden;
    margin: 20px 0;
    color: #999;
  }
  .right .msg i.mark{
    color: #333;
  }
  .right .p1,
  .right .price{
    float: left;
  }
  .right .price{
    color: #d00000;
  }
  .right .p2,
  .right .p4{
    float: right;
  }

  .tit-list{
    position: relative;
  }
  .list1,
  .list_address,
  .list-screen
  {
    background: #fff;
    height: 100vh;
    width: 93%;
    margin: 0 auto;
    z-index: 2;
    position: absolute;
    top: 50px;
    left: 0px;
    padding-left: 4%;
  }

</style>
