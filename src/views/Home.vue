<template>
  <div class="lijun-home">

    <Head />
    <Banner />
    <KnowUs id="knowUs" />
    <QualityGoods id="qualityGoods" />
    <AboutUs />
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
}
</style>


