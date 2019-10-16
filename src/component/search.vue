<template>
    <main>
        <header v-show="headerShow.HShow">
            <div class="h-left" @click="back()">
                <i class="iconfont icon-yemian h_icon"></i>
                <span>首页</span>
            </div>
            <div class="h-right">
                <span class="dot">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
                <showright></showright>
            </div>
        </header>
        <div class="search-logo" v-show="headerShow.HShow">
            <img src="../assets/images/search_logo.png" alt="">
        </div>
        <div class="search-text">
            <div class="tit">
                <ul>
                    <li v-for="(item,i) in tit" @click='change(i)' :class="{'selecte':i==num}" v-model="msg">{{item}}</li>
                </ul>
            </div>
           <span v-show="false"> {{a}}</span>
            <searchinput v-show='0==num' :a="num" :seachshow="headerShow" @send="get">
                <div class="nner-tit" slot="inner" @click="check(inner[num])" >
                    <span class="inner">{{inner[num]}}</span>
                    <i :class="{'_trg':true,'trg_click':show}"></i>
               </div>
               <div class="sign" slot="cat" v-show="tick">
                    <i class="_trg trg"></i>
                    <ul>
                        <li>在售</li>
                        <li>已售</li>
                        <li>全部</li>
                    </ul>
                </div>
            </searchinput>
            <searchinput v-show='1==num' :a="num" :seachshow="headerShow" @send="get">
                <div class="nner-tit" slot="inner" @click="check(inner[num])" >
                    <span class="inner">{{inner[num]}}</span>
                    <i :class="{'_trg':true,'trg_click':show}"></i>
               </div>
               <div class="sign" slot="cat" v-show="tick">
                    <i class="_trg trg"></i>
                    <ul>
                        <li>拍品名称</li>
                        <li>拍品作者</li>
                        <li>拍主昵称</li>
                        <li>已结束拍卖</li>
                    </ul>
                </div>
            </searchinput>
            <searchinput v-show='2==num' :a="num" :seachshow="headerShow" @send="get">
                <div class="nner-tit" slot="inner" @click="check(inner[num])" >
                    <span class="inner">{{inner[num]}}</span>
                    <i :class="{'_trg':true,'trg_click':show}"></i>
               </div>
               <div class="sign" slot="cat" v-show="tick">
                    <i class="_trg trg"></i>
                    <ul>
                        <ul>
                            <li>店铺名称</li>
                            <li>店主昵称</li>
                        </ul>
                    </ul>
                </div>
            </searchinput>
            <!-- <div class="search_input">
                <p class="clear"></p>
                <div class="l">
                   <div class="nner-tit" @click="check(inner[num])">
                        <span class="inner">{{inner[num]}}</span>
                        <i :class="{'_trg':true,'trg_click':show}"></i>
                   </div>
                    <div class="sign">
                        <i class="_trg trg"></i>
                        <ul>
                            <li>在售</li>
                            <li>已售</li>
                            <li>全部</li>
                        </ul>
                    </div>
                    <div class="sign">
                        <i class="_trg trg"></i>
                        <ul>
                            <li>拍品名称</li>
                            <li>拍品作者</li>
                            <li>拍主昵称</li>
                            <li>已结束拍卖</li>
                        </ul>
                    </div>
                    <div class="sign">
                        <i class="_trg trg"></i>
                        <ul>
                            <li>店铺名称</li>
                            <li>店主昵称</li>
                        </ul>
                    </div>
                </div>
                <div class="my-input1">
                    <div class="m">
                        <input type="text" class="inp" :placeholder="input[num]" v-model="msg" @keydown.enter="inset()" @focus="down()">
                    </div>
                    <div class="r">
                        <i class="iconfont icon-soushuo"></i>
                    </div>
                </div>
            </div>
            <div class="cat" v-show="catShow">
                <ul class="cat_ul">
                    <li :class="{'icon-shu2':catShow, 'iconfont':catShow,'i_shu2':catShow ,'cat_li':catShow}" v-for="(item,i) in arrlist" ><span>{{item.msg1}}</span></li>
                </ul>
                <ul>
                    <li class="li_end" @click="catShow=false"><i>关闭</i></li>
                </ul>
            </div> -->
        </div>
        <div class="con">
            <div class="c-title">
                <div class="l_line">
                    <img src="../assets/images/left_line.png" alt="">
                </div>
                <div class="c-tit">
                    <span v-for="(item,i) in endlist" :class="{'line':i==endNum}" @click="endChange(i)">{{item}}</span>
                </div>
                <div class="r_line">
                    <img src="../assets/images/right_line.png" alt="">
                </div>
            </div>
            <ul class="list list1 no_list" v-show="endNum == 0">
                <li v-for='(item,i) in List'>{{item.msg}}</li>
            </ul>
            <ul class="list list2" v-show="endNum == 1">
                <li v-for='(item,i) in List_day'>{{item.msg}}</li>
            </ul>
        </div>
    </main>
</template>

<script>
  import showright from '../component/showRight.vue'
  import searchinput from '../component/seachInput.vue'
