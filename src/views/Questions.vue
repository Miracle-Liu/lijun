<template>
  <div class="lijun-questions">

    <Head />
    <div class="lijun-content">
      <Questions />
    </div>
    <Footer id="connectUs" />
  </div>
</template>
<script>
import Questions from '@/components/Questions.vue'
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "layout",
  components:{
    Head,
    Footer,
    Questions
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
.lijun-questions {
  width: 100%;
  height: 100%;
  .lijun-content {
    min-height: calc(100% - 730px);
    width: 100%;
  }
}
</style>


