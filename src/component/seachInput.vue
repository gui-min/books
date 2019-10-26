<template>
    <main>
        <div class="search_input">
            <p class="clear"></p>
            <div class="l">
                <slot name="inner"></slot>
                <slot name="cat"></slot>
            </div>
            <!-- {{a}} -->
            <div class="my-input1">
                <div class="m">
                    <input type="text" class="inp" :placeholder="input[a]" v-model="msg" @keydown.enter="inset()" @focus="down()">
                </div>
                <div class="r">
                    <i class="iconfont icon-soushuo"></i>
                </div>
            </div>
        </div>
        <div class="cat" v-show="catShow.Cshow">
            <ul class="cat_ul">
                <li :class="{'icon-shu2':catShow, 'iconfont':catShow,'i_shu2':catShow ,'cat_li':catShow}" v-for="(item,i) in arrlist" ><span>{{item.msg1}}</span></li>
            </ul>
            <ul>
                <li class="li_end" @click="catShow.Cshow=false"><i>关闭</i></li>
            </ul>
            {{fu()}}
        </div>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                msg: "",
                arrlist: [],
                tit: ["书店区","拍卖区","店铺"],
                inner: ["在售","拍卖名称","店铺名称"],
                input: ["商品名称、作者、出版社、ISBN","请输入拍品名称","请输入店铺名称"],
                endlist: ["分类搜索","本周搜索"],
                num: 0,
                show: false,
                headerShow: true,
                catShow: {
                    Cshow: false
                },
                endNum: 0,
                show1: "",
                HsH: this.seachshow,
            }
        },
        props: ['a','seachshow'],
        methods: {
            inset(){
                if(this.msg != ""){
                    var obj = {
                        msg1: this.msg
                    }
                    this.arrlist.splice(0,0,obj)
                }
                this.msg = "";
                this.catShow.Cshow = true
            },
            down(){
                this.HsH.HShow = false;
            },
            fu(){
                this.$emit("send",this.catShow)
            }
        }
    }
</script>
<style scoped>
     .search_input{
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
    .search_input .m{
        float: left;

    }
    .search_input input{
        width: 97%;
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
    .cat .li_end{
        background: #f8f8f8;
        height: 35px;
        line-height: 35px;
        font-size: 0.78rem;
        position: relative;
    }
    .cat .li_end i{
        position: absolute;
        right: 10px;
    }
</style>