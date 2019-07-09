
<template>
  <div class="cjzs">
    <slick ref="slick" :options="slickOptions">
      <!-- <img
        src="../assets/img/chejian/cj_1.png"
        alt=""
      >
      <img
        src="../assets/img/chejian/cj_2.png"
        alt=""
      >
      <img
        src="../assets/img/chejian/cj_3.png"
        alt=""
      > -->
      <img src="../assets/img/chejian/cj_4.png" alt="">
      <img src="../assets/img/chejian/cj_5.png" alt="">
      <img src="../assets/img/chejian/cj_7.png" alt="">
      <img src="../assets/img/chejian/cj_8.png" alt="">
      <img src="../assets/img/chejian/cj_9.png" alt="">
      <img src="../assets/img/chejian/cj_10.png" alt="">
      <img src="../assets/img/chejian/cj_11.png" alt="">

    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

// 车间展示
export default {
  name: 'cjzs',
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
<style  lang="scss" >
// .slick-dots {
//   bottom: -50px;
// }
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
