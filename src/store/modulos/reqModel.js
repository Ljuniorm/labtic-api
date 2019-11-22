
export default {
    state:{
        pageOne: {
            name: '',
            description: '',
            path:'',
            method:'',
        },
    },
    mutations:{
        SET_PAGE_ONE(state, payload){
            state.pageOne.name = payload.name
            state.pageOne.description = payload.description
            state.pageOne.path = payload.path
            state.pageOne.method = payload.method
        }
    }
}