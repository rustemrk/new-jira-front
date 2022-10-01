import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/views/MainView";
import ProfileView from "@/views/ProfileView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/main',
        name: 'main',
        component: MainView,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
