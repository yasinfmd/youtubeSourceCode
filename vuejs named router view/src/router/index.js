import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/Users.vue'
import ProductsView from '../views/Products.vue'
import UsersLeftSideBar from '../views/UsersLeftSideBar.vue'
import ProductsLeftSidebar from '../views/ProductsLeftSidebar.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    components: {
     default: UsersView,
     leftSideBar:UsersLeftSideBar
    }
  },
  {
    path: '/products',
    name: 'products',
    components: {
     default:ProductsView,
     leftSideBar:ProductsLeftSidebar

    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
