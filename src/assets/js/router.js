import VueRouter from 'vue-router'
import index from '../../component/index.vue'
import home from '../../component/home.vue'
import bookstore from '../../component/bookstore.vue'
import search from '../../component/search.vue'
import titleDetails from '../../component/titleDetails.vue'
import allFLdetails from '../../component/allFLdetails.vue'
import title2Details from '../../component/title2Details.vue'
import auctionDetails from '../../component/auctionDetails.vue'
import artDetails from '../../component/artDetails.vue'
import catDetails from '../../component/catDetails.vue'
import shopCat from '../../component/shopCat.vue'
import my from '../../component/my.vue'
import login from '../../component/login.vue'
import SMS from '../../component/SMS.vue'
import sign from '../../component/sign.vue'
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    path: '/home',
                    component: home
                },
                {
                  path: '/bookstore',
                  component: bookstore
                }
            ],
            redirect: '/home'
        },
        {
            path: "/search",
            component: search
        },
        {
            path: "/titleDetails/:m",
            component: titleDetails
        },
        {
            path: '/allFLdetails',
            component: allFLdetails
        },
        {
            path: "/title2Details/:n",
            component: title2Details
        },
        {
            path: "/auctionDetails/:id",
            component: auctionDetails
        },
        {
            path: '/artDetails',
            component: artDetails
        },
        {
          path: '/catDetails/:m',
          component: catDetails
        },
        {
          path: '/shopCat',
          component: shopCat
        },
        {
          path: '/my',
          component: my
        },
        {
            path: "/login",
            component: login
        },
        {
            path: "/SMS",
            component: SMS
        },
        {
            path: '/sign',
            component: sign
        }
    ]
})
