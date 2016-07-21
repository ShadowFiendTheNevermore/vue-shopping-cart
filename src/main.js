import Vue from 'vue'
import Router from 'vue-router'
import App from './vueComponents/App.vue'
import viewCart from './vueComponents/viewCart/viewCart.vue'
import homeView from "./vueComponents/homeView/homeView.vue"
Vue.use(Router)

let router = new Router()

router.map({
    '/': {
        name: 'home',
        component: homeView,
    },
    '/viewCart': {
        name: 'viewCart',
        component: viewCart,
    }
})


router.start(App, '#vue-app')

