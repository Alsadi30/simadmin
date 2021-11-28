import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import usersReducer from './usersReducer'
import attachmentReducer from './attachmentReducer'
import simReducer from  './simReducer'
import orderReducer from  './orderReducer'
import offerReducer from  './offerReducer'


const rootReducer = combineReducers({
    loginReducer,usersReducer,attachmentReducer,simReducer,orderReducer,offerReducer
})


export default rootReducer