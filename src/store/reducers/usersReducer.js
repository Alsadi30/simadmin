import Types from '../actions/type'


const init = {
    users:[],
    error: {},
    isLoding:true
}

const usersReducer =(state=init,action) =>{
    switch(action.type){
        case Types.SET_USERS :{
            return {
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