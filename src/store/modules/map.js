
// initial state
const state = {
  latitude: null,
  longitude: null,
  zoom: null,
}

// getters
const getters = {
}

// actions
const actions = {
  updateCoordinates({commit}, {latitude, longitude, zoom}) {
    commit('SET_COORDINATES', {latitude, longitude, zoom})
  },
}

// mutations
const mutations = {
  SET_COORDINATES (state, {latitude, longitude, zoom}) {
    state.latitude = latitude
    state.longitude = longitude
    state.zoom = zoom
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
