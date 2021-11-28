import Types from '../actions/type'

let init = {
    offers:[],
    error: {},
    isLoading:true
}

const offerReducer = (state = init, action) => {
    switch (action.type) {
        case Types.GET_OFFERS: {
            return {
                offers: action.payload.offers,
                errorr: {},
                isOLoading: false
            }
        }
        case Types.OFFERS_ERROR: {
            return {
                ...state,
                error: action.payload.error,
                isLoading:false
            }
        }
        default: return state
    }
}


export default offerReducer