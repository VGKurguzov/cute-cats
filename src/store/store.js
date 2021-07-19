import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageCatUrl: "",
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
