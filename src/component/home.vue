<template>
    <div>
        <header>
            <div class="logo">
                <a href="#">
                    <img src="../assets/images/logo.png" alt="">
                </a>
            </div>
            <div class="right">
                <router-link to='/search'>
                    <input type="text" placeholder="商品名称 作者 出版社 ISBN">
                    <img src="../assets/images/sousuo.png" alt="" class="img-search">
                </router-link>
            </div>
        </header>
        <v-banner></v-banner>
        <div class="title">
            <ul>
                <li v-for='(item,index) in imgList'>
                   <router-link :to="'/titleDetails/'+item.id">
                        <div class="tit-img">
                            <img :src="item.src" alt="">
                         </div>
                        <p>{{item.tit}}</p>
                   </router-link>
                </li>
                <li>
                    <router-link to='/allFLdetails'>
                        <div class="tit-img">
                                <img src="../assets/images/con5.png" alt="">
                             </div>
                            <p>全部分类</p>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="title2">
            <ul>
                <li v-for="(item,index) in title2List">
                    <router-link :to="'/title2Details/'+item.id">
                        <div class="left">
                            <p class="tit2">{{item.tit2}}</p>
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
        <div class="auction">
            <div class="auction-tit">拍卖</div>
            <div class="left">
                <router-link to="#">
                    <ul>
                        <li class="left-tit1">
                            <p class="tit2">{{auctionListFirst[0].tit}}</p>
                            <p>{{auctionListFirst[0].msg}}</p>
                        </li>
                        <li>
                            <img :src="auctionListFirst[0].src" alt="">
                        </li>
                    </ul>
                </router-link>
            </div>
            <div class="right">
                <ul>
                    <li v-for='(item,i) in auctionList0'>
                        <router-link to="/artDetails">
                            <div class="l">
                                    <p class="tit2">{{item.tit3}}</p>
                                    <p>{{item.msg}}</p>
                                </div>
                                <div class="r">
                                    <img :src="item.src" alt="">
                                </div>
                        </router-link>
                    </li>
                    <li v-for='(item,i) in auctionList1'>
                        <router-link :to="'/auctionDetails/'+item.id">
                            <div class="l">
                                    <p class="tit2">{{item.tit3}}</p>
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
                <li v-for="(item,index) in auctionList">
                    <router-link :to="'/auctionDetails/'+item.id">
                        <div class="left">
                            <p class="tit2">{{item.tit3}}</p>
                            <p>{{item.msg}}</p>
                        </div>
                        <div class="right">
                            <img :src="item.src" alt="">
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

        <!-- 好书推荐 -->
        <div class="row"></div>
        <div class="goodbook">
            <div class="tit-tit">
                <div class="p-tit">好书推荐</div>
                <div class="more">更多 ></div>
            </div>
            <div class="goodbook-box">
                <ul>
                    <li v-for="(item,index) in gBList">
                       <div class="img-box">
                            <img :src="item.src" alt="">
                       </div>
                        <div class="good-tit">
                            <p class="p1">{{item.p1}}</p>
                            <p class="p2">{{item.p2}}</p>
                            <p class="p3">
                                <i>{{item.p3i}}</i>
                                <span>起</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
       <!-- 书单推荐 -->
        <div class="row"></div>
        <div class="book">
           <div class="tit-tit">
               <div class="p-tit">书单推荐</div>
               <div class="more">更多 ></div>
           </div>
           <div class="book-box">
                <ul>
                    <li v-for='(item,index) in bookList'>
                        <img :src="item.src" alt="">
                        <p class="p1-tit">{{item.msg}}</p>
                    </li>
                    <li class="end-li">
                        <p class="end-p">查看全部116个书单</p>
                    </li>

                </ul>
            </div>
        </div>

        <div class="row"></div>
        <div class="newbook">
           <div class="tit-tit">
               <div class="p-tit">新书广场</div>
               <div class="more">更多 ></div>
           </div>
           <div class="newbook">
                <ul>
                    <li v-for='(item,i) in newbookList'>
                        <router-link :to="'/catDetails/'+item.id">
                          <div class="new-left">
                              <img :src="item.src" alt="">
                              <div class="price">
                                  <span>￥</span>
                                  <span>{{item.price}}</span>
                              </div>
                          </div>
                          <div class="new-right">
                            <div class="new-tit"> {{item.tit}}</div>
                            <div class="desc">{{item.article}}</div>
                            <div class="sign-box">
                                <span>
                                    <i>{{item.sign}}</i>
                                    <i class="trg"></i>
                                    <i class="trg-inner"></i>
                                </span>
                                <span>
                                    <i>{{item.sign1}}</i>
                                    <i class="trg"></i>
                                    <i class="trg-inner"></i>
                                </span>
                                <span>
                                    <i>{{item.sign2}}</i>
                                    <i class="trg"></i>
                                    <i class="trg-inner"></i>
                                </span>
                                <span>
                                    <i>{{item.sign3}}</i>
                                    <i class="trg"></i>
                                    <i class="trg-inner"></i>
                                </span>
                            </div>

                        </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 旧书 -->
        <div class="row"></div>
        <div class="newbook">
           <div class="tit-tit">
               <div class="p-tit">旧书-国学经典</div>
               <div class="more">更多 ></div>
           </div>
           <div class="newbook-box">
                <ul>
                    <li v-for='(item,i) in oldbookList'>
                        <div class="new-left">
                            <img :src="item.src" alt="">
                            <div class="price">
                                <span>￥</span>
                                <span>{{item.price}}起</span>
                            </div>
                        </div>
                        <div class="new-right old-right">
                            <div class="new-tit"> {{item.tit}}</div>
                            <div class="msg">{{item.msg}}</div>
                            <div class="desc">{{item.article}}</div>
                        </div>
                    </li>
                </ul>
                <div class="my-change">
                    <span>换一换</span>
                    <img src="../assets/images/change.png" alt="">
                </div>
            </div>
        </div>

        <!-- 新书-新近出版 -->
        <div class="row"></div>
        <div class="newbook">
            <div class="tit-tit">
                <div class="p-tit">新书-新近出版</div>
                <div class="more">更多 ></div>
            </div>
            <div class="newbook-box">
                <ul>
                     <li v-for='(item,i) in oldbookList'>
                         <div class="new-left">
                             <img :src="item.src" alt="">
                             <div class="price">
                                 <span>￥</span>
                                 <span>{{item.price}}起</span>
                             </div>
                         </div>
                         <div class="new-right old-right">
                             <div class="new-tit"> {{item.tit}}</div>
                             <div class="msg">{{item.msg}}</div>
                             <div class="desc">{{item.article}}</div>
                         </div>
                     </li>
                 </ul>
                 <div class="my-change">
                    <span>换一换</span>
                    <img src="../assets/images/change.png" alt="">
                </div>
             </div>
        </div>

        <!-- 新书销售排行榜 -->
        <div class="row"></div>
        <div class="newbook">
             <div class="tit-tit">
                 <div class="p-tit">新书销售排行榜</div>
                 <div class="more">更多 ></div>
             </div>
             <div class="newbook-box">
                 <ul>
                      <li v-for='(item,i) in booksalesList'>
                          <div class="new-left">
                              <img :src="item.src" alt="">
                              <div class="price">
                                  <span>￥</span>
                                  <span>{{item.price}}起</span>
                              </div>
                          </div>
                          <div class="new-right old-right">
                              <div class="new-tit"> {{item.tit}}</div>
                              <div class="msg">{{item.msg}}</div>
                              <div class="desc">{{item.article}}</div>
                          </div>
                      </li>
                  </ul>
                  <div class="my-change">
                     <span>换一换</span>
                     <img src="../assets/images/change.png" alt="">
                 </div>
              </div>
        </div>

        <!-- 旧籍寻踪 -->
        <div class="row"></div>
        <div class="goodbook">
            <div class="tit-tit">
                <div class="p-tit">旧籍寻踪</div>
                <div class="more">更多 ></div>
            </div>
            <div class="goodbook-box">
                <ul>
                    <li v-for="(item,index) in oldbook_chaseList">
                        <div class="img-box old-imgbox">
                           <img :src="item.src" alt="">
                        </div>
                        <div class="good-tit">
                           <p class="old-p">{{item.msg}}</p>
                           <!-- <p class="p2">{{item.p2}}</p> -->
                           <p class="p3">
                                <i>￥ {{item.price}}</i>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 艺文集览 -->
        <div class="row"></div>
        <div class="goodbook">
            <div class="tit-tit">
                <div class="p-tit">艺文集览</div>
                <div class="more">更多 ></div>
            </div>
            <div class="goodbook-box">
                <ul>
                    <li v-for="(item,index) in artList">
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
        </div>
        <!-- 古籍荐览 -->
        <div class="row"></div>
        <div class="goodbook">
            <div class="tit-tit">
                <div class="p-tit">古籍荐览</div>
                <div class="more">更多 ></div>
            </div>
            <div class="goodbook-box">
                <ul>
                    <li v-for="(item,index) in ancientbookList">
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
        </div>
        <!-- 民国旧书 -->
        <div class="row"></div>
        <div class="goodbook">
            <div class="tit-tit">
                <div class="p-tit">民国旧书</div>
                <div class="more">更多 ></div>
            </div>
            <div class="goodbook-box">
                <ul>
                    <li v-for="(item,index) in republicList">
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
        </div>
         <!-- 民国图书文献拍卖 -->
         <div class="row"></div>
         <div class="goodbook">
             <div class="tit-tit">
                 <div class="p-tit">民国图书文献拍卖</div>
                 <div class="more">更多 ></div>
             </div>
             <div class="goodbook-box">
                 <ul>
                     <li v-for="(item,index) in minList">
                         <div class="img-box old-imgbox">
                            <img :src="item.src" alt="">
                            <span class="offer">{{item.offer}}次出价</span>
                         </div>
                         <div class="good-tit">
                            <p class="old-p">{{item.msg}}</p>
                            <p class="p3 _p3">
                                 <i class="current_price">当前价</i>
                                 <i>￥ {{item.price}}</i>
                             </p>
                         </div>
                     </li>
                 </ul>
             </div>
         </div>

        <!-- 民国期刊拍卖 -->
        <div class="row"></div>
        <div class="goodbook">
              <div class="tit-tit">
                  <div class="p-tit">民国期刊拍卖</div>
                  <div class="more">更多 ></div>
              </div>
              <div class="goodbook-box">
                  <ul>
                      <li v-for="(item,index) in journalList">
                          <div class="img-box old-imgbox">
                             <img :src="item.src" alt="">
                             <span class="offer">{{item.offer}}次出价</span>
                          </div>
                          <div class="good-tit">
                             <p class="old-p">{{item.msg}}</p>
                             <p class="p3 _p3">
                                  <i class="current_price">当前价</i>
                                  <i>￥ {{item.price}}</i>
                              </p>
                          </div>
                      </li>
                  </ul>
              </div>
        </div>
        <!-- 艺术品拍卖 -->
        <div class="row"></div>
        <div class="goodbook">
            <div class="tit-tit">
                <div class="p-tit">民国期刊拍卖</div>
                <div class="more">更多 ></div>
            </div>
            <div class="bookmark">
                <span>名人墨迹</span>
                <span>名人字画</span>
                <span>连环画</span>
                <span>钱币</span>
                <span>版画宣传画</span>
                <span>邮票税票 </span>
                <span>古玩杂项</span>

            </div>
            <div class="goodbook-box">
                <ul>
                    <li v-for="(item,index) in art_bookList">
                        <div class="img-box old-imgbox">
                            <img :src="item.src" alt="">
                            <span class="offer">{{item.offer}}次出价</span>
                          </div>
                          <div class="good-tit">
                            <p class="old-p">{{item.msg}}</p>
                            <p class="p3 _p3">
                                <i class="current_price">当前价</i>
                                <i>￥ {{item.price}}</i>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 为您推荐 -->
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
    </div>
