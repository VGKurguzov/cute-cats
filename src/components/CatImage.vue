<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1></h1>
    <img :src="url" alt="Loading..."/>
    <button v-on:click="getCat">{{ nameBtn }}</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CuteCats',

  data() {
    return {
      msg: 'Cute Cats',
      nameBtn: "Получить котика",
      url: ""
    }
  },
  mounted() {
    this.url = "https://cdn2.thecatapi.com/images/b2b.jpg"
  },
  methods: {
    async getCat() {
      await axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
          this.url = response.data[0].url;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>
img {
  display: block;
  margin: 10px auto;
  max-width: 350px;
}

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
</style>
