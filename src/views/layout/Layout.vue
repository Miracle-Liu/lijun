<template>
  <div class="lijun-layout">

    <Head id="head" ref="head" />
    <div class="lijun-content">
      <template v-if="contetntShow ===1">
        <Home />
      </template>
      <template v-else-if="contetntShow ===2">
        <Questions />
      </template>
      <template v-else>
        <Download />
      </template>
    </div>
    <Footer id="connectUs" />
    <modals-container />
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'
import Questions from '@/components/Questions.vue'
import Download from '@/components/Download.vue'

export default {
  name: "layout",
  components:{
    Head,
    Footer,
    Home,
    Questions,
    Download
  },
  data() {
    return {
      contetntShow:1
    };
  },
  watch:{
    contetntShow(val){
      document.querySelector('#head').scrollIntoView({ behavior: "smooth" })
      this.$refs.head.selectedIndex = 0;
    }
  },
  created() {
  },
  methods: {

  }
};
</script>
<style lang="scss">
.lijun-layout {
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
    background: rgba(0, 0, 0, 0.8);
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


