import Vue from 'vue'
import MainView from "@/views/MainView";
import ProfileView from "@/views/ProfileView";
import BoardFrame from "@/components/main/board/BoardFrame";
import BacklogFrame from "@/components/main/backlog/BacklogFrame";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'main',
        component: MainView,
        redirect: '/board',
        children: [
            {path: '/board', name: 'board', component: BoardFrame},
            {path: '/backlog', name: 'backlog', component: BacklogFrame},
        ]

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
