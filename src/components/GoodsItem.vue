<!-- 优质商品 -->
<template>
  <div class='goods-item-container' :style="{background:`url(${img}) 100% 100%`}">
    <AngleCell class="title-panle" anglePos="end" height="52px" background-color="#1792C7">
      <div class="title">{{title}}</div>
    </AngleCell>
  </div>
</template>

<script>
import AngleCell from "./angleCell.vue"
export default {
components: {
  AngleCell
},
props: ['img','title'],
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
created() {

},
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.goods-item-container {
  width: 380px;
  height: 380px;
  position: relative;
  .title-panle {
    width: 266px;
    position: absolute;
    left: 0;
    bottom: 12px;
  }
  .title {
    color: #fff;
    font-size: 18px;
    line-height: 52px;
    padding-left: 30px;
  }
}
</style>
