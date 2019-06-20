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
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
* {
  box-sizing: border-box;
}
.container {
  width: 1180px;
  margin: 0 auto;
  padding: 63px 0 80px;
}
</style>

