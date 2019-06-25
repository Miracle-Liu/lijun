<template>
  <div class="lijun-home">

    <Head />
    <Questions />
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
.lijun-home {
}
</style>


