import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/films',
    component:()=>import("@/views/Films")
  },
  {
    path:'/center',
    component:()=>import("@/views/Center")
  },
  {
    path:'/cinema',
    component:()=>import("@/views/Cinema")
  },
  {
    path:'/login',
    component:()=>import('@/views/Login')
  },
  {
    path:'/detail',
    component:()=>import('@/views/Detail')
  },
  {
    path:'/city',
    component:()=>import('@/views/City')
  },
  {
    path:'/search',
    component:()=>import('@/views/Search')
  },
  {
    path:'/',
    redirect:'/films'
  },
  {
    path:'*',
    redirect:'/films'
  }
]

const router = new VueRouter({
  routes
})

export default router
