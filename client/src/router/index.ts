import { createRouter, createWebHistory, Router, RouteRecord, RouteRecordRaw } from "vue-router"

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Current from "../pages/Current.vue"
import Completed from "../pages/Completed.vue"
import { useSession } from "../models/session";

const routes: RouteRecordRaw[] = [
  { path: '/', redirect:'/tasks' },
  { path: '/tasks', component: Home },
  { path: '/completedtasks', component: Completed },
  { path: '/currenttasks', component: Current },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
]


const router : Router = createRouter({
  history: createWebHistory(),
  routes, 
  linkActiveClass: "is-active",
})

router.beforeEach((to, form) =>{
  const session = useSession();
  if(['/tasks'].includes(to.path)){
      if(!session.user){
          router.push('/login');
      }
  }
  else if(['/login', '/signup'].includes(to.path)){
    if(session.user){
        router.push('/tasks');
    }
}
})

export default router;
