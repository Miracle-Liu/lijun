<!--  -->
<template>
  <div class='module-title-container'>
    <div>
      <div class="bg-text">{{bgText}}</div>
      <div class="title-text">{{title}}</div>
    </div>
  </div>
</template>

<script>

export default {
components: {},
props: ['bgText','title'],
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
.module-title-container {
  .bg-text {
    color: #bfdae6;
    font-size: 48px;
    font-weight: bold;
    opacity: 0.3;
  }
  .title-text {
    font-weight: 500;
    color: #000;
    font-size: 36px;
    margin-top: -27px;
  }
}
</style>
