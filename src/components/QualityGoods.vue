<!-- 优质产品 -->
<template>
  <div class='quality-goods-container'>
    <div class="container">
      <ModuleTitle bg-text="QUALITY GOODS" title="优质产品" />
      <div class="description">我们主打产品包括口罩，帽子，防护服，隔离衣，手术衣，鞋套，袖套，手套，床单等。</div>
      <div class="goods-list">
        <GoodsItem class="goods-item" v-for="(item,index) in goodsList" :key="index" :img="item.img" :title="item.title" />
      </div>
      <div class="all-goods-btn">
        所有产品
      </div>
    </div>
  </div>
</template>

<script>
import ModuleTitle from './ModuleTitle.vue'
import GoodsItem from './GoodsItem.vue'
import goods1 from '@/static/images/goods1.png'
import goods2 from '@/static/images/goods2.png'
import goods3 from '@/static/images/goods3.png'
import goods4 from '@/static/images/goods4.png'
import goods5 from '@/static/images/goods5.png'
import goods6 from '@/static/images/goods6.png'
import goods7 from '@/static/images/goods7.png'
import goods8 from '@/static/images/goods8.png'
import goods9 from '@/static/images/goods9.png'
export default {
components: {
  ModuleTitle,
  GoodsItem
},
props: {},
data() {
return {
  goodsList:[
    {img:goods1,title:'防化服'},
    {img:goods2,title:'外科礼服'},
    {img:goods3,title:'隔离衣'},
    {img:goods4,title:'圆帽'},
    {img:goods5,title:'口罩'},
    {img:goods6,title:'鞋套'},
    {img:goods7,title:'防化服'},
    {img:goods8,title:'隔离衣'},
    {img:goods9,title:'鞋套'},
  ]
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
.quality-goods-container {
  .description {
    height: 18px;
    font-size: 18px;
    color: rgba(102, 102, 102, 1);
    margin-top: 21px;
  }
  .goods-list {
    margin-top: 60px;
    overflow: hidden;
    .goods-item {
      float: left;
      margin-bottom: 20px;
      & + .goods-item {
        margin-left: 20px;
      }
      &:nth-of-type(3n + 1) {
        margin-left: 0;
      }
    }
  }
  .all-goods-btn {
    width: 194px;
    height: 40px;
    border: 2px solid rgba(68, 146, 194, 1);
    margin: 0 auto;
    line-height: 36px;
    text-align: center;
    color: #4492c2;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
