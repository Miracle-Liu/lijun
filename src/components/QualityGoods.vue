<!-- 优质产品 -->
<template>
  <div class='quality-goods-container'>
    <div class="container">
      <ModuleTitle bg-text="QUALITY GOODS" :title="$t('highP.title')" />
      <div class="description">{{$t('highP.slogan')}}</div>
      <div class="goods-list">
        <GoodsItem class="goods-item" v-for="(item,index) in goodsList" :key="index" :img="item.img" :title="$t(`highP.${item.title}`)" @click.native="jumpGoodsInfo(item.href)" />
      </div>
      <div class="all-goods-btn" @click="jumpAllGoods">
        {{$t('highP.sycp')}}
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
    {img:goods1,title:'fhf',href:'https://lijunchina.en.alibaba.com/productgrouplist-209714929/Protective_Suit.html?spm=a2700.icbuShop.74.2.221fbd1alQbcFk'},
    {img:goods2,title:'wklf',href:"https://lijunchina.en.alibaba.com/productgrouplist-209761250/Surgical_Gown.html?spm=a2700.icbuShop.74.3.221fbd1alQbcFk"},
    {img:goods3,title:'gly',href:"https://lijunchina.en.alibaba.com/productgrouplist-806860678/Isolation_Gown.html?spm=a2700.icbuShop.74.4.221fbd1alQbcFk"},
    {img:goods4,title:'ym',href:"https://lijunchina.en.alibaba.com/productgrouplist-221938712/Disposable_Cap.html?spm=a2700.icbuShop.74.18.221fbd1alQbcFk"},
    {img:goods5,title:'kz',href:"https://lijunchina.en.alibaba.com/productgrouplist-221936750/Disposable_Face_Mask.html?spm=a2700.icbuShop.74.19.221fbd1alQbcFk"},
    {img:goods6,title:'xt',href:"https://lijunchina.en.alibaba.com/productgrouplist-221837001/Disposable_Shoe_Cover.html?spm=a2700.icbuShop.74.20.221fbd1alQbcFk"},
    {img:goods7,title:'fhf',href:'https://lijunchina.en.alibaba.com/productgrouplist-209714929/Protective_Suit.html?spm=a2700.icbuShop.74.2.221fbd1alQbcFk'},
    {img:goods8,title:'gly',href:"https://lijunchina.en.alibaba.com/productgrouplist-806860678/Isolation_Gown.html?spm=a2700.icbuShop.74.4.221fbd1alQbcFk"},
    {img:goods9,title:'gly',href:"https://lijunchina.en.alibaba.com/productgrouplist-806860678/Isolation_Gown.html?spm=a2700.icbuShop.74.4.221fbd1alQbcFk"},
  ]
};
},
computed: {},
watch: {},
methods: {
  jumpGoodsInfo(href){
    window.open(href)
  },
  jumpAllGoods(){
    window.open('https://lijunchina.en.alibaba.com')
  }
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
      cursor: pointer;
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
