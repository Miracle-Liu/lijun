<!-- 尖角容器 -->
<template>
  <div class='angle-cell-container' :style="{height,backgroundColor}">
    <slot></slot>
    <Angle :type="anglePos" :height="height" class="angle" ref="angle" :class="[anglePos]" :background-color="backgroundColor" />
  </div>
</template>

<script>
import Angle from "./Angle.vue"
export default {
components: {
  Angle
},
props: {
  //容器高度
  height:{
    type:[String,Number],
    default:'100px'
  },
  //容器背景颜色
  backgroundColor:{
    type:String,
    default:'#BFDBE7'
  },
  // 三角形位置，front=>前  end=>后
  anglePos:{
    type:String,
    default:'front'
  }
},
data() {
//这里存放数据
return {

};
},
computed: {},
watch: {},
methods: {
  countAnglePos(){
    let angle =  this.$refs.angle.$el
    let height =parseInt(this.height)/2
    if(this.anglePos ==='front'){
      angle.style.left = `${-height}px`
    }else{
      angle.style.right = `${-height}px`
    }
  }
},
created() {

},
mounted(){
  this.countAnglePos()
}
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.angle-cell-container {
  position: relative;
  display: inline-block;
  width: 100%;
  .angle {
    position: absolute;
    top: 0;
    &.front {
      left: 0;
    }
    &.end {
      right: 0;
    }
  }
}
</style>
