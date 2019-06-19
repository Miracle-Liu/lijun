<template>
  <div class="lijun-layout">

    <Head />
    <AboutUs />
    <QualityGoods />
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import AboutUs from '@/components/AboutUs.vue'
import QualityGoods from '@/components/QualityGoods.vue'
export default {
  name: "layout",
  components:{
    Head,
    AboutUs,
    QualityGoods
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


