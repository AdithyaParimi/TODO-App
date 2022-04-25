import { createRouter, createWebHistory, Router, RouteRecord, RouteRecordRaw } from "vue-router"

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import session from "../models/session"

const routes: RouteRecordRaw[] = [
  { path: '/home', component: Home },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
]


const router : Router = createRouter({
  history: createWebHistory(),
  routes, 
  linkActiveClass: "is-active",
})

router.beforeEach((to, form) =>{
  if(['/home'].includes(to.path)){
      if(!session.user){
          router.push('/login');
      }
  }
  else if(['/login', '/signup'].includes(to.path)){
    if(session.user){
        router.push('/home');
    }
}
})

export default router;