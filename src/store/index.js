import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    name: '',
    avatar: '',
    events: [],
    allEvents: []
  },
  mutations: {
    SET_USER: (state, {id, name, avatar, events}) => {
      state.id = id
      state.name = name
      state.avatar = avatar
      state.events = events
    },
    SET_EVENTS: (state, res) => {
      state.allEvents = res
    }
  },
  actions: {
    saveUser: ({commit}, {id, name, avatar, events}) => {
      commit('SET_USER', {id, name, avatar, events})
    },
    getEvents: async ({commit}) => {
      let globalEvents = await db.collection("allEvents").doc('here').get()
      let res = globalEvents.data().events
      commit('SET_EVENTS', res)
    }
  },
  modules: {
  }
})
