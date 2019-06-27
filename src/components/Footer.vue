<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <TopList class="item" v-for="(tList,index) in topLists" :key="index" :item="tList.item" :text="tList.text" />
      </div>
      <div class="bottom">
        <div class="logo" :class="{en:lang==='en'}">
          <img src="../static/images/logo.png" alt="">
          <span>{{$t('footer.rightReserved_content')}}</span>
        </div>
        <div class="divide"></div>
        <div class="about">
          <dl>
            <dt class="title">{{$t('aboutUs.title')}}</dt>
            <dd class="line"></dd>
            <dd v-for="(item,index) in usList" style="cursor: pointer;" @click="jumper(item.href)">{{$t(item.name)}}</dd>
          </dl>
        </div>
        <div class="divide"></div>
        <div class="about">
          <dl>
            <dt class="title">{{$t('goods.title')}}</dt>
            <dd class="line"></dd>
            <dd v-for="(item,index) in goodsList" :key="index" style="cursor: pointer;" @click="jumperGoods(item.href)">{{$t(item.name)}}</dd>
          </dl>
        </div>
        <div class="divide"></div>
        <div class="about address-info">
          <dl>
            <dt class="title">{{$t('header.contactUs')}}</dt>
            <dd class="line"></dd>
            <dd>
              <span>{{$t('footer.ads')}}:</span>
              <span>{{$t('footer.ads_content')}}</span>
            </dd>
            <dd>
              <span>{{$t('footer.alibaba')}}:</span>
              <a class="ali-href" target="blank" href="https://lijunchina.en.alibaba.com">https://lijunchina.en.alibaba.com</a>
            </dd>
            <dd>
              <span>{{$t('footer.foreignTrade')}}:</span>
              <span>{{$t('footer.foreignTrade_content')}}</span>
            </dd>
            <dd>
              <span>{{$t('footer.rightReserved')}}:</span>
              <span>{{$t('footer.rightReserved_content')}}</span>
            </dd>
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
    computed:{
      lang(){
        return this.$i18n.locale
      }
    },
    data() {
        return {
            topLists:[
            {item:item1,text:"027-83928188"},
            {item:item2,text:"julie@xtlijun.com"},
            {item:item3,text:"0728-2612597"},
            ],
            usList:[
              {name:'aboutUs.faq',href:'/questions'},
              {name:'aboutUs.download',href:"/download"}
            ],
            goodsList:[
              {name:"goods.ycxkz",href:"https://lijunchina.en.alibaba.com/productgrouplist-221936750/Disposable_Face_Mask.html?spm=a2700.icbuShop.74.19.221fbd1alQbcFk"},
              {name:"goods.n95kz",href:"https://lijunchina.en.alibaba.com/productgrouplist-221936750/Disposable_Face_Mask.html?spm=a2700.icbuShop.74.19.221fbd1alQbcFk"},
              {name:"goods.ycxmz",href:"https://lijunchina.en.alibaba.com/productgrouplist-221938712/Disposable_Cap.html?spm=a2700.icbuShop.74.18.221fbd1alQbcFk"},
              {name:"goods.fhf",href:"https://lijunchina.en.alibaba.com/productgrouplist-209714929/Protective_Suit.html?spm=a2700.icbuShop.74.2.221fbd1alQbcFk"},
              {name:"goods.syf",href:"https://lijunchina.en.alibaba.com/productgrouplist-209761250/Surgical_Gown.html?spm=a2700.icbuShop.74.3.221fbd1alQbcFk"},
              {name:"goods.gly",href:"https://lijunchina.en.alibaba.com/productgrouplist-806860678/Isolation_Gown.html?spm=a2700.icbuShop.74.4.221fbd1alQbcFk"},
              {name:"goods.xt",href:"https://lijunchina.en.alibaba.com/productgrouplist-221837001/Disposable_Shoe_Cover.html?spm=a2700.icbuShop.74.20.221fbd1alQbcFk"},
              {name:"goods.qt",href:"https://lijunchina.en.alibaba.com"},
            ],

        }
    },
    methods:{
      jumper(path){
        this.$router.push({path})
      },
      jumperGoods(path){
        window.open(path)
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
      width: 322px;
      padding-top: 61px;
      float: left;
      &.en {
        img {
          margin: 0 auto;
        }
        span {
          font-size: 14px;
        }
      }
      img {
        display: block;
        margin-left: 74px;
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
      &.address-info {
        width: 450px;
      }
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
        font-size: 14px;
        margin: 0px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(131, 137, 140, 1);
        line-height: 22px;
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
