import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/HomeView.vue";
import Courses from "../views/CoursesView";
import Lecturers from "../views/LecturersView.vue";
import CourseDetails from "../views/CourseDetailsView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/courses",
        name: "courses",
        component: Courses
    },
    {
        path: "/courses/:courseId/details",
        name: "courseDetails",
        component: CourseDetails,
        props: true
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