<template>
<div>
  <h1>404</h1>
  <h2>Page not found</h2>
  <a href="/">Go to home</a>
</div>
</template>

<script>
export default {
  name: "NotFoundPage"
}
</script>

<style scoped>
a {
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

a:hover {
  background-color: #051786;
}

a:disabled {
  background-color: #7b7da4;
  cursor: wait;
}
</style>
