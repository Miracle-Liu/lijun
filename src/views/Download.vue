<template>
  <div class="lijun-download">

    <Head />
    <div class="lijun-content">
      <Download />
    </div>
    <Footer id="connectUs" />
  </div>
</template>
<script>
import Download from '@/components/Download.vue'
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "layout",
  components:{
    Head,
    Footer,
    Download
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted(){
  },
  methods: {
  }
};
</script>
<style lang="scss">
.lijun-download {
  width: 100%;
  height: 100%;
  .lijun-content {
    min-height: calc(100% - 730px);
    width: 100%;
  }
}
</style>


