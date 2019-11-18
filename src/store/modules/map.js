
const axios = require('axios')
const api_url = require('../../config').api_url

// initial state
const state = {
  latitude: null,
  longitude: null,
  zoom: null,
}

// getters
const getters = {
  // products: state => {
  //   return state.products
  // },
  // term: state => {
  //   return state.term
  // },
  // productShops: (state) => {
  //   return state.productShops
  // }
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
