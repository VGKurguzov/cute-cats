<template>
  <div>
    <button v-on:click="getCat" :disabled="loadedStatusButton">Получить котика</button>
  </div>
</template>

<script>
import theCatApi from "../api/theCatApi";
import {mapMutations, mapState} from "vuex";

export default {
  methods: {
    ...mapMutations(["setNewCat", 'setLoadedStatusButton']),
    async getCat() {
      this.setLoadedStatusButton(true);
      const url = await theCatApi.getCatApi();
      this.setNewCat(url);
      this.setLoadedStatusButton(false);
    }
  },
  computed: {
    ...mapState(['loadedStatusButton'])
  }
}
</script>

<style scoped>
button {
  background-color: #1f55e0;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
}

button:hover {
  background-color: #051786;
}

button:disabled {
  background-color: #7b7da4;
  cursor: wait;
}
</style>
