
import { createRouter, createWebHistory } from 'vue-router';
import Signin from './../view/Signin.vue'
import Dashboard from './../view/dashboard/Dashboard.vue'
import Main from './../view/dashboard/Main.vue'
import Settings from './../view/settings/Settings.vue'
import PaymentGateway from '../view/settings/configure-chargebee/PaymentGateway.vue';


const routes = [
    {
        path:'/login',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                component: Main
            },
            {
                path:'/settings',
                component: Settings
            },
            {
                path: '/payment_gateways',
                component: PaymentGateway
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router