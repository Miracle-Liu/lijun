<!-- 车间展示内容 -->
<template>
  <div class='factory-display-container'>
    <img :src="poster" alt="" class="poster">
  </div>
</template>

<script>
import about_tu from '@/static/images/about_tu.png'
export default {
components: {},
props: {},
data() {
return {
  poster:about_tu
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
.factory-display-container {
  width: 1180px;
  height: 680px;
  margin: 0 auto;
  padding: 20px;
  background-color: #9ac5d6;
  .poster {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
