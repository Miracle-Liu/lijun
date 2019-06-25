<template>
  <div class="lijun-home">

    <Head />
    <Download />
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
.lijun-home {
}
</style>