</template>

<script>
import banner from '../component/banner.vue'
    export default{
        data(){
            return{
                list: "",
                gBList: [],
                bookList: [],
                newbookList: [],
                oldbookList: [],
                newbookPuList: [],
                booksalesList: [],
                oldbook_chaseList: [],
                ancientbookList: [],
                republicList: [],
                artList: [],
                minList: [],
                journalList: [],
                art_bookList: [],
                foryouList: [],
                imgList: [
                    {
                        src: "src/assets/images/con1.png",
                        tit: "线装古籍",
                        id: 0
                    },
                    {
                        src: "src/assets/images/con2.png",
                        tit: "民国旧书",
                        id: 1
                    },
                    {
                        src: "src/assets/images/con3.png",
                        tit: "名人墨迹",
                        id: 2
                    },
                    {
                        src: "src/assets/images/con4.png",
                        tit: "古玩杂项",
                        id: 3
                    },
                ],
                title2List: [
                    {
                        tit2: "今日上新",
                        msg: "发现新上好书",
                        src: "src/assets/images/con-tit1.png",
                        id: 0
                    },
                    {
                        tit2: "今日上新",
                        msg: "发现新上好书",
                        src: "src/assets/images/con-tit2.png",
                        id: 1
                    },
                    {
                        tit2: "今日上新",
                        msg: "发现新上好书",
                        src: "src/assets/images/con-tit3.png",
                        id: 2
                    },
                    {
                        tit2: "今日上新",
                        msg: "发现新上好书",
                        src: "src/assets/images/con-tit4.png",
                        id: 3
                    }
                ],
                auctionList: [
                    {
                        tit3: "全部拍卖",
                        msg: "日均4万余件拍品",
                        src: "src/assets/images/auction4.png",
                        id: 4
                    },
                    {
                        tit3: "全部拍卖",
                        msg: "日均4万余件拍品",
                        src: "src/assets/images/auction5.png",
                        id: 5
                    },
                    {
                        tit3: "全部拍卖",
                        msg: "日均4万余件拍品",
                        src: "src/assets/images/auction6.png",
                        id: 6
                    },
                    {
                        tit3: "全部拍卖",
                        msg: "日均4万余件拍品",
                        src: "src/assets/images/auction7.png",
                        id: 7
                    }
                ],
                auctionListFirst: [
                    {
                        tit: "全部拍卖",
                        msg: "日均4万余件拍品",
                        src: "src/assets/images/auction1.png",
                        id: 0
                    }
                ],
                auctionList0: [
                    {
                        tit3: "全部拍卖",
                        msg: "日均4万余件拍品",
                        src: "src/assets/images/auction2.png",
                        id: 1
                    },

                ],
                auctionList1: [
                    {
                        tit3: "全部拍卖",
                        msg: "日均4万余件拍品",
                        src: "src/assets/images/auction3.png",
                        id: 2
                    },
                ],
            }
        },
        components: {
          "v-banner": banner
        },
        mounted(){
            $(window).unbind('scroll')
            this.$http.get("./data/my.json")
            .then((response)=>{
                this.list=response.data.img
                this.gBList=response.data.goodbook
                this.bookList = response.data.book
                this.newbookList = response.data.newbook
                this.oldbookList = response.data.oldbook
                this.newbookPuList = response.data.newbookPu
                this.booksalesList = response.data.booksales
                this.oldbook_chaseList = response.data.oldbook_chase
                this.artList = response.data.art
                this.ancientbookList = response.data.ancientbook
                this.republicList = response.data.republic
                this.minList = response.data.min
                this.journalList = response.data.journal
                this.art_bookList = response.data.art_book
                this.foryouList = response.data.foryou
            })
        }
    }
