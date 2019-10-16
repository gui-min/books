import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        totalPrice: 0.00,
        totalNum: 0,
        list: [],
        goods: [
          {
            id: 0,
            num: 0,
            tit: "孔夫子新书广场",
            src: "./data/images/cat_1.jpg",
            txt: "天地盖特藏毛边本《靳以日记书信集",
            price: 418.00,
          },
          {
            id: 1,
            num: 0,
            tit: "孔夫子新书广场",
            src: "./data/images/newbook2.jpg",
            txt: "天地盖特藏毛边本《靳以日记书信集",
            price: 360.00,
          },
          {
            id: 2,
            num: 0,
            tit: "孔夫子新书广场",
            src: "./data/images/newbook3.jpg",
            txt: "天地盖特藏毛边本《靳以日记书信集",
            price: 318.00,
          }
        ]
      },
      mutations: {
        add(state,id){
          if(state.goods[id].num >= 1){
            state.goods[id].num++
            state.totalNum++
            state.totalPrice += state.goods[id].price
          }
        },
        sub(state,id){
          if (state.goods[id].num > 1) {
            state.goods[id].num--
            state.totalNum--
            state.totalPrice -= state.goods[id].price
          }
        },
        innergoods(state,id){
          if(state.goods[id].num==0){
              state.list.push(state.goods[id]);
              state.goods[id].num=1;
              state.totalNum++
              state.totalPrice += state.goods[id].price
          }else if(state.goods[id].num>=1){
              state.goods[id].num++;
              state.totalNum++
              state.totalPrice += state.goods[id].price
          }
        },
        allPrice(state){
          state.totalNum++
        },
        shopPrice(state,id){
          state.totalPrice += state.goods[id].price
        }
    }
})
