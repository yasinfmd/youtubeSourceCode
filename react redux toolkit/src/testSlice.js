import { createSlice } from "@reduxjs/toolkit"


const initialValue = {
    name: "yasin"
}

export const testSlice = createSlice({
    name: "test",
    initialState: initialValue,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
    }
})

export const { changeName } = testSlice.actions
export default testSlice.reducer
