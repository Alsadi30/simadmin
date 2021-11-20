import Types from '../actions/type'


const init = {
    attachments:[],
    errors: {},
    isLoadingg:true
}

const simsReducer =(state=init,action) =>{
    switch(action.type){
        case Types.SET_ATTACHMENTS :{
            return {
                attachments: action.payload.attachments,
                error: {},
                isLoding:false
            }
        }
        case Types.ATTACHMENTS_ERROR : {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}


export default simsReducer