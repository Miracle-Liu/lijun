<!-- Banner -->
<template>
  <div class='banner-container'>
    <div class="content container">
      <div class="title">{{$t("banner.pzyl")}}</div>
      <div class="des">{{$t("banner.jxhb")}}</div>
      <div class="des">{{$t("banner.ltcj")}}</div>
      <div class="des">{{$t("banner.mfsj")}}</div>
      <div class="des">{{$t("banner.cpfd")}}</div>
    </div>
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
  position: relative;
  @media screen and (max-width: 1920px) {
    background: url("../static/images/banner.png") no-repeat;
    background-size: 100%;
  }
  @media screen and (min-width: 1920px) {
    background: url("../static/images/banner@2x.png") no-repeat;
    background-size: 100%;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    color: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%);
    padding: 0;
    .title {
      font-size: 60px;
      font-family: SourceHanSansCN-Bold;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .des {
      font-size: 20px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      margin-bottom: 18px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
