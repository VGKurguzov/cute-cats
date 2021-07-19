<template>
  <div>
    <img :src="imageCatUrl" alt="Loading..."/>
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
    ...mapMutations(["setNewCat"])
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
