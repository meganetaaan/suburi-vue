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
    getReportById: (state) => (id) => {
      return state.reports[id]
    },
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
      const report = payload.report
      const id = report.id
      console.debug('update id: ', id)
      Vue.set(state.reports, id, report)
    }
  }
})

export default store
