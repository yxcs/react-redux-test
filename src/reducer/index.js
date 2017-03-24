/**
 * Created by Administrator on 2017/3/22.
 */
import { combineReducers } from "redux"
import UserReducer from "./UserReducer"
import AppleReducer from "./AppleReducer"

export default combineReducers({
    UserReducer,
    AppleReducer
})