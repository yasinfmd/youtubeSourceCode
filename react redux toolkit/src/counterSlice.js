import { createSlice } from "@reduxjs/toolkit"


const initialValue = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialValue,
    reducers: {
        incremenet: (state) => {
            state.count += 5
        },
        decrement: (state) => {
            state.count -= 5
        }
    }
})

export const { incremenet, decrement } = counterSlice.actions
export default counterSlice.reducer
