<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.container {
  width: 1180px;
  margin: 0 auto;
  padding: 63px 0 80px;
}
</style>

