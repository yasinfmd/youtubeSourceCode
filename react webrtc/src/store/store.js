import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";

import rtcSlice from "./rtcSlice";


const rootReducer=combineReducers({
    rtc:rtcSlice
})

const store=configureStore({
    reducer:rootReducer
})
export default store
