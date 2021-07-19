<template>
  <div>
    <img :src="imageCatUrl" alt="Loading..."/>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'CuteCats',
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
