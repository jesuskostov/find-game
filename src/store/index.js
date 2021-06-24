import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    name: '',
    avatar: '',
    events: null
  },
  mutations: {
    SET_USER: (state, {id, name, avatar, events}) => {
      state.id = id
      state.name = name
      state.avatar = avatar
      state.events = events
    }
  },
  actions: {
    saveUser: ({commit}, {id, name, avatar, events}) => {
      commit('SET_USER', {id, name, avatar, events})
    }
  },
  modules: {
  }
})
