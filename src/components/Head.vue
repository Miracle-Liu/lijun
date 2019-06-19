<!-- head头部 -->
<template>
  <div class='lijun-head-container'>
    <AngleCell class="left" anglePos="end">
      <div>
        <!-- <span>仙桃市利军无纺布制品有限公司</span> -->
        <!-- <span>XIANTAO LIJUN NON-WOVEN PRODUCTS CO.,LTD.</span> -->
      </div>
    </AngleCell>
    <AngleCell class="right" anglePos="front" height="50px" background-color="#000000">
      <div>
        <!-- <span>仙桃市利军无纺布制品有限公司</span> -->
        <!-- <span>XIANTAO LIJUN NON-WOVEN PRODUCTS CO.,LTD.</span> -->
      </div>
    </AngleCell>
  </div>
</template>

<script>
import AngleCell from "./angleCell.vue"
export default {
components: {
  AngleCell
},
props: {},
data() {
//这里存放数据
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
.lijun-head-container {
  width: 100%;
  overflow: hidden;
  .left {
    width: 40% !important;
    float: left;
  }
  .right {
    margin-top: 50px;
    float: right;
    width: 57% !important;
  }
}
</style>
