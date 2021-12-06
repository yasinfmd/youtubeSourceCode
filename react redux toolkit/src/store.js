import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import testReducer from "./testSlice"



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        test: testReducer
    }
})