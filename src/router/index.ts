import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store/index';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: ()=> import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
   
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
