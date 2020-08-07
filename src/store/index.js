import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [
    //   {
    //     'id': 1,
    //     'numberDecree': '222222',
    //     'numberCar': 'BC4010AI',
    //     'evacuation': false,
    //     'img': [
    //       'https://media.acc.cv.ua/news/article/2017/11/20/4339/23770080_1752284431508977_538847648_o.g.jpg',
    //       'https://pmg.ua/uploads/2019-06/07/5cfa15343da91-1.jpg'
    //     ]
    //   },
    //   {
    //     'id': 2,
    //     'numberDecree': '111111',
    //     'numberCar': '1111',
    //     'evacuation': true,
    //     'img': [
    //       'https://rv.suspilne.media/cdn/1/image/2019/03/15/b12868a403a85bdf3e45989320bb8692.jpg',
    //       'https://ternopilcity.gov.ua/app4/%D0%B5%D0%B2%D0%B0%D0%BA%D1%83%D0%B0%D1%82%D0%BE%D1%80%20%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%2004-07-2020%20(1).JPG'
    //     ]
    //   },
    //   {
    //     'id': 3,
    //     'numberDecree': '333333',
    //     'numberCar': '0000',
    //     'evacuation': true,
    //     'img': [
    //       'https://media.acc.cv.ua/news/article/2017/11/20/4339/23770080_1752284431508977_538847648_o.g.jpg',
    //       'https://pmg.ua/uploads/2019-06/07/5cfa15343da91-1.jpg'
    //     ]
    //   }
    ]
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
    // async fetchPhotos({commit}, payload) {
    //   const photos = await this.state.photos
    //     .filter(v => v.numberCar === payload.numberCar && v.numberDecree === payload.numberDecree)
    //   commit('updatePhotos', photos) // TODO make a validation check
    //   return photos
    // },

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
