import Types from '../actions/type'

let init = {
    sims: [],
    error: {},
    isLoading:true
}

const simReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_SIMS: {
            return {
                ...state,
                sims: action.payload.sims,
                error: {},
                isLoading: false
            }
        }
        case Types.UPDATE_SIM_AC_STATUE :{
            return {
                ...state,
                sims: state.sims.filter(sim => sim.id === action.payload.sim.id?action.payload.sim:sim) ,
                error: {},
                isLoading:false
            }
        }
        case Types.SIMS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}


export default simReducer