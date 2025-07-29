import axios from 'axios'

const state = {
  area: null
}

const getters = {
  allarea(state) {
    return state.area
  }
}

const mutations = {
  setarea(state, data) {
    state.area = data
  }
}

const actions = {
  async fetcharea({ commit }) {
    const res = await axios.get(
      'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json'
    )
    commit('setarea', res.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

