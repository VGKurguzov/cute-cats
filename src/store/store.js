import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageCatUrl: "https://cdn2.thecatapi.com/images/b2b.jpg",
    loadedStatusButton: false
  },
  mutations: {
    setNewCat(state, url) {
      state.imageCatUrl = url;
    },
    setLoadedStatusButton(state, status) {
      state.loadedStatusButton = status;
    }
  }
});
