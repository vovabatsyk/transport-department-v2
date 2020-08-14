import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    updatePhotos(state, photos) {
        state.photos = photos
    },
    updateEvacuationPhotos(state, photos) {
      state.photos = photos
    }
  },
  actions: {

    async fetchPhotos({commit}, payload) {
      const res = await fetch("http://localhost:3000/photos")
      let photos = await res.json()
      photos = photos.find(v => v.numberCar === payload.numberCar && v.numberDecree === payload.numberDecree)
      commit('updatePhotos', photos)
    },
    async fetchEvacuationPhotos({commit}, payload) {
      const res = await fetch("http://localhost:3000/photos")
      let photos = await res.json()
      photos = photos.find(v => v.evacuation === true && v.numberCar === payload.numberCar)
      commit('updateEvacuationPhotos', photos)
    }
  },
  getters: {
    getPhotos(state) {
      return state.photos
    }
  },
  modules: {}
})
