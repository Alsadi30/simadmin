import Types from '../actions/type'


const init = {
    attachments:[],
    errors: {},
    isLoadingg:true
}

const attachmentReducer =(state=init,action) =>{
    switch(action.type){
        case Types.SET_ATTACHMENTS :{
            return {
                attachments: action.payload.attachments,
                error: {},
                isLoadingg:false
            }
        }
        case Types.DELETE_ATTACHMENTS :{
            return {
                ...state,
                attachments: state.attachments.filter(attachment => attachment.id !== action.payload.id),
                error: {},
                isLoadingg:false
            }
        }
       
        case Types.ATTACHMENTS_ERROR : {
            return {
                ...state,
                error: action.payload.error,
                isLoadingg:false
            }
        }
        default: return state
    }
}


export default attachmentReducer