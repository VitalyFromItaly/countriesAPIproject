import Vue from 'vue'
import Router from 'vue-router'
import Body from '../components/Body.vue'
import Info from '../components/Info.vue'
Vue.use(Router);
let router = new Router({
    routes: [{
            path: '/',
            name: 'body',
            component: Body
        },
        {
            path: '/info',
            name: "countries' info",
            component: Info
        }
    ],
})
export default router;