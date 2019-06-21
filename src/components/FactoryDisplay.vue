<!-- 车间展示内容 -->
<template>
  <div class='factory-display-container'>
    <video controls class="poster">
      <source src="http://www.xtlijun.com/images/company.mp4">
    </video>
    <!-- <img :src="poster" alt="" class="poster">
    <VideoActionBtn class="video-action-btn" /> -->
  </div>
</template>

<script>
// import about_tu from '@/static/images/about_tu.png'
// import VideoActionBtn from '@/components/VideoActionBtn.vue'
export default {
components: {
  // VideoActionBtn
},
props: {},
data() {
return {
  // poster:about_tu
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
  position: relative;
  .poster {
    width: 100%;
    height: 100%;
    display: block;
  }
  .video-action-btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
