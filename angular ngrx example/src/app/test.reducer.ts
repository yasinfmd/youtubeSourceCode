import {Action, ActionReducerMap, createReducer, on} from "@ngrx/store";
import {increment} from "./test.actions";

export const initialState=0
const _counterReducer=createReducer(
  initialState,
  on(increment,(state,action)=>{
    console.log(state,action)
    return state+action.payload
  })
)

export function counterReducer(state:number|undefined,action:Action){
  return _counterReducer(state,action)
}

export interface State{
  count:number
}

export const rootReducer:ActionReducerMap<State>={
  count:counterReducer
}
