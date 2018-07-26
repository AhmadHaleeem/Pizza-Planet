import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store'
import Accounting from 'accounting-js'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // return {selector: 'h1'}
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 0 }
        // }
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
})

Vue.filter('currency', (val) => {
    return Accounting.formatMoney(val)
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
