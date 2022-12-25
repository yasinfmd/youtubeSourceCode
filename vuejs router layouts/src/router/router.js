
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import HomeLayout from '../Layouts/HomeLayout.vue'
import UserLayout from '../Layouts/UserLayout.vue'


import {createRouter,createWebHistory} from 'vue-router'

const routers=[
    {
        path:'/',
        component:Home,
        name:'home',
        meta:{
            layout:HomeLayout
        }
    },
    {
        path:'/users',
        component:Users,
        name:'users',
        meta:{
            layout:UserLayout
        }

    }
]

const router=createRouter(
    {
        history:createWebHistory(),
        routes:routers
    }
)
export default router