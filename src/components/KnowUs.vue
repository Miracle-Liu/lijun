<!-- 了解我们 -->
<template>
  <div class='lijun-know-us'>
    <div class="container">
      <ModuleTitle bg-text="KNOW ABOUT US" :title="$t('knowUs.title')" />
      <div class="nav">
        <KnowUsItem @click.native="check(item.text)" class="item" v-for="(item,index) in navList" :key="index" :icon="item.icon" :text="$t(`knowUs.${item.text}`)" />
      </div>
    </div>
    <div class="content">
      <FactoryDisplay />
    </div>
  </div>
</template>

<script>
import KnowUsItem from './KnowUsItem.vue'
import ModuleTitle from './ModuleTitle.vue'
import icon1 from '@/static/images/icon1.png'
import icon2 from '@/static/images/icon2.png'
import icon3 from '@/static/images/icon3.png'
import icon4 from '@/static/images/icon4.png'
import FactoryDisplay from './FactoryDisplay.vue'
import CJZS from '@/components/CJZS.vue';
import YGJS from '@/components/YGJS.vue';
import KHLF from '@/components/KHLF.vue';
import QYZZ from '@/components/QYZZ.vue';
export default {
components: {
  KnowUsItem,
  FactoryDisplay,
  ModuleTitle
},
props: {},
data() {
return {
    navList:[
      {icon:icon1,text:"cjzs"},
      {icon:icon2,text:"ygjs"},
      {icon:icon3,text:"khlf"},
      {icon:icon4,text:"qyzz"},
      ]
};
},
computed: {},
watch: {},
methods: {
  check(name){
    this[`${name}Click`]()
  },
  cjzsClick() {
    this.$modal.show(CJZS,{
      text: 'This text is passed as a property'
    },{
        draggable: true
      });
  },
  ygjsClick() {
    this.$modal.show(YGJS,{
      text: 'This text is passed as a property'
    },{
        draggable: true
      });
  },
  khlfClick() {
    this.$modal.show(KHLF,{
      text: 'This text is passed as a property'
    },{
        draggable: true
      });
  },
  qyzzClick() {
    this.$modal.show(QYZZ,{
      text: 'This text is passed as a property'
    },{
        draggable: true
      });
  }
},
created() {

},
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.lijun-know-us {
  width: 100%;
  .container {
    .nav {
      margin-top: 40px;
      overflow: hidden;
      .item {
        cursor: pointer;
        float: left;
        & + .item {
          margin-left: 20px;
        }
        background-color: #2fabdf;
        &:nth-of-type(2n) {
          background-color: #1d719e;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 840px;
    background-color: #bfdbe6;
    padding-top: 80px;
  }
}
</style>
