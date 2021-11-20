import Types from '../actions/type'


const init ={
    isAuthenticated: false,
    me:{},
    error: {},
    isLoding:true
}

const loginReducer =(state=init,action) =>{
    switch(action.type){
        case Types.SET_ME :{
            return {
                me: action.payload.user,
                isAuthenticated:Object.keys(action.payload.user).length > 0?true:false,
                error: {},
                isLoding:false
            }
        }
        case Types.ME_ERROR : {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}


export default loginReducer