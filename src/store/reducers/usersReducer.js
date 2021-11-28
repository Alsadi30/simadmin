import Types from '../actions/type'


const init = {
    users: [],
    nonuser:[],
    error: {},
    isLoding:true
}

const usersReducer =(state=init,action) =>{
    switch (action.type) {
        case Types.SET_NONUSER :{
            return {
                ...state,
                nonuser: action.payload.user,
                error: {},
                isLoding:false
            }
        }
        case Types.NONUSER_ERROR : {
            return {
                ...state,
                error: action.payload.error
            }
        }
        case Types.SET_USERS :{
            return {
                ...state,
                users: action.payload.users,
                error: {},
                isLoding:false
            }
        }
        case Types.USERS_ERROR : {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}


export default usersReducer