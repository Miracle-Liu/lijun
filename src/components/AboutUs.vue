<!-- 了解我们 -->
<template>
  <div class='lijun-about-us'>
    <div class="content">
      <div class="title">
        <div class="bg-text">know about us</div>
        <div class="text">了解我们</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
components: {},
props: {},
data() {
//这里存放数据
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
.lijun-about-us {
  width: 100%;
  .content {
    width: 1180px;
    margin: 0 auto;
    padding: 63px 0 80px;
    .bg-text {
      color: #bfdae6;
      font-size: 48px;
      font-weight: bold;
      opacity: 0.3;
    }
    .text {
      font-weight: 500;
      color: #000;
      font-size: 36px;
      transform: translateY(-27px);
    }
  }
}
</style>
