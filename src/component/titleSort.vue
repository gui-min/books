<template lang="html">
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
</template>

<script>
export default {
  data(){
      return {
          show: false,

      }
  },
  mounted(){
    $(".list1 li").click(function(){
      $(this).addClass("now").siblings("li").removeClass("now");
    })
  }
}
</script>

<style lang="css" scoped>
.tit-list .tit li{
  font-size: 0.78rem;
  text-align: center;
  float: left;
  width: 32.8%;
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
.tit-list .list1
{
  /* height: 100vh; */
}
.tit-list .list1 li{
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 0.78rem;
  border-bottom: 1px solid #efefef;
  padding-left: 20px;

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
</style>
