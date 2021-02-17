import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../components/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Products',
        component: Products
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.name === 'Home' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
