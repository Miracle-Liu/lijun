<!-- Banner -->
<template>
  <div>
    <slick ref="slick" :options="slickOptions" class="slick-banner-container" v-if="lang==='cn'">
      <div class='banner-container item1'>
        <div class="content container">
          <div class="title">品质优良 诚信创新</div>
          <div class="des">· 精选环保无纺布料</div>
          <div class="des">· 立体裁剪精湛工艺</div>
          <div class="des">· 免费提供设计样板</div>
          <div class="des">· 产品种类繁多</div>
        </div>
      </div>
      <div class='banner-container item2'>
        <div class="content container">
          <template v-if="lang==='cn'">
            <div class="title p" style="color:rgba(33, 132, 228, 1);margin-bottom:20px;">一次性用品专业制造商</div>
            <div class="des n" style="font-size:70px;">非织造布工作服</div>
          </template>
          <template v-else>
            <div class="p" style="color:rgba(0, 86, 166, 1);font-size:60px;font-family:Impact;">PROFESSIONAL</div>
            <div class="m" style="color:rgba(33, 132, 228, 1);font-size:60px;margin-top:-20px;font-family:Impact;">MANUFACTURER</div>
            <div class="d" style="color:#fff;font-size:30px;margin-top:-10px;font-family:Impact;">OF DISPOSABLE</div>
            <div class="n" style="color:#fff;font-size:70px;margin-top:-15px;font-family:Impact;">nonwoven</div>
            <div class="c" style="color:#fff;font-size:70px;margin-top:-15px;font-family:Impact;">coverall</div>
          </template>
          <div class="icons">
            <div class="icon">
              <img src="../static/images/logo1@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE3</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo2@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE4</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo3@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE5</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo4@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE6</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo5@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">EN1149-1</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo6@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">EN14126</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo7@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">EN1073-2</div>
            </div>
          </div>
        </div>
      </div>
      <div class='banner-container item3'>
        <div class="content container" style="text-align:right;">
          <template v-if="lang==='cn'">
            <div class="title" style="color:rgba(0, 86, 166, 1);">专业</div>
            <div class="title" style="color:rgba(0, 86, 166, 1);margin-top:-20px;">制造商</div>
          </template>
          <template v-else>
            <div style="color:rgba(0, 86, 166, 1);font-size:60px;font-family:Impact;">PROFESSIONAL</div>
            <div style="color:rgba(0, 86, 166, 1);font-size:60px;margin-top:-20px;font-family:Impact;">MANUFACTURER</div>
          </template>
        </div>
      </div>
    </slick>
    <slick ref="slick" :options="slickOptions" class="slick-banner-container demo" v-else>
      <div class='banner-container item1'>
        <div class="content container">
          <div class="title">Good quality credit innovation</div>
          <div class="des">·Selected environment-friendly non-woven fabrics</div>
          <div class="des">·Exquisite three-dimensional cutting technology</div>
          <div class="des">·Design samples are provided free of charge</div>
          <div class="des">·A wide variety of products</div>
        </div>
      </div>
      <div class='banner-container item2'>
        <div class="content container">
          <template v-if="lang==='cn'">
            <div class="title p" style="color:rgba(33, 132, 228, 1);margin-bottom:20px;">一次性用品专业制造商</div>
            <div class="des n" style="font-size:70px;">非织造布工作服</div>
          </template>
          <template v-else>
            <div class="p" style="color:rgba(0, 86, 166, 1);font-size:60px;font-family:Impact;">PROFESSIONAL</div>
            <div class="m" style="color:rgba(33, 132, 228, 1);font-size:60px;margin-top:-20px;font-family:Impact;">MANUFACTURER</div>
            <div class="d" style="color:#fff;font-size:30px;margin-top:-10px;font-family:Impact;">OF DISPOSABLE</div>
            <div class="n" style="color:#fff;font-size:70px;margin-top:-15px;font-family:Impact;">nonwoven</div>
            <div class="c" style="color:#fff;font-size:70px;margin-top:-15px;font-family:Impact;">coverall</div>
          </template>
          <div class="icons">
            <div class="icon">
              <img src="../static/images/logo1@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE3</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo2@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE4</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo3@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE5</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo4@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">TYPE6</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo5@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">EN1149-1</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo6@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">EN14126</div>
            </div>
            <div class="icon">
              <img src="../static/images/logo7@2x.png" style="width:63px;height:63px;" alt="">
              <div class="text">EN1073-2</div>
            </div>
          </div>
        </div>
      </div>
      <div class='banner-container item3'>
        <div class="content container" style="text-align:right;">
          <template v-if="lang==='cn'">
            <div class="title" style="color:rgba(0, 86, 166, 1);">专业</div>
            <div class="title" style="color:rgba(0, 86, 166, 1);margin-top:-20px;">制造商</div>
          </template>
          <template v-else>
            <div style="color:rgba(0, 86, 166, 1);font-size:60px;font-family:Impact;">PROFESSIONAL</div>
            <div style="color:rgba(0, 86, 166, 1);font-size:60px;margin-top:-20px;font-family:Impact;">MANUFACTURER</div>
          </template>
        </div>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';
export default {
components: {Slick},
props: {},
data() {
return {
    slickOptions: {
      slidesToShow: 1,
      // accessibility: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true
      // Any other options that can be got from plugin documentation
    },
};
},
computed: {
  lang(){
    this.reInit()
    return this.$i18n.locale
  }
},
watch: {},
methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
},
created() {

},
}
</script>
<style lang='scss' >
//@import url(); 引入公共css类
.slick-banner-container {
  width: 100%;
  overflow: hidden;
  .slick-prev,
  .slick-next {
    z-index: 999;
  }
  .slick-prev {
    left: 25px;
  }
  .slick-next {
    right: 25px;
  }
  .banner-container {
    width: 100%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    &.item1 {
      @media screen and (max-width: 1920px) {
        background: url("../static/images/banner.png") no-repeat;
        background-size: 100%;
      }
      @media screen and (min-width: 1920px) {
        background: url("../static/images/banner@2x.png") no-repeat;
        background-size: 100%;
      }
    }
    &.item2 {
      background: url("../static/images/banner2.png") no-repeat;
      background-size: 100%;
      @media screen and (max-width: 1200px) {
        .content {
          .p,
          .m {
            font-size: 40px !important;
          }
          .m {
            margin-top: -10px !important;
          }
          .d {
            margin-top: 0 !important;
          }
          .n,
          .c {
            font-size: 50px !important;
          }
          .n {
            margin-top: 0 !important;
          }
          .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 30px !important;
              height: 30px !important;
            }
          }
        }
      }
    }
    &.item3 {
      background: url("../static/images/banner3.png") no-repeat;
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
      .icons {
        overflow: hidden;
        .icon {
          float: left;
          text-align: center;
          margin-right: 8px;
          img {
            display: block;
          }
          .text {
            font-size: 14px;
            font-family: SFProText-Medium;
            font-weight: 500;
            color: rgba(0, 0, 0, 1);
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
