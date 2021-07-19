<template>
  <div id="app">
    <h1>Cute Cats</h1>
    <CatImage/>
    <Button/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    CatImage: () => import("./components/CatImage"),
    Button: () => import("./components/Button"),
  },
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 48px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #051786;
  margin-top: 60px;
}
</style>
