import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import usersReducer from './usersReducer'
import simsReducer from  './simReducer'

const rootReducer = combineReducers({
    loginReducer,usersReducer,simsReducer
})


export default rootReducer