import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'
import NippoDao from './db.js'

Vue.use(Vuex)
var nippoDao

(async function () {
  nippoDao = new NippoDao()
  await nippoDao.connect()
})()

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
    async sync ({commit}, payload) {
      const reports = await nippoDao.getAllReports()
      commit('setReports', {reports})
    },
    async createReport ({commit}, payload) {
      const report = payload.report
      const id = uuid()
      report.id = id
      try {
        await nippoDao.addReport(payload.report)
        commit('updateReport', payload)
      } catch (e) {
        console.log(e)
      }
    },
    async updateReport ({commit}, payload) {
      try {
        await nippoDao.updateReport(payload.report)
        commit('updateReport', payload)
      } catch (e) {
        console.log(e)
      }
    }
  },
  mutations: {
    /**
     * update a report
     */
    updateReport (state, payload) {
      const report = payload.report
      const id = report.id
      console.debug('update id: ', id)
      Vue.set(state.reports, id, report)
    },

    /**
     * set all the reports
     */
    setReports (state, payload) {
      const reports = payload.reports
      console.debug('reset all the reports: ', reports)
      for (const report of reports) {
        Vue.set(state.reports, report.id, report)
      }
    }
  }
})

export default store
