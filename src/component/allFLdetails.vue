<template>
    <main>
        <header>
            <div class="h-l" @click='back()'>
                <i class="iconfont icon-zuokuohao my-icon"></i>
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
        </header>
        <div class="container">
            <div class="c-left">
                <ul id="l-uls">
                    <li id="go1" class="add"><span>特别</span></li>
                    <li id="go2"><span>图书</span></li>
                    <li id="go3"><span>艺术收藏</span></li>
                    <li id="go4"><span>文创周边</span></li>
                </ul>
            </div>

            <div class="c-right">
                <div class="special">
                    <div class="tit">特色</div>
                    <ul class="go1">
                        <li v-for="(item,i) in listS">
                            <div class="imgbox">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="sign">
                                <p class="s-tit"> {{item.tit}} </p>
                                <p class="amount">{{item.count}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="special">
                    <div  class="tit tit1">图书</div>
                    <ul class="go2">
                        <li v-for="(item,i) in listbook">
                            <div class="imgbox">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="sign">
                                <p class="s-tit"> {{item.tit}} </p>
                                <p class="amount">{{item.count}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="special">
                    <div  class="tit tit1">艺术收藏</div>
                    <ul class="go3">
                        <li v-for="(item,i) in listbook1">
                            <div class="imgbox">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="sign">
                                <p class="s-tit"> {{item.tit}} </p>
                                <p class="amount">{{item.count}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="special">
                    <div  class="tit tit1">文创周边</div>
                    <ul class="go4">
                        <li v-for="(item,i) in listbook2">
                            <div class="imgbox">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="sign">
                                <p class="s-tit"> {{item.tit}} </p>
                                <p class="amount">{{item.count}}</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
    export default{
        data(){
            return {
                listS: "",
                listbook: [],
                listbook1: [],
                listbook2: [],
                show1: false,
            }
        },
        methods: {
          back(){
            this.$router.go(-1)
          },
        },
        mounted(){
            this.$http.get("./data/addDel.json")
            .then((response)=>{
                this.listS = response.data.special
                this.listbook = response.data.book
                this.listbook1 = response.data.book1
                this.listbook2 = response.data.book2
            });
            $("#l-uls").on('click','li',function(e){
              $(this).addClass("add").siblings("li").removeClass("add");
              var id = $(this).attr("id")
              var h = $('.'+id).offset().top-100;
              $("html,body").animate({scrollTop:h},0);
            });
        }
    }
</script>
<style scoped>
    header{
        width: 93%;
        margin: 0 auto;
    }
    header{
        /* overflow: hidden; */
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 1;
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
        position: relative;
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

    .container{
        overflow: hidden;
        margin-top: 50px;
    }
    .container .c-left{
        float: left;
        width: 25%;
        background: #fafafa;
        height: 100vh;
        position: fixed;
        top: 50px;
        left: 0px;
    }
    .container .c-left li{
        font-size: 0.78rem;
        line-height: 60px;
        height: 60px;
        text-align: center;

    }
    .container .c-right{
        float: right;
        width: 65%;
        margin: 15px;
        font-size: 0.78rem;
    }
    .tit1{
        margin-top: 20px;
        display: inline-block;
    }
    .c-right ul{
        border-bottom: 1px solid #eee;
        overflow: hidden;
        margin-top: 16px;
    }
    .c-right li{
        float: left;
        overflow: hidden;
        width: 40%;
        margin-right: 0.6rem;
        margin-bottom: 1.4rem;
        position: relative;

    }
    .c-right .imgbox{
        float: left;
        width: 40%;
    }
    .c-right .imgbox img{
        width: 100%;
    }
    .c-right .sign{
        width: 55%;
        float: right;
        font-size: 0.68rem;
        margin-top: 0.3rem;
    }
    .c-right .sign p{
        margin-bottom: 5px;
    }
    .amount{
        color: #999;
        font-size: 10px;
    }
    .add {
      background: #fff;
      color: #9e100e;
      border: 1px solid #fff;
    }
    .add span{
        display: inline-block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        border-left: 6px solid #9e100e;
    }
</style>
