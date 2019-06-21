<template>
  <div class="lijun-layout">

    <Head />
    <router-view class="lijun-content" />
    <Footer id="connectUs" />
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "layout",
  components:{
    Head,
    Footer
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
  height: 100%;
  .lijun-content {
    min-height: calc(100% - 730px);
  }
}
</style>


