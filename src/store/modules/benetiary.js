export default {
    namespaced: true,
    state() {
        return {
           benefitiaryDetails: [
            //    {
            //        id: 'b1',
            //        name: 'Ricardo Cooper',
            //        email: 'ricardo.cooper@example.com',
            //        desc: 25,
            //        tax_id: 'xxxxxxxxx'
            //    },
            //    {
            //     id: 'b2',
            //     name: 'Ricardo Cooper',
            //     email: 'ricardo.cooper@example.com',
            //     desc: 25,
            //     tax_id: 'xxxxxxxxx'
            // },
            // {
            //     id: 'b3',
            //     name: 'Ricardo Cooper',
            //     email: 'ricardo.cooper@example.com',
            //     desc: 25,
            //     tax_id: 'xxxxxxxxx'
            // }
            ], 
        }
    },
    mutations:{
        addBenetolist(state, payload) {
            const beneData = payload.bene;
            state.benefitiaryDetails.push(beneData)

            //console.log("bene", state.benefitiaryDetails)
        },
        removeBeneFromList(state, payload){
            const filterBene = state.benefitiaryDetails.filter(f => f.id !== payload.id );

            state.benefitiaryDetails = filterBene

           console.log('newBene', state.benefitiaryDetails)
        }
    },
    actions: {
        addtoBene(context, payload) {
         
            context.commit('addBenetolist', payload)
        },
        removeBene(context, payload){
            console.log("bene", payload)
            context.commit('removeBeneFromList', payload)
        }
    },

    getters: {
        benefitiaryDetails(state){
            return state.benefitiaryDetails
        }
    }
}