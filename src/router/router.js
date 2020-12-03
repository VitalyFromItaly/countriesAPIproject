import Vue from 'vue'
import Router from 'vue-router'
import Body from '../components/Body.vue'
import Info from '../components/Info.vue'

Vue.use(Router);
let router = new Router({
    routes: [{
            path: '',
            name: 'home',
            component: Body,
            props: true,
        },
        {
            path: '/info',
            name: "info",
            component: Info,
            props: true
        },

    ],
})
export default router;