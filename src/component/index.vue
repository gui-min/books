<template>
    <main id='index'>
        <ul class="footer">
            <li>
                <router-link to="/home">
                    <i class="iconfont icon-yemian icon1"></i>
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="/bookstore">
                    <i class="iconfont icon-shuqian"></i>
                    <p>书店</p>
                </router-link>
            </li>
            <li>
                <router-link to="buy">
                    <i class="iconfont icon-paimai1"></i>
                    <p>拍卖</p>
                </router-link>
            </li>
            <li>
                <router-link to="/shopCat">
                    <i class="iconfont icon-qicheqianlian--copy"></i>
                    <p>购物车</p>
                </router-link>
            </li>
            <li>
                <router-link to="my">
                    <i class="iconfont icon-wo"></i>
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </main>
</template>
<style scoped>
    /* html{
        font-size: 48px;
    } */
    .footer{
        overflow: hidden;
        padding: 0px;
        margin: 0px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        background: #fff;
        z-index: 2;
     }
    .footer li{
        float: left;
        list-style: none;
        width: 20%;
        text-align: center;
        padding: 5px 0px;
    }
    .footer li p{
        margin: 0px;
        font-size: 0.28rem;
        padding-top: 2px;
    }
    .footer .iconfont{
        font-size: 1.3rem;
    }
    .footer .router-link-active{
        color: #9e100e;
    }

</style>
