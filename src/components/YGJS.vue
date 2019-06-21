
<template>
  <div class="ygjs">
    <slick
      ref="slick"
      :options="slickOptions"
    >

      <img
        src="../assets/img/ygjs/yg_1.png"
        alt=""
      >

      <img
        src="../assets/img/ygjs/yg_2.png"
        alt=""
      >

      <img
        src="../assets/img/ygjs/yg_3.png"
        alt=""
      >

    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

// 车间展示
export default {
  name: 'ygjs',
  components: { Slick },
  props: {
    msg: String,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
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
<style lang="scss">
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
