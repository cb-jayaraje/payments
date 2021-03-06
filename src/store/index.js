import { createStore } from "vuex";
import billingModules from './modules/billingList.js'
import benefitaryModules from './modules/benetiary'
import settlementModules from "./modules/settlement.js";
import userDetail from "./modules/userDetail.js";

const store = createStore({
    modules: {
        billing:billingModules,
        beneDetails: benefitaryModules,
        settlement: settlementModules,
        userDetail: userDetail
    },
    state() {
        return {
            test: true,
            cbReview: false,
            cbPaymentActive: false,
            cbPaymentSuccess: false,
            step: 'step1',
            cbConfigure: true,
            cbReviewStatus: 'configure',
            userAuth: false,
            sandBoxModel: true,
           

        }
    },
    mutations: {
        openCbReview(state, payload) {
            console.log(payload.cbReview)
            state.cbReview = payload.cbReview
        },
        activeCbPayment(state, payload) {
            state.cbPaymentActive = payload.cbPayment
        },
        successCbPayment(state, payload) {
            state.cbPaymentSuccess = payload.cbPayment
        },
        configureCb(state, payload) {
            state.cbConfigure = payload.cbConfigure
        },
        stepChage(state, payload){
            state.step = payload.step
        },

        changeCbReviewStatus(state, payload) {
            state.cbReviewStatus = payload.cbStatus
        },
        setUserAuth(state, payload){
            state.userAuth = payload.isUserAuth
        },
        setSandBoxModal(state, payload){
            state.sandBoxModel = payload.isModal
        }
    },
    actions: {
        cbReviewOpen(context, payload) {
            context.commit('openCbReview', payload)
        },
        cbPaymentActive(context, payload) {
            context.commit('activeCbPayment', payload)
        },
        changeStep(context, payload){
            context.commit('stepChage', payload)
        },
        cbPaymentSuccess(context, payload) {
            context.commit('successCbPayment', payload)
        },
        cbConfigurePanel(context, payload) {
            context.commit('configureCb', payload)
        },
        cbReviewChange(context, payload){
            context.commit('changeCbReviewStatus', payload)
        },
        cbUserAuth(context,payload){
            context.commit('setUserAuth', payload)
        },
        cbSandBox(context, payload) {
            context.commit('setSandBoxModal', payload)
        }
    },
    getters:{
        test(state) {
            return state.test 
        },
        cbReview(state){
            return state.cbReview
        },
        cbPaymentActive(state){
            return state.cbPaymentActive
        },
        step(state){
            return state.step
        },
        cbPaymentSuccess(state) {
            return state.cbPaymentSuccess
        },
        cbConfigure(state) {
            return state.cbConfigure
        },
        cbReviewStatus(state) {
            return state.cbReviewStatus
        },
        isAuthendicated(state) {
            return state.userAuth
        },
        sandBoxModal(state) {
            return state.sandBoxModel
        }
        

    }
});

export default store;