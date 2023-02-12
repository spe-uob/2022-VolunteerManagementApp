import Vue from 'vue'
import VueRouter from 'vue-router'
import aHeader from "@/components/aHeader";
import All_Activity from "@/components/All_Activity.vue";


Vue.use(VueRouter)

const routes = [
    //localhost:8080/header means you are going to Header page(probably case sensitive)
    {
        path: '/static-built/src/vue/dist/',
        component: aHeader,
        children: [
            {
                path: '/All_Activity',
                name: "All_Activity",
                component: All_Activity,
            },
            // {
            //     path: '/header/1-4',
            //     name: "one_four",
            //     component: one_four
            // }
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
