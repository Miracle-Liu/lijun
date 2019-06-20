<template>
  <div class="lijun-home">
    <Banner />
    <KnowUs id="knowUs" />
    <QualityGoods id="qualityGoods" />
    <AboutUs />
    <Questions />
    <Download />
  </div>
</template>
<script>
import KnowUs from '@/components/KnowUs.vue'
import QualityGoods from '@/components/QualityGoods.vue'
import Banner from '@/components/Banner.vue'
import AboutUs from '@/components/AboutUs.vue'
import Questions from '@/components/Questions.vue'
import Download from '@/components/Download.vue'

export default {
  name: "layout",
  components:{
    KnowUs,
    QualityGoods,
    Banner,
    AboutUs,
    Questions,
    Download,
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
.lijun-home {
}
</style>


