<template lang="html">
  <main>
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
  </main>
</template>

<script>
export default {
  data(){
    return{
      bookList: [],
    }
  },
  mounted(){
      this.$http.get("./data/my.json")
      .then((response)=>{
          this.bookList = response.data.book
      })
  }
}
</script>

<style lang="css" scoped>
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
</style>
