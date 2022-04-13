
import { createRouter, createWebHistory } from 'vue-router';
import Signin from './../view/Signin.vue'
import Dashboard from './../view/dashboard/Dashboard.vue'
import Main from './../view/dashboard/Main.vue'
import Settings from './../view/settings/Settings.vue'
import PaymentGateway from '../view/settings/configure-chargebee/PaymentGateway.vue';
import ConfigurePayments from '../view/settings/configure-chargebee/configure/Configure.vue'
import BusinessProfile from '../view/settings/configure-chargebee/configure/BusinessProfile.vue'
import OperationsOwnership from '../view/settings/configure-chargebee/configure/OperationsOwnership.vue'
import Settlement from '../view/settings/configure-chargebee/configure/Settlement.vue';
import SettlementSuccess from '../view/settings/configure-chargebee/configure/SettlementSuccess.vue' 
import ConfigureGateway from '../view/configure/ConfigureGateway.vue'


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
            },
            {
                path: '/configure-gateway',
                component: ConfigureGateway
            }
        ]
    },
    {
        path: '/configure-chargebee-payments',
        name: 'configure',
        component: ConfigurePayments,
        children: [
            {
                path: '',
                component: BusinessProfile
            },
            {
                path: '/operations-ownership',
                component: OperationsOwnership
            },
            {
                path: '/settelment',
                component: Settlement
            },
            
        ]
    },
    {
        path: '/settelment-success',
        component: SettlementSuccess
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      //  console.log(to, from, savedPosition)
        return {left:0, top:0}
    }

})

export default router