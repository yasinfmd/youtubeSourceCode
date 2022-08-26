export const state=()=>({
  name:"Yasin"
})

export const getters={
  getName(state){
    return state.name
  }
}

export const mutations={
  setName(state,payload){
    state.name=payload
  }
}

export const actions={
  changeName(ctx,data){
    ctx.commit('setName',data)
  }
}
