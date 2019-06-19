<!-- 三角形 -->
<template>
  <div class='angle-container' ref="angle"></div>
</template>

<script>

export default {
components: {},
props:{
  //什么类型三角形
  type:{
    type:String,
    default:'end'
  },
  //三角形高度
  height:{
    type:[String,Number],
    default:100
  },
    //容器背景颜色
  backgroundColor:{
    type:String,
    default:'#BFDBE7'
  },
},
data() {
//这里存放数据
return {

};
},
computed: {},
watch: {},
methods: {
  init(){
    let angle = this.$refs.angle
    let height = parseInt(this.height)/2
    let width = height/2
    let color = this.backgroundColor
    if(this.type ==='end'){
      angle.style.cssText = `border-color: ${color} transparent transparent ${color};border-width: ${height}px ${width}px ${height}px ${width}px;border-style: solid;`
    }else{
        angle.style.cssText = `border-color:  transparent ${color} ${color} transparent ;border-width: ${height}px ${width}px ${height}px ${width}px;border-style: solid;`
    }
  }
},
created() {
},
mounted(){
  this.init()
}
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.angle-container {
  height: 0;
  width: 0;
}
</style>
