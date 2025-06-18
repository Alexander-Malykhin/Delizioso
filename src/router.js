import {createRouter, createWebHistory} from 'vue-router';
//COMPONENTS
import Auth from './pages/authPage.vue'
import Home from './pages/HomePage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: Auth,
        },
        {
            path: '/register',
            component: Auth,
        },
        {
            alias: '/',
            path: '/home',
            component: Home,
        }
    ]
})