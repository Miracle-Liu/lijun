<template>
  <div class="lijun-layout">

    <Head />
    <AboutUs />
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import AboutUs from '@/components/AboutUs.vue'
export default {
  name: "layout",
  components:{
    Head,
    AboutUs
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


