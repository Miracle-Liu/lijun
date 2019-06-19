<!-- 了解我们导航card -->
<template>
  <div class='know-us-item'>
    <img :src="icon" alt="" class="icon">
    <div class="text">{{text}}</div>
  </div>
</template>

<script>

export default {
components: {},
props: ['icon','text'],
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
.know-us-item {
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .icon {
    width: 90px;
    height: 90px;
    display: block;
  }
  .text {
    color: #fff;
    font-size: 20px;
    margin-top: 5px;
  }
}
</style>
