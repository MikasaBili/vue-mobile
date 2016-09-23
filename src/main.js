import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

routerConfig(router);
router.start(App, '#app')


window.router = router