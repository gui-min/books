<template lang="html">
  <main>
    <header>
      <span>书店区</span>
    </header>
    <v-banner></v-banner>
    <div class="title">
      <ul>
          <li v-for='(item,index) in imgList'>
             <router-link to="#">
                  <div class="tit-img">
                      <img :src="item.src" alt="">
                   </div>
                  <p>{{item.tit}}</p>
             </router-link>
          </li>
      </ul>
    </div>
    <div class="row"></div>
    <div class="auction">
        <div class="auction-tit">名家专区</div>
        <div class="left">
            <router-link to="#">
                <ul>
                    <li class="left-tit1">
                        <p class="tit2">{{figure[0].tit}}</p>
                        <p>{{figure[0].msg}}</p>
                    </li>
                    <li>
                        <img :src="figure[0].src" alt="">
                    </li>
                </ul>
            </router-link>
        </div>
        <div class="right">
            <ul>
                <li v-for='(item,i) in figure1'>
                    <router-link to="/artDetails">
                        <div class="l">
                                <p class="tit2">{{item.tit}}</p>
                                <p>{{item.msg}}</p>
                            </div>
                            <div class="r">
                                <img :src="item.src" alt="">
                            </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="title2">
        <ul>
            <li v-for="(item,index) in figure2">
                <router-link to="#">
                    <div class="left">
                        <p class="tit2">{{item.tit}}</p>
                        <p>{{item.msg}}</p>
                    </div>
                    <div class="right">
                        <img :src="item.src" alt="">
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="row"></div>

    <div class="features">
      <div class="tit-tit">
          <div class="p-tit">特色推荐</div>
      </div>
      <div class="list-tit">
        <ul>
          <li @click="msg='v-line'" v-cloak :class="{color:msg=='v-line'}">线装古籍</li>
          <li @click="msg='China'"  v-cloak :class="{color:msg=='China'}">国学古籍</li>
          <li @click="msg ='oldbook'"  v-cloak :class="{color:msg =='oldbook'}">民国旧书</li>
          <li @click="msg ='celebrity'"  v-cloak :class="{color:msg =='celebrity'}">名人墨迹</li>
          <li @click="msg ='art'"  v-cloak :class="{color:msg =='art'}">艺术珍本</li>
          <li @click="msg ='history'"  v-cloak :class="{color:msg =='history'}">史学典籍</li>
        </ul>
      </div>
      <component :is="msg"></component>
      <div class="my-change">
         <span>更多 ></span>
     </div>
    </div>
    <div class="row"></div>
    <book></book>
    <div class="row"></div>
    <!-- 书店 -->
    <div class="features">
      <div class="tit-tit">
          <div class="p-tit">书店推荐</div>
      </div>
      <div class="list-tit">
        <ul>
          <li>线装古籍</li>
          <li>国学古籍</li>
          <li>民国旧书</li>
          <li>名人墨迹</li>
          <li>艺术珍本</li>
          <li>史学典籍</li>
        </ul>
      </div>
    </div>
    <bookstores></bookstores>
  </main>
</template>

<script>
import banner from '../component/banner.vue'
import line from '../component/BSLine.vue'
import China from '../component/BSChina.vue'
import oldbook from '../component/BSLine.vue'
import celebrity from '../component/BSChina.vue'
import art from '../component/BSLine.vue'
import history from '../component/BSChina.vue'
import book from '../component/bookHua.vue'
import bookstores from '../component/bookStoreList.vue'
export default {
  data(){
    return{
      imgList: [
          {
              src: "src/assets/images/con11.png",
              tit: "分类",
              id: 0
          },
          {
              src: "src/assets/images/con22.png",
              tit: "每日新书",
              id: 1
          },
          {
              src: "src/assets/images/con33.png",
              tit: "书店排行",
              id: 2
          },
          {
              src: "src/assets/images/con44.png",
              tit: "书摊排行",
              id: 3
          },
          {
              src: "src/assets/images/con55.png",
              tit: "新书广场",
              id: 4
          },
      ],
      figure: [
        {
          "tit": "博尔赫斯",
          "msg": "作家们的作家",
          "src": "./data/images/figer1.jpg"
        }
      ],
      figure1: [],
      figure2: [],
      msg: "v-line",
      show: true
    }
  },
  mounted(){
    // this.$http.get("./data/my.json")
    // .then((response)=>{
    //     this.oldbook_chaseList = response.data.oldbook_chase
    // });
    this.$http.get("./data/bookstore.json")
    .then((response)=>{
        this.figure1 = response.data.figure1
        this.figure2 = response.data.figure2
        this.oldbook_chaseList0 = response.data.oldbook_chase
    })
  },
  components: {
    "v-banner": banner,
    "v-line": line,
    China,
    oldbook,
    celebrity,
    art,
    history,
    book,
    bookstores
  },
}
</script>

