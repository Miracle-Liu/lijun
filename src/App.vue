<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components:{
  },
  created() {
    const lang = navigator.systemLanguage
      ? navigator.systemLanguage
      : navigator.language;
    const lan = lang.substr(0, 2);
    if (lan === "zh") {
      this.$i18n.locale = "cn";
    } else {
      this.$i18n.locale = "en";
    }
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  min-width: 1200px;
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

