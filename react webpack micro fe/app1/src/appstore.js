
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    text: "Yasin",
  },
  reducers: {
    changeText:(state,action)=>{
      console.log(state.text)
      console.log(state.text)
      state.text=action.payload
    }
  },
});

export const { changeText } = generalSlice.actions;

const appStore = configureStore({
  reducer: {
    general: generalSlice.reducer,
  },
});

export {appStore}
