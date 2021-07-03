import SecureLS from 'secure-ls'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)


const ls = new SecureLS({
  isCompression: true
})

export default new Vuex.Store({
  plugins: [createPersistedState({
    // key: "StateKey",
    paths: ["isim"],
    overwrite: true,
    // getState(key, storage) {
    //   console.log(`key`, key)
    //   console.log(`storage`, storage)

    // },
    storage: {
      getItem: (key) => {
        return ls.get(key)
        // localStorage.getItem(key)
      },
      setItem: (key, value) => {
        ls.set(key, value)
        //localStorage.setItem(key, value)
      },
      removeItem: (key) => {
        ls.remove(key)
        // localStorage.removeItem(key)
      }
    }
  })],
  state: {
    isim: "yasin"
  },
  mutations: {
    setName(state, payload) {
      state.isim = payload
    }
  },
  actions: {
    setNewName(context, payload) {
      context.commit("setName", payload)
    }
  },
  getters: {
    getName(state) {
      return state.isim
    }
  },
  modules: {
  }
})
