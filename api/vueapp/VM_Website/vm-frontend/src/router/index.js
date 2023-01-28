import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from "@/components/Header";
import one_one from "@/components/one_one";
import one_two from "@/components/one_two";
import one_two_one from "@/components/one_two_one.vue";
import one_three from "@/components/one_three";
import one_three_one from '@/components/one_three-one.vue';
import one_four from "@/components/one_four";
import one_four_one from "@/components/one_four_one";
import two_one from "@/components/two_one";
import two_two from "@/components/two_two.vue";
import three_one from "@/components/three_one";
import three_one_one from "@/components/three_one_one";
import three_two from "@/components/three_two";
import three_two_one from "@/components/three_two_one";







Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Header,
        children: [
            {
                path: '/header/1-1',
                name: "one_one",
                component: one_one,
            },
            {
                path: '/header/1-2',
                name: "one_two",
                component: one_two
            },
            {
                path: 'addFeedbacks',
                name: "one_two_one",
                component: one_two_one
            },
            {
                path: '/header/1-3',
                name: "one_three",
                component: one_three,
            },
            {
                path: '/addorganisations',
                name: "one_three_one",
                component: one_three_one,
            },
            {
                path: '/header/2-1',
                name: "two_one",
                component: two_one,
            },
            {
                path: '/header/2-2',
                name: "two_two",
                component: two_two,
            },
            {
                path: '/header/1-4',
                name: "one_four",
                component: one_four,
            },
            {
                path: '/header/1-4-1',
                name: "one_four_one",
                component: one_four_one,
            },
            {
                path: '/header/3-1',
                name: "three_one",
                component: three_one
            },
            {
                path: '/header/3-2',
                name: "three_two",
                component: three_two
            },
            {
                path: '/three_two/3-2-1',
                name: "three_two_one",
                component: three_two_one
            },
            {
                path: '/header/3-1-1/',
                name: '3-1-1',
                component: three_one_one,
            },
        ]
        // children: [
        //     {
        //         path: '/header/2-1',
        //         name: "two_one",
        //         component: two_one
        //     }, {
        //         path: '/header/3-1',
        //         name: "three_one",
        //         component: three_one
        //     }, {
        //         path: '/header/3-2',
        //         name: "three_two",
        //         component: three_two
        //     }, {
        //         path: '/header/3-3',
        //         name: "three_three",
        //         component: three_three
        //     },
        //     , {
        //         path: '/header/4-1',
        //         name: "four_one",
        //         component: four_one
        //     }, {
        //         path: '/header/4-2',
        //         name: "four_two",
        //         component: four_two
        //     }, {
        //         path: '/header/5',
        //         name: "five",
        //         component: five
        //     },
        // ]
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
