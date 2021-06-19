import Vue from 'vue'
import VueRouter from 'vue-router'

// For lazy loading
const Home = () => import('@/views/home/Home')
const ShopCart = () => import('@/views/cart/ShopCart')
const Category = () => import('@/views/category/Category')
const Profile = () => import('@/views/profile/Profile')

// Install plugins
Vue.use(VueRouter)

// Create router object
const routes = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/cart',
        component: ShopCart,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/profile',
        component: Profile,
    }
]
const router = new VueRouter({
    routes: routes,
    mode: 'history',
})

// Export router
export default router
