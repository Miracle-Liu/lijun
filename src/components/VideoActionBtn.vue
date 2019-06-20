<!--视频点播按钮 -->
<template>
  <div class='video-action-btn-container'>
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
.video-action-btn-container {
  display: inline-block;
  width: 70px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 30px solid #fff;
    border-bottom: 15px solid transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-30%, -50%);
  }
}
</style>