<style lang="css" scoped>
.features{
  width: 93%;
  margin: 0 auto;
}
[v-cloak]{
  display: none;
}
header{
  height: 50px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
}
  .title{
      margin: 8% 7% 13% 7%;
  }
  .title ul{
      width: 100%;
      overflow: hidden;
  }
  .title li{
      width: 20%;
      float: left;
      text-align: center;
  }

  .title li .tit-img{
      width: 70%;
      margin: 0 auto;
  }
  .title li p{
      font-size: 12px;
  }
  .title li img{
      width: 100%;
  }
  .row{
      height: 0.45rem;
      background: #f3f3f3;
      width: 100%;
      margin: 1rem 0;
  }
  .title2{
      width: 95%;
      margin: 0 auto;
      overflow: hidden;
  }
  .title2 ul{
      overflow: hidden;
      width: 100%;
  }
  .title2 li{
      float: left;
      width: 46%;
      background: #fafafa;
      padding: 0px 5px;
      margin-left: 4px;
      margin-top: 5px;
  }
  .title2 li:nth-child(2n){
    padding: 0px;
  }
  .title2 .left{
      float: left;
      width: 70%;
      margin-top: 7%;
  }
  .title2 .right{
      float: right;
      width: 30%;
  }
  .title2 .left p,
  .auction p{
      color: #999;
      font-size: 0.67rem;
      margin-bottom: 5px;
  }

  .title2 .left .tit2,
  .auction .tit2{
      color: #333;
      font-weight: 700;
      font-size: 0.78rem;
  }
  .title2 .right img{
      width: 100%;
  }
  .auction{
      overflow: hidden;
      width: 95%;
      margin: 0 auto;
  }
  .auction .left{
      float: left;
      width: 48%;
      margin-left: 4px;
      margin-right: 4px;
      box-sizing: content-box;
  }

  .auction .left li{
      padding: 5px 5px;
      background: #fafafa;
  }
  .auction .left .left-tit1{
      padding-top: 8px;
  }
  .auction .right{
      float: left;
      width: 48%;

  }
  .auction .right li{
      overflow: hidden;
      background: #fafafa;
      padding: 5px 5px;
  }
  .auction .right li+li{
      margin-top: 5px;
  }
  .auction .right .l{
      width: 70%;
      float: left;
      margin-top: 3%;
  }
  .auction .right .r{
      width: 30%;
      float: right;
  }
  .auction img{
      width: 100%;
  }
  .p-tit,
  .auction-tit{
      margin-left: 2%;
      font-weight: bold;
      line-height: 2rem;
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
  }
  .list-tit{
    overflow: scroll;
  }
  .list-tit::-webkit-scrollbar{
      width: 0px;
  }
  .list-tit ul{
    overflow: hidden;
    width: 27rem;
  }
  .list-tit li{
    float: left;
    font-size: 0.84rem;
    color: #999;
    margin-right: 20px;
  }
  .list-tit li.color{
    color: #9e100e;
  }
  .my-change{
      text-align: center;
      font-size: 0.68rem;
      color: #365899;
      margin: 20px 0;
  }

</style>
