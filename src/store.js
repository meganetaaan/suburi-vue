import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    reports: {},
    mode: 'list'
  },
  getters: {
    getReportsByDate: (state) => (date) => {
      return state.reports.find(report => report.date === date)
    }
  },
  actions: {
    createReport ({commit}, payload) {
      commit('createReport', payload)
    },
    updateReport ({commit}, payload) {
      commit('updateReport', payload)
    }
  },
  mutations: {
    /**
     * add an empty report
     */
    createReport (state, payload) {
      // TODO: typecheck and validation
      const report = payload.report
      const id = uuid()
      report.id = id
      console.debug('new id: ', id)
      Vue.set(state.reports, id, report)
    },

    /**
     * update a report
     */
    updateReport (state, payload) {
      const id = payload.id
      state.reports[id] = payload.report
    }
  }
})

export default store
