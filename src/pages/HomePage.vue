<template>
  <div id="home">
    <h1>Cute Cats</h1>
    <CatImage/>
    <Button buttonName="Получить котика"/>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    CatImage: () => import("../components/CatImage"),
    Button: () => import("../components/Button"),
  },
}
</script>
