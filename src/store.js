import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    reports: [],
    count: 0,
    mode: 'list'
  },
  getters: {
    getReportsByDate:  (state) => (date) => {
      return state.reports.find(report => report.date === date)
    }
  },
  actions: {
    addReport ({commit}, report) {
      commit('addReport', report)
    }
  },
  mutations: {
    addReport (state, report) {
      // TODO: typecheck and validation
      state.reports.push({
        id: state.count,
        date: report.date,
        startTime: report.date,
        endTime: report.date,
        genre: report.genre,
        title: report.title,
        comment: report.comment,
        attachedImage: report.attachedImage
      })
      state.count++
    },
    update (state){
      state.count++
    }
  }
})

export default store
