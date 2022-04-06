export default {
    namespaced: true,
    state() {
        return {
            billingListDetails: [
                {
                id:'b1', title: "Business profile", subTitle: "Organization address and time zone", text: "Asia/Calcutta IST"
                },
                {
                id:'b2', title: "Billing LogIQ", subTitle: "Essential and advanced billing configurations, fraud monitoring, card validation, and more", text: ""
                },
                {
                id:'b3', title: "Pause subscription", subTitle: "", text: ""
                },
                 {
                id:'b4', title: "Gift subscription", subTitle: "", text: ""
                },
                 {
                id:'b5', title: "Account Hierarchy", subTitle: "", text: ""
                },
                 {
                id:'b6', title: "Subscription cancellation", subTitle: "", text: ""
                },
                 {
                id:'b7', title: "Unbilled charges", subTitle: "", text: ""
                },
                 {
                id:'b8', title: "Consolidated invoicing", subTitle: "", text: ""
                },
                 {
                id:'b9', title: "Payment gateways", subTitle: "", text: "Stripe, + 1 more..."
                },
                 {
                id:'b10', title: "Chargeback management", subTitle: "", text: ""
                },
                 {
                id:'b11', title: "Currencies", subTitle: "", text: "USD, AUD, + 1 more..."
                },
                 {
                id:'b12', title: "Taxes", subTitle: "", text: "EU Region , + 7 more..."
                },
               
            ],
        }
    },
    mutations: {},
    actions: {},
    getters:{
        billingListDetails(state) {
            return state.billingListDetails;
        },
    }
}