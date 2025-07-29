import axios from 'axios'


const state = {
  area: null
}

const getters = {
  allarea: (state) => state.area
}

const actions = {
  async fetcharea({ commit }) {
    const response = await axios.get('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json')
    commit('setarea', response.data)
  }
}

const mutations = {
  setarea(state, data) {
    state.area = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

