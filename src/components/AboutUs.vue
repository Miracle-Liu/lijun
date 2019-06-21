<!-- 关于我们 -->
<template>
  <div class='about-us-container'>
    <div class="left">
      <img src="../static/images/about_tu@2x.png" alt="" class="left-img">
      <div class="auout-us-text">
        <ModuleTitle bg-text="ABOUT US" :title="$t('aboutUs.title')" />
        <div class="line"></div>
        <div class="text">
          <div class="des-c" :class="[pageStatus]">
            <div class="des">{{$t('aboutUs.des1')}}</div>
            <div class="des">{{$t('aboutUs.des2')}}</div>
          </div>
        </div>
        <template v-if="pageStatus === 'next'">
          <div class="check-more" @click="prePage">{{$t('aboutUs.prePage')}}</div>
        </template>
        <template v-else>
          <div class="check-more" @click="viewMore">{{$t('aboutUs.viewMore')}}</div>
        </template>
      </div>
    </div>
    <div class="right">
      <img src="../static/images/beijing@2x.png" alt="" class="right-img">
    </div>

  </div>
</template>

<script>
import ModuleTitle from './ModuleTitle.vue'
export default {
components: {
  ModuleTitle
},
props: {},
data() {
return {
  pageStatus:'',
};
},
computed: {},
watch: {},
methods: {
  viewMore(){
    this.pageStatus = 'next'
  },
  prePage(){
    this.pageStatus = 'pre'
  }
},
created() {

},
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.about-us-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  .left,
  .right {
    width: 50%;
    position: relative;
  }
  .left-img,
  .right-img {
    width: 100%;
    display: block;
  }
  .auout-us-text {
    position: absolute;
    top: 50%;
    right: -70px;
    transform: translate(100%, -50%);
    z-index: 1000;
    .bg-text {
      color: rgba(255, 255, 255, 0.2);
    }
    .line {
      width: 34px;
      height: 5px;
      background: rgba(40, 147, 199, 1);
      margin: 20px 0;
    }
    .text {
      width: 590px;
      height: 284px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(30, 53, 102, 1);
      line-height: 32px;
      overflow: hidden;
      .des-c {
        width: 200%;
        height: 100%;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        &.pre {
          transform: translateX(0);
        }
        &.next {
          transform: translateX(-50%);
        }
        .des {
          width: 50%;
          height: 100%;
          float: left;
        }
      }
    }
    .check-more {
      width: 144px;
      height: 40px;
      background: rgba(21, 148, 199, 1);
      line-height: 40px;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
      position: absolute;
      top: 22px;
      right: 0;
    }
  }
}
</style>
