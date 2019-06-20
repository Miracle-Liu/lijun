<template>
  <div class="topList-container">
    <img :src="item" alt="" srcset="" class="icon">
    <span class="text">{{text}}</span>
  </div>
</template>
<script>
export default {
    props:['item','text']
}
</script>
<style lang="scss">
.topList-container {
  overflow: hidden;
  .icon {
    width: 58px;
    height: 58px;
    float: left;
    margin-top: 20px;
  }
  .text {
    margin-top: 43px;
    margin-left: 12px;
    float: left;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
