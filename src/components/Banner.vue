<!-- Banner -->
<template>
  <div class='banner-container'>

  </div>
</template>

<script>

export default {
components: {},
props: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
created() {

},
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.banner-container {
  width: 100%;
  height: 0;
  padding-bottom: 25%;
  @media screen and (max-width: 1920px) {
    background: url("../static/images/banner.png") no-repeat;
    background-size: 100%;
  }
  @media screen and (min-width: 1920px) {
    background: url("../static/images/banner@2x.png") no-repeat;
    background-size: 100%;
  }
}
</style>
