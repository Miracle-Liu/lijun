
<template>
  <div class="khlf">
    <slick ref="slick" :options="slickOptions">
      <img src="../assets/img/qyzz/qy_1.jpg" alt="">
      <img src="../assets/img/qyzz/qy_2.jpg" alt="">
      <img src="../assets/img/qyzz/qy_3.jpg" alt="">
      <img src="../assets/img/qyzz/qy_4.jpg" alt="">
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

// 车间展示
export default {
  name: 'khlf',
  components: { Slick },
  props: {
    msg: String,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        // accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        // arrows: true,
        dots: true
        // Any other options that can be got from plugin documentation
      },
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },
  mounted() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.slick-slider {
  // height: 300px;
}

.slick-dots li button::before {
  color: #fff;
}
.slick-dots li.slick-active button::before {
  color: #0092fe;
}
</style>
