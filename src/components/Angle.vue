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
    let height = parseInt(this.height)
    let width = height/2
    let color = this.backgroundColor
    if(this.type ==='end'){
      angle.style.cssText = `width: ${width}px ;height:${height}px;background-image: linear-gradient(to bottom right,${color} 50%,transparent 50%);`
    }else{
      angle.style.cssText = `width: ${width}px ;height:${height}px;background-image: linear-gradient(to bottom right,transparent 50%,${color} 50%);`
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
  display: inline-block;
}
</style>
