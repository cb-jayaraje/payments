export default{
    namespaced: true,
    state(){
        return {
            userInfo: {}
        }
    },
    mutations: {
        userInfoDetails(state, payload) {
            state.userInfo = payload.user;
            //console.log(state.userInfo.email)
        },
      

    },
    actions:{
        getUserInfo(context, payload) {
            context.commit('userInfoDetails', payload);
        },
     
    },
    getters:{
        userInfo(state) { 
            return state.userInfo
        }
    }
}