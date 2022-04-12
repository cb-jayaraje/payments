import { createStore } from "vuex";
import billingModules from './modules/billingList.js'
import benefitaryModules from './modules/benetiary'
import settlementModules from "./modules/settlement.js";

const store = createStore({
    modules: {
        billing:billingModules,
        beneDetails: benefitaryModules,
        settlement: settlementModules
    },
    state() {
        return {
            test: true,
            cbReview: false
        }
    },
    mutations: {
        openCbReview(state, payload) {
            console.log(payload.cbReview)
            state.cbReview = payload.cbReview
        }
    },
    actions: {
        cbReviewOpen(context, payload) {
            context.commit('openCbReview', payload)
        }
    },
    getters:{
        test(state) {
            return state.test 
        },
        cbReview(state){
            return state.cbReview
        }
    }
});

export default store;