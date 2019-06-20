<template>
  <div class="lijun-layout">

    <Head id="homePage" />

    <Banner />
    <KnowUs id="knowUs" />
    <QualityGoods id="qualityGoods" />
    <AboutUs />

    <Questions />

  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import KnowUs from '@/components/KnowUs.vue'
import QualityGoods from '@/components/QualityGoods.vue'
import Banner from '@/components/Banner.vue'
import AboutUs from '@/components/AboutUs.vue'
import Questions from '@/components/Questions.vue'
export default {
  name: "layout",
  components:{
    Head,
    KnowUs,
    QualityGoods,
    Banner,
    AboutUs,
    Questions
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  }
};
</script>
<style lang="scss">
.lijun-layout {
}
</style>


