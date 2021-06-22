import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    name: '',
    avatar: ''
  },
  mutations: {
    SET_USER: (state, {id, name, avatar}) => {
      state.id = id
      state.name = name
      state.avatar = avatar
    }
  },
  actions: {
    saveUser: ({commit}, {id, name, avatar}) => {
      commit('SET_USER', {id, name, avatar})
    }
  },
  modules: {
  }
})
