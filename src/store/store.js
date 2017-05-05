import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    desc: ''
  },
  mutations: {
    SET_DESC (state, desc) {
      console.log(state)
      state.desc = desc
    }
  },
  actions: {
    setDesc ({commit}, desc) {
      commit('SET_DESC', desc)
    }
  },
  getters: {
    getDesc: (state) => state.desc
  }
})