export default{
    data(){
        return {
            List: [],
            List_day: [],
            arrlist: [],
            msg: "",
            tit: ["书店区","拍卖区","店铺"],
            inner: ["在售","拍卖名称","店铺名称"],
            // input: ["商品名称、作者、出版社、ISBN","请输入拍品名称","请输入店铺名称"],
            endlist: ["分类搜索","本周搜索"],
            num: 0,
            show: false,
            headerShow: {
                HShow: true
            },
            endNum: 0,
            show1: "",
            tick: false,
            a: 0,
            getcatShow: '',
        }
      },
     methods: {
         back(){
             this.$router.push("/home")
         },
         change(i){
            this.num = i
            this.show = false
            this.tick = false
            this.getcatShow.Cshow= false
        },
        endChange(i){
            this.endNum = i;
        },
        check(i){
            this.show1 = i
            this.a++
            this.show = !this.show
            this.tick = !this.tick
        },
        get(m){
            this.getcatShow = m
        }

      },
      components: {
        showright,
        searchinput
      },
      mounted(){
        this.$http.get("./data/search.json")
        .then((response)=>{
            this.List = response.data.list
            this.List_day = response.data.list_day
        })
    }
}
</script>
<style scoped>
    header,
    .search-text,
    .con{
        width: 93%;
        margin: 10px auto;
    }
    header{
        overflow: hidden;
    }

    .h_icon{
        font-size: 1.2rem;
        color: #9e100e;
    }
    .h-left{
        float: left;
        color: #662266;
    }
    .h-right{
        float: right;
    }
    .dot i{
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #333;
        display: inline-block;
        position: relative;
        top: -6px;
    }
    .search-logo {
        width: 40%;
        height: 3.5rem;
        margin: 2.5rem auto;
    }
    .search-logo img{
        width: 100%;
    }
    .search-text .tit ul{
        overflow: hidden;
    }
    .search-text .tit li{
        float: left;
        width: 30%;
        font-size: 0.88rem;

    }
    .selecte{
        color:#9e100e;
        font-weight: 700;
    }
    /* .search_input{
        height: 35px;
        line-height: 35px;
        border: 1px solid #9e100e;
        margin: 10px 0;
    }
    .clear{
        clear: both;
    }
    .search_input .l{
        float: left;
        font-size: 0.78rem;
        margin-left: 10px;
        position: relative;
    } */
    ._trg{
        border: 5px solid transparent;
        border-top: 5px solid #333;
        width: 0;
        height: 0;
        display: inline-block;
        position: relative;
        top: 3px;
    }
    /* .search_input .m{
        float: left;

    }
    .search_input input{
        width: 110% ;
        border: none;
        outline: none;
        padding-left: 10px;
        color: #999;
        position: relative;
        top: -3px;
    }
    .search_input .r{
        float: right;
        background: #9e100e;
        width: 13%;
    }
    .search_input .r i{
       font-size: 1.3rem;
       color: #fff;
       text-align: center;
       margin-left: 20%;
    } */
    .sign{
        width: 200%;
        position: absolute;
        top: 42px;
        left: -10px;
        /* display: none; */
        z-index: 1;
    }
    .sign ul{
        background: #333;
        color: #fff;
    }
    .sign li{
        height: 35px;
        line-height: 35px;
        text-align: center;
        padding: 0 10px;
        border-bottom: 1px solid #5c5c5b;

    }
    .trg{
        border-top: none;
        border-bottom: 5px solid #333;
        position: absolute;
        left: 20px;
        top: -5px;
    }
    .trg_click{
        transform: rotateX(180deg);
        position: relative;
        top: -3px;
    }
    .con{
        margin-top: 8rem;
    }
    .c-title{
        overflow: hidden;
    }
    .c-title img{
        width: 100%;
        height: 1px;
        position: relative;
    }
    .l_line{
        float: left;
        width: 30%;
        position: relative;
        top: -7px;

    }
    .r_line{
        float: right;
        width: 30%;
        position: relative;
        top: -28px;
    }
    .c-tit{
       width: 38%;
        margin: 0 auto;
        font-size: 0.84rem;
    }
    .c-tit span:nth-child(1){
        margin-right: 5px;
    }
    .list li{
        padding-left: 8px;
        width: 30%;
        font-size: .78rem;
        float: left;
        margin-bottom: 10px;
    }
    .no_list{
        display: block;
    }
    .line{
        border-bottom: 1px solid #d00000;
        padding-bottom: 3px;
    }
    .my_icon{
        margin-right: 10px;
        font-size: 0.88rem;
    }
    .cat{
        border: 1px solid #eee;
        margin-top: -10px;
    }
    .cat_ul li{
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid #eee;
    }
    .i_shu2{
        padding-left: 10px;
    }
    .i_shu2 span{
        padding: 0 5px;
    }
    /* .cat .li_end{
        background: #f8f8f8;
        height: 35px;
        line-height: 35px;
        font-size: 0.78rem;
        position: relative;
    }
    .cat .li_end i{
        position: absolute;
        right: 10px;
    } */


</style>
