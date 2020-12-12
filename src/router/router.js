import Vue from 'vue'
import Router from 'vue-router'
import Body from '../components/Body.vue'
import Info from '../components/Info.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [{
            path: '',
            name: 'home',
            component: Body,
            props: true,
        },
        {
            path: '/info/:countryName',
            name: "info",
            component: Info,
            props: true
        },
        {
            path: '*',
            name: "not-found",
            component: NotFound,
            props: true
        },
    ],
})
export default router;