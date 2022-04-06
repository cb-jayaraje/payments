import { createStore } from "vuex";
import billingModules from './modules/billingList.js'

const store = createStore({
    modules: {
        billing:billingModules
    },
    state() {
        return {
            test: true
        }
    },
    mutations: {},
    actions: {},
    getters:{
        test(state) {
            return state.test 
        }
    }
});

export default store;