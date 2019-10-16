<template lang="html">
  <main>
    <div class="slid_out">
        <ul>
            <li class="slid-tit">
                <i class="iconfont icon-yemian h_icon" @click="back()"></i>
                <i class="iconfont icon-soushuo"></i>
                <i class="iconfont icon-x close"></i>
            </li>
            <li><i class="iconfont icon-bianji my_icon"></i>我的消息</li>
            <li @click='backcat()'><i class="iconfont icon-gouwuche my_icon"></i>购物车</li>
            <li><i class="iconfont icon-wo my_icon"></i>个人中心</li>
            <li><i class="iconfont icon-wode my_icon"></i>卖家中心</li>
        </ul>
        <div class="slotC"></div>
        <ul class="ul2">
            <li v-for="(item,i) in slid_list">{{item.msg}}</li>
        </ul>
        <div class="slotC"></div>
        <ul class="ul2">
            <li v-for="(item,i) in slid_end_list">{{item.msg}}</li>
        </ul>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      slid_list: [],
      slid_end_list: [],
    }
  },
  methods: {
    back(){
        this.$router.push("/home")
    },
    backcat(){
      this.$router.push("/shopCat")
    }
  },
  mounted(){
    this.$http.get("./data/search.json")
    .then((response)=>{
        this.slid_list = response.data.slid
        this.slid_end_list = response.data.slid_end
    })
    $(".dot").click(function(){
         $(".slid_out").animate({"width":"50%"},300);
    })
    $(".close").click(function(){
         $(".slid_out").animate({"width":"0%"},0)
    });

  }
}
</script>

<style lang="css" scoped>
.slid_out{
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    font-size: 0.78rem;
    border: 1px solid #efefef;
    background: #fff;
    width: 0%;
    overflow: hidden;
    height: 100vh;
}

.slid-tit i{
    width: 30%;
    text-align: center;
    display: inline-block;
    font-size: .88rem;
}
.slid-tit i:nth-child(1){
    font-size: .98rem;
}
.slid-tit i:nth-child(3){
    font-size: 0.78rem;
}
.slid_out li{
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
}
.slid_out li+li{
  border-top: 1px solid #efefef;
}
.slid_out .slid-tit{
    background: #f8f8f8;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
}
.slotC{
    background: #f8f8f8;
    border-bottom: 1px solid #eee;
    height: 7px;
}
.my_icon{
    margin-right: 10px;
    font-size: 0.88rem;
}
.ul2 li{
    margin-left: 28px;
}

</style>
