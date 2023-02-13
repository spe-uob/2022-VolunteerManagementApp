import Vue from 'vue'
import VueRouter from 'vue-router'
import aHeader from "@/components/aHeader";
import actionTable from '@/components/myTable'
import All_Activity from "@/components/All_Activity.vue";
import referralTable from "@/components/referralTable"
import residentPage from '@/components/residentPage'


Vue.use(VueRouter)

const routes = [
    //localhost:8080/header means you are going to Header page(probably case sensitive)
    {
        path: '/static-built/src/vue/dist/',
        component: aHeader,
        children: [
            {
                path: '/All Activity',
                name: "All_Activity",
                component: All_Activity,
            },
            {
                path: '/Actions',
                name: 'Actions',
                component: actionTable
            },
            {
                path: '/Referrals',
                name: 'Referrals',
                component: referralTable
            },
            {
                path: '/Start_Call',
                name: ' Start_call',
                component: Start_Call,
                children: [
                    {
                        path: '/add/:id',
                        name: 'add',
                        component: residentPage
                    }
                ]
            },
        ]
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
