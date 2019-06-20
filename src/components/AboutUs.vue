<!-- 关于我们 -->
<template>
  <div class='about-us-container'>
    <div class="left">
      <img src="../static/images/about_tu@2x.png" alt="" class="left-img">
      <div class="auout-us-text">
        <ModuleTitle bg-text="ABOUT US" title="关于我们" />
        <div class="line"></div>
        <div class="text">
          仙桃市利军无纺布制品有限公司，坐落于风景秀丽、素有“江汉明珠”之誉、中国最大无纺布制品生产基地之称的仙桃市彭场镇，距武汉仅80公里。 公司占地面积6000平方米，生产车间面积8000平方米，现有设备350多台套。是集生产、销售、贸易（有自营进出口权）为一体化的企业实体。主要生产经营出口无纺布、无纺布防护服、手术衣、工作服、床单、鞋套、袖套、圆帽、条帽、无纺布口罩、纸口罩、活性碳口罩、CPE鞋套、PE鞋套及各种式样的无纺布制品，CPE和PE制品等。产品远销日本、美国等欧洲国家，深受国内外客户的赞誉。
        </div>
        <div class="check-more">查看更多</div>
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
      color: #ffffff;
    }
    .line {
      width: 34px;
      height: 5px;
      background: rgba(40, 147, 199, 1);
      margin: 20px 0;
    }
    .text {
      width: 519px;
      height: 241px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(30, 53, 102, 1);
      line-height: 32px;
    }
    .check-more {
      width: 144px;
      height: 40px;
      background: rgba(21, 148, 199, 1);
      margin-top: 30px;
      line-height: 40px;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