</script>


<style scoped>
    header{
        overflow: hidden;
        width: 100%;
        margin: 10px 0;
    }
    .logo{
        float: left;
        width: 10%;
        margin: 2px 3%;
    }
    .logo img{
        width: 100%;
    }
    .right{
        float: left;
        width: 80%;
        position: relative;

    }
    .right input{
        height: 35px;
        line-height: 35px;
        width: 88%;
        border-radius: 30px;
        background: #f5f5f5;
        color: #aaa;
        outline: none;
        border: none;
        padding-left: 12%;
    }
    .img-search{
        width: 15px;
        position: absolute;
        top: 7.5px;
        left: 5%;
    }
    .title{
        margin: 8% 7%;
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
        width: 45%;
        background: #fafafa;
        padding: 0px 5px;
        margin-left: 4px;
        margin-top: 5px;
    }
    .title2 .left{
        float: left;
        width: 60%;
        margin-top: 7%;
    }
    .title2 .right{
        float: right;
        width: 40%;
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
        padding: 9px 5px;
        /* height: 68px; */
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
    .tit-tit{
        overflow: hidden;
    }
    .p-tit,
    .auction-tit{
        margin-left: 2%;
        font-weight: bold;
        line-height: 2rem;
        font-size: 1.05rem;
        margin-bottom: 0.5rem;
    }
    .p-tit{
        float: left;
    }
    .more{
        float: right;
        line-height: 2rem;
        font-size: 0.68rem;
        color:#365899;

    }
    .row{
        height: 0.45rem;
        background: #f3f3f3;
        width: 100%;
        margin: 1rem 0;
    }
    .goodbook,
    .book,
    .newbook,
    .forYou{
        width: 93%;
        margin: 0 auto;

    }
    .goodbook-box,
    .book-box{
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .goodbook-box::-webkit-scrollbar,
    .book-box::-webkit-scrollbar{
        width: 0px;
    }
    /* .goodbook-box::-webkit-scrollbar {滚动条整体样式
        width: 10px;     高宽分别对应横竖滚动条的尺寸
        height: 1px;
    }
    .goodbook-box::-webkit-scrollbar-thumb {滚动条里面小方块
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }
    .goodbook-box::-webkit-scrollbar-track {滚动条里面轨道
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    } */
    .goodbook ul{
        overflow: hidden;
        width: 59rem;
    }
    .goodbook li{
        width: 5.0rem;
        font-size: 0.67rem;
        float: left;
        margin-right: 0.9rem;
    }
    .goodbook li:nth-child(10){
        margin-right: 0rem;
        width: 5.5rem;
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
    .book-box ul{
        width: 62.17rem;
        overflow: hidden;
    }
    .book-box li{
        width: 17.2rem;
        float: left;
        margin-right: 0.68rem;
        border-radius: 6px;
        border: 1px solid #efefef;
    }
    .book-box li img{
        width: 100%;
        display: block;
    }
    .book-box .p1-tit{
        padding: 0.7rem;
        color: #999;
        font-size: 0.68rem;
        border-bottom: 1px solid #efefef;
    }
    .book-box li.end-li{
        width: 8rem;
        margin-right: 0px;
        height: 10.4rem;
        line-height: 10.4rem;
    }
    .book-box .end-p{
        padding: 0 2rem;
        box-sizing: inset 0 0 1px #f3f3f3;
    }
    .newbook-box{
        overflow: hidden;
    }
    .newbook-box ul{
        overflow: hidden;
    }
    .newbook li{
        overflow: hidden;
        margin-bottom: 1.5rem;
    }
    .newbook .new-left{
        float: left;
        width: 32%;
        height: 6.5rem;
        line-height: 6.5rem;
        position: relative;
        display: table-cell;
    }
    .new-left .price{
        background: rgba(158,16,14,.8);
        color: #fff;
        line-height: 1.6rem;
        height: 1.6rem;
        font-size: 0.68rem;
        padding: 0 10px;
        padding-left: 8px;
        border-radius: 0 1.5rem 1.5rem 0;
        position: absolute;
        bottom: 0.5rem;
        left: 0;
    }
    .new-left img{
        width: 100%;
        vertical-align: middle;
    }
    .newbook .new-right{
        float: right;
        width: 65%;
        font-size: 0.78rem;
        border-top: 1px solid #efefef;
        padding-top: 10px;
    }
    .newbook .old-right{
        border-top: 0;
        padding-top: 0px;
        border-bottom: 1px solid #efefef;
    }
    .new-right .new-tit{
        width: 100%;
        white-space: nowrap;
        font-weight: 700;
        color: #262626;
    }
    .new-right .desc{
        height: 1.8rem;
        overflow: hidden;
        font-size: 0.68rem;
        color: #999;
        margin: 0.8rem 0 1.1rem 0;
    }
    .sign-box span{
        display: inline-block;
        border: 1px solid rgba(153,127,85,.6);
        color: #997f55;
        font-size: 0.68rem;
        width: 2.1rem;
        text-align: center;
        line-height: 22px;
        border-radius: 3px;
        position: relative;
        margin-right: 5px;
    }
    .trg,
    .trg-inner{
        display: inline-block;
        width: 0;
        height: 0;
        line-height: 0;
        border: 4px solid transparent;
        position: absolute;
    }
    .trg{
        right: -5px;
        bottom: -5px;
        border-bottom: 5px solid rgba(153,127,85,.6);
        transform: rotate(135deg);
    }
    .trg-inner{
        z-index: 2;
        right: -6px;
        bottom: -6px;
        border-bottom: 5px solid #fff;
        transform: rotate(135deg);
    }
    .newbook-box .msg{
        margin-top: .3rem;
        font-size: 0.68rem;
        color: #444;
    }
    .my-change{
        text-align: center;
        font-size: 0.68rem;
        color: #365899;
    }
    .my-change img{
        width: 1rem;
        height: 1rem;
        position: relative;
        top: 5px;
    }
    .bookmark{
        width: 80%;
        margin-bottom: 10px;
    }
    .bookmark span{
        padding: 5px 10px;
        border: 1px solid #ececec;
        border-radius: 20px;
        font-size: 0.68rem;
        display: inline-block;
        margin: 5px 0;
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
