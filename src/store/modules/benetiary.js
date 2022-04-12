export default {
    namespaced: true,
    state() {
        return {
           benefitiaryDetails: [
               {
                   id: 'b1',
                   name: 'Ricardo Cooper',
                   email: 'ricardo.cooper@example.com',
                   desc: 25,
                   tax_id: 'xxxxxxxxx'
               },
               {
                id: 'b2',
                name: 'Ricardo Cooper',
                email: 'ricardo.cooper@example.com',
                desc: 25,
                tax_id: 'xxxxxxxxx'
            },
            {
                id: 'b3',
                name: 'Ricardo Cooper',
                email: 'ricardo.cooper@example.com',
                desc: 25,
                tax_id: 'xxxxxxxxx'
            }
            ], 
        }
    },
    mutations:{
        addBenetolist(state, payload) {
            const beneData = payload.bene;
            state.benefitiaryDetails.push(beneData)

            console.log("bene", state.benefitiaryDetails)
        }
    },
    actions: {
        addtoBene(context, payload) {
            console.log("asdasd")
            context.commit('addBenetolist', payload)
        } 
    },

    getters: {
        benefitiaryDetails(state){
            return state.benefitiaryDetails
        }
    }
}