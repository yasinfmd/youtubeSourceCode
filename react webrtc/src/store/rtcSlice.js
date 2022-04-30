import {createSlice} from "@reduxjs/toolkit";


const RtcSlice = createSlice({
    name: "RTCSlice",
    initialState: {
        localStream: null,
        remoteStream: null
    },
    reducers: {
        setRemoteStream: (state, action) => {
            state.remoteStream = action.payload
        },
        setLocalStream: (state, action) => {
            state.localStream = action.payload
        }
    }
})
export const {
    setRemoteStream,setLocalStream
}=RtcSlice.actions

export default RtcSlice.reducer
