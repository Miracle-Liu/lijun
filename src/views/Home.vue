<template>
  <div class="lijun-home">

    <Head />
    <div class="lijun-content">
      <Banner />
      <KnowUs id="knowUs" />
      <QualityGoods id="qualityGoods" />
      <AboutUs />
    </div>
    <Footer id="connectUs" />
    <modals-container />
  </div>
</template>
<script>
import KnowUs from '@/components/KnowUs.vue'
import QualityGoods from '@/components/QualityGoods.vue'
import Banner from '@/components/Banner.vue'
import AboutUs from '@/components/AboutUs.vue'
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "layout",
  components:{
    Head,
    Footer,
    KnowUs,
    QualityGoods,
    Banner,
    AboutUs,
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted(){
    let {pos} = this.$route.query
    let reg = /(knowUs|qualityGoods)/;
    if(reg.test(pos)){
     this.$nextTick(()=>{
      document.querySelector(`#${pos}`).scrollIntoView({ behavior: "smooth" })
     })
    }
  },
  methods: {
  }
};
</script>
<style lang="scss">
.lijun-home {
  width: 100%;
  height: 100%;
  .lijun-content {
    min-height: calc(100% - 730px);
    width: 100%;
  }
  .slick-dots li button::before {
    color: #fff;
  }
  .slick-dots li.slick-active button::before {
    color: #0092fe;
  }
  .v--modal-overlay {
    // background: rgba(0, 0, 0, 0.8);
    background: rgba(255, 255, 255, 0.8);
  }
  .v--modal-box {
    width: 100% !important;
    left: 0 !important;
    top: 0 !important;
    height: inherit !important;
    z-index: 100000;
  }
}
</style>


