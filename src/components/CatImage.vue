<template>
  <div>
    <img @load="isLoad" :src="imageCatUrl" alt="Loading..."/>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import theCatApi from "../api/theCatApi";

export default {
  name: 'CuteCats',
  async mounted() {
    const url = await theCatApi.getCatApi();
    this.setNewCat(url);
  },
  methods: {
    ...mapMutations(["setNewCat", "setLoadedStatusButton"]),
    isLoad() {
      this.setLoadedStatusButton(false);
    }
  },
  computed: {
    ...mapState(["imageCatUrl"])
  }
}
</script>

<style scoped>
img {
  display: block;
  margin: 10px auto;
  max-width: 350px;
}
</style>
