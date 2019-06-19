<!-- 优质商品 -->
<template>
  <div class='goods-item-container' :style="{background:`url(${img}) 100% 100%`}">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>

export default {
components: {},
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
}
</style>
