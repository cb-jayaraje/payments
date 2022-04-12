export default {
    namespaced: true,
    state(){
        return {
            openModal: false
        }
    },
    mutations: {
        openModal(state, payload) {
            state.openModal = payload.modalOpen
        },
      

    },
    actions:{
        modalOpen(context, payload) {
            context.commit('openModal', payload);
        },
     
    },
    getters:{
        openModal(state) { 
            return state.openModal
        }
    }
}