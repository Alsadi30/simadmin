import Types from '../actions/type'

let init = {
    nonAcOrder: [],
    orders:[],
    errorr: {},
    isOLoading:true
}

const orderReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_NONACORDER: {
            return {
                ...state,
                nonAcOrder: action.payload.orders,
                errorr: {},
                isOLoading: false
            }
        }
        case Types.SET_ORDER: {
            return {
                ...state,
                orders: action.payload.orders,
                errorr: {},
                isOLoading: false
            }
        }
        case Types.UPDATE_ORDER_AC_STATUS :{
            return {
                ...state,
                orders: state.orders.filter(order => order.id === action.payload.order.id?action.payload.order:order) ,
                errorr: {},
                isOLoading:false
            }
        }
        case Types.ORDERS_ERROR: {
            return {
                ...state,
                errorr: action.payload.error,
                isOLoading:false
            }
        }
        default: return state
    }
}


export default orderReducer