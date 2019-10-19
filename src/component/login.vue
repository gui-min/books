<template>
    <main>
        <header>
            <div class="left">
                <i class="iconfont icon-x close" @click="back()"></i>
            </div>
            <div class="middle">登陆</div>
        </header>
        <div class="con">
           <form action="#">
                <div class="user">
                    <input type="text" placeholder="请输入用户名/手机号/邮箱" @blur="myblur1()" @focus="myfocus1()" v-model="msg1" :class="{inputs:show[0]}" @click="foc1(0)">
                    <i :class="{circle:msg1&&msg11}" @click="msg1=''"></i>
                </div>
                <div class="pass">
                    <input type="password" placeholder="请输入密码" v-model="msg2" @blur="myblur2()" @focus="myfocus2()" :class="{inputs:show[1]}" @click="foc2(1)">
                    <i :class="{circle1:msg2&&msg22}" @click="msg2=''"></i>
                    <i class="bg"></i>
                    <!-- <img src="../assets/images/biyan.png" alt=""> -->
                    <!-- <img src="../assets/images/zhengyan.png" alt=""> -->
                    <p class="forget">忘记密码?</p>
                </div>
                <span :class="{login:true,logins: msg1 !=''&& msg2!=''}">登陆</span>
           </form>
           <div class="con-end">
                <router-link to="/SMS"><p class="l">短信验证码登录</p></router-link>
                <router-link to="/sign"><p class="r">注册</p></router-link>
           </div>
        </div>
        <footer>
            <div class="c-title">
                <div class="l_line">
                    <img src="../assets/images/left_line.png" alt="">
                </div>
                <div class="c-tit">
                    <span>使用社交账号登录</span>
                </div>
                <div class="r_line">
                    <img src="../assets/images/right_line.png" alt="">
                </div>
            </div>
            <div class="end">
                <img src="../assets/images/QQ.png" alt="">
                <img src="../assets/images/weibo.png" alt="">
            </div>
        </footer>
    </main>
</template>
<script>
    export default{
        data(){
            return{
                show: [false,false],
                num: "",
                msg1: "",
                msg2: "",
                msg11: false,
                msg22: false
            }
        },
        methods: {
            back(){
                this.$router.push("/home")
            },
            foc1(i){
                this.num = i
                this.show[1] = false
                this.show[0] = !this.show[0]
            },
            foc2(i){
                this.num = i
                this.show[0] = false
                this.show[1] = !this.show[1]
            },
            myfocus1(){
                var a = this
                setTimeout(function(){
                    a.msg11=true
                })
            },
            myfocus2(){
                var a = this
                setTimeout(function(){
                    a.msg22=true
                })
            },
            myblur1(){
                var a = this
                setTimeout(function(){
                    a.msg11=false
                })
            },
            myblur2(){
                var a = this
                setTimeout(function(){
                    a.msg22=false
                })
            }
        }
    }
</script>

<style scoped>
    header{
        height: 2.2rem;
        line-height: 2.2rem;
        width: 93%;
        margin: 0 auto;
        font-size: 0.88rem;
        text-align: center;
    }
    header i{
        font-size: 0.88rem;
    }
    .left{
        width: 10%;
        float: left;
    }
    .middle{
        width: 80%;
        float: left;
       
    }
    .con{
        width: 93%;
        margin: 3rem auto;
    }
    .pass{
        position: relative;
    }
    .con input{
        width: 90%;
        margin: 1rem 5%;
        border: none;
        outline: none;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        padding-left: 10px;
    }
    .con .inputs{
        border-bottom: 1px solid #333;
    }
    .bg{
        width: 19px;
        height: 16px;
        position: absolute;
        top: 18px;
        right: 20px;
        background-image: url('../assets/images/biyan.png');
        background-size: 1rem 1rem;
    }
    .forget{
        float: right;
        color: #999;
        font-size: 0.68rem;
        margin-top: -0.5rem;
    }
    .login{
        border-radius: 5px;
        color: #fff;
        display: inline-block;
        background: #999;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 90%;
        margin: 3rem 5%;
        font-size: 0.88rem;
    }
    .logins{
        background: #d00000;
    }
    .user,.pass{
        position: relative;
    }
    .circle,.circle1{
        
        position: absolute;
        top: 1.1rem;
        right: 1.1rem;
        width: 14px;   
        height: 14px;
        background: url("../assets/images/clear.png");
        background-size: 0.8rem .8rem;
    }
    .circle1{
        right: 2.8rem;
    }
    .con-end{
        width: 90%;
        margin-left: 5%;
        overflow: hidden;
        margin-top: -40px;
        font-size: 0.78rem;
    }
    .con-end a{
        color: #999;
    }
    .l{
        float: left;
    }
    .r{
        float: right
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
        width: 35%;
        margin: 0 auto;
        font-size: 0.84rem;
    }
    .c-tit{
       color: #999;
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
    .end{
        width: 40%;
        margin: 0 auto;
    }
    .end img{
        width: 2.2rem;
        margin-left: 1rem;
    }
</style>