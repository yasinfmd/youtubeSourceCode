import { createStore, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
const initialCounterState = {
    count: 0
}
const count = function reducer(state = initialCounterState, action) {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + action.payload }
        case "DEC":
            return { ...state, count: state.count - action.payload }
        default:
            return state
    }
}
const combineReducer = combineReducers({
    count
})

const initialStore = () => {
    return createStore(combineReducer)
}

export const wrapper = createWrapper(initialStore)