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
  {
    path : '/edituser/:userId',
    name : 'editUser',
    component: ()=> import(/* webpackChunkName: "edit" */ "@/views/EditUser.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
