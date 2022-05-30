import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/HomeView.vue";
import Lecturers from "../views/LecturersView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/lecturers",
        name: "lecturers",
        component: Lecturers
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;