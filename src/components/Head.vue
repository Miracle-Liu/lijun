<!-- head头部 -->
<template>
  <div class='lijun-head-container'>
    <AngleCell class="left" anglePos="end">
    </AngleCell>
    <AngleCell class="right" anglePos="front" height="50px" background-color="#000000">
    </AngleCell>
    <div class="container head-box">
      <div class="l-box">
        <img :src="logo" class="logo">
        <div class="company-name">
          <div class="c-name">仙桃市利军无纺布制品有限公司</div>
          <div class="name">XIANTAO LIJUN NON-WOVEN PRODUCTS CO.,LTD.</div>
        </div>
      </div>
      <div class="r-box">
        <div class="r-t-box">
          <span class="lang" :class="{active:lang ==='cn'}" @click="lang='cn'">中文</span>
          <span class="line">|</span>
          <span class="lang" :class="{active:lang ==='en'}" @click="lang='en'">English</span>
        </div>
        <div class="r-b-box">
          <a class="pos" :href="item.pos" v-for="(item,index) in navList" :key="index" :class="{active:selectedIndex === index}" @click="jumper(index,item.pos)">{{item.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AngleCell from "./angleCell.vue"
import logo from '@/static/images/logo_dibu.png'
export default {
components: {
  AngleCell
},
props: {},
data() {
return {
  lang:'cn',
  logo:logo,
  selectedIndex:0,
  navList:[
    {name:"首页",pos:'#homePage'},
    {name:"了解我们",pos:'#knowUs'},
    {name:"优质商品",pos:'#qualityGoods'},
    {name:"阿里巴巴",pos:'#aLi'},
    {name:"联系我们",pos:'#connectUs'},
  ]
};
},
computed: {},
watch: {},
methods: {
  jumper(index,pos){
    this.selectedIndex = index;
    if(pos ==='#aLi'){
      window.open('https://lijunchina.en.alibaba.com')
      return false
    }else{
      this.$router.push({path:'/'})
    }
  }
},
watch:{
  $route(val){
    let {path} = val
    if(path =='/' || path =="/questions" || path=="/download"){
      this.selectedIndex = 0
    }
  }
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
    position: absolute;
    left: 0;
    top: 0;
    z-index: -100;
  }
  .right {
    width: 57% !important;
    position: absolute;
    right: 0;
    top: 50px;
    z-index: -100;
  }
  .head-box {
    height: 100px;
    padding: 0;
    .l-box {
      float: left;
      padding-top: 17px;
      overflow: hidden;
      .logo {
        width: 75px;
        height: 67px;
        float: left;
      }
      .company-name {
        display: inline-block;
        float: left;
        padding-top: 13px;
        margin-left: 20px;
        .c-name {
          font-size: 20px;
          font-family: PingFangSC-Medium;
          font-weight: 600;
          color: rgba(0, 82, 137, 1);
        }
        .name {
          margin-top: 9px;
          font-size: 12px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(0, 82, 137, 1);
        }
      }
    }
    .r-box {
      float: right;
      .r-t-box,
      .r-b-box {
        height: 50px;
        line-height: 50px;
        text-align: right;
      }
      .r-t-box {
        font-size: 14px;
        .line {
          color: #e8e8e8;
          margin: 0 3px;
        }
        .lang {
          cursor: pointer;
          &.active {
            color: #005289;
          }
        }
      }
      .r-b-box {
        font-size: 16px;
        .pos,
        .pos:hover {
          text-decoration: none;
        }
        .pos.active {
          color: #75c2f4;
        }
        .pos {
          color: #fff;
          margin-right: 90px;
          &:last-of-type {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
