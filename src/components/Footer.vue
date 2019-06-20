<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <TopList class="item" v-for="(tList,index) in topLists" :key="index" :item="tList.item" :text="tList.text" />
      </div>
      <div class="bottom">
        <div class="logo">
          <img src="../static/images/logo.png" alt="">
          <span>仙桃市利军无纺布制品有限公司</span>
        </div>
        <div class="divide"></div>
        <div class="about">
          <dl>
            <dt class="title">关于我们</dt>
            <dd class="line"></dd>
            <dd v-for="list in usList" style="cursor: pointer;" @click="jumper(list)">{{list}}</dd>
          </dl>
        </div>
        <div class="divide"></div>
        <div class="about">
          <dl>
            <dt class="title">产品</dt>
            <dd class="line"></dd>
            <dd v-for="list in goodsList" style="cursor: pointer;">{{list}}</dd>
          </dl>
        </div>
        <div class="divide"></div>
        <div class="about" style="width:auto;">
          <dl>
            <dt class="title">联系我们</dt>
            <dd class="line"></dd>
            <dd>地址: 湖北省仙桃市彭场镇千秋南街138号</dd>
            <dd>阿里巴巴: <a class="ali-href" target="blank" href="https://lijunchina.en.alibaba.com">https://lijunchina.en.alibaba.com</a></dd>
            <dd>外贸部: 湖北省武汉市江汉区后襄河北路海马中心2109</dd>
            <dd>版权所有: 仙桃市利军无纺布制品有限公司</dd>
          </dl>
        </div>
      </div>
      <div class="banben">
        XIANTAO LIJUN NON-WOVEN PRODUCTS CO.,LTD.
      </div>
    </div>

  </div>
</template>
<script>
import item1 from '../static/images/dianhua.png'
import item2 from '../static/images/youjian.png'
import item3 from '../static/images/dianhua 拷贝.png'
import TopList from './TopList.vue'
export default {
    components:{
        TopList
    },
    data() {
        return {
            topLists:[
            {item:item1,text:"027-83928188"},
            {item:item2,text:"julie@xtlijun.com"},
            {item:item3,text:"027-83928188"},
            ],
            usList:['FAQ','下载'],
            goodsList:['一次性口罩','N95防尘口罩','一次性帽子','防护服','实验服','隔离衣','鞋套','其它'],


        }
    },
    methods:{
      jumper(adress){
        let path = '/download'
        if(adress ==='FAQ'){
          path ='/questions'
        }
         this.$router.push({path})
      }
    }
}
</script>
<style lang="scss">
.footer {
  width: 100%;
  height: 630px;
  background: rgba(4, 13, 16, 1);
  position: relative;
  .container {
    padding-bottom: 0;
  }
  .top {
    width: 1179px;
    height: 98px;
    background: rgba(48, 171, 223, 1);
    .item {
      width: 393px;
      height: 98px;
      background: rgba(48, 171, 223, 1);
      float: left;
      &:nth-last-of-type(2) {
        background: rgba(40, 147, 199, 1);
      }
      &:nth-last-of-type(1) {
        background: rgba(29, 114, 158, 1);
      }
    }
  }
  .bottom {
    width: 1179px;
    position: relative;
    overflow: hidden;
    .divide {
      width: 1px;
      height: 240px;
      background: rgba(8, 27, 33, 1);
      float: left;
      margin-top: 61px;
    }
    .logo {
      width: 224px;
      padding-top: 61px;
      float: left;
      margin-right: 98px;
      img {
        display: block;
        margin: 0 auto;
        width: 75px;
        height: 67px;
      }
      span {
        display: inline-block;
        margin-top: 20px;
        width: 100%;
        height: 16px;
        font-size: 16px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(48, 171, 223, 1);
      }
    }
    .about {
      width: 201px;
      padding-left: 40px;
      padding-top: 61px;
      float: left;
      dl {
        margin: 0;
      }
      .line {
        width: 20px;
        height: 5px;
        background: rgba(47, 171, 223, 1);
        margin-bottom: 20px;
      }
      dt {
        font-size: 18px;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 20px;
      }
      dd {
        height: 22px;
        font-size: 14px;
        margin: 0px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(131, 137, 140, 1);
      }
    }
  }
  .banben {
    font-size: 12px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(131, 137, 140, 1);
    margin-top: 138px;
  }
  .ali-href,
  .ali-href:hover {
    color: rgba(48, 171, 223, 1);
    text-decoration: none;
  }
}
</style>
