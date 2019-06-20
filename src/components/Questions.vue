<!-- 常见问题类别 -->
<template>
  <div class='questions-container'>
    <div class="container">
      <div class="l-box">
        <div class="title">常见问题类别</div>
        <div class="question" v-for="(item,index) in qesList" :key="index">
          {{item.name}}
        </div>
      </div>
      <div class="r-box">
        <div class="title">贸易咨询</div>
        <div class="answer" v-for="(item,index) in ansList" :key="index">
          <div class="ques">
            <div class="q">Q</div>
            <div class="text"> {{item.ques}}</div>
          </div>
          <div class="ans">
            <div class="a">A</div>
            <div class="text"> {{item.ans}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
components: {},
props: {},
data() {
return {
  qesList:[
    {name:'贸易咨询',id:1}
  ],
  ansList:[
    {
      ques:'您是制造商还是贸易公司?',
      ans:'我们有自己的工厂生产这种产品。'
    },
    {
      ques:'运输方法怎么样?',
      ans:'特快/航空/海运。'
    },
    {
      ques:'付款方式怎么样?',
      ans:'我们接受大额的电汇、信用证，小额的，您可以通过Paypal、西联汇款、速汇金、代管等方式付款。'
    },
    {
      ques:'我可以订购一些样品进行测试吗?',
      ans:'当然，我们可以安排运费到付的方式给你样品，如果不是我们正常的印刷，你需要支付样品费用。'
    },
    {
      ques:'你能定制我的特殊形状的急救箱吗?',
      ans:'是的，我们做OEM和ODM。'
    }
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
.questions-container {
  padding-top: 60px;
  padding-bottom: 80x;
  .container {
    padding: 0;
    overflow: hidden;
  }
  .l-box,
  .r-box {
    display: inline-block;
    float: left;
    .title {
      font-size: 36px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #000;
    }
  }

  .l-box {
    width: 400px;
    .title {
      margin-bottom: 20px;
    }
    .question {
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      cursor: pointer;
      margin-bottom: 15px;
      white-space: normal;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
  .r-box {
    width: calc(100% - 400px);
    .title {
      margin-bottom: 30px;
    }
    .answer {
      margin-bottom: 50px;
      overflow: hidden;
      width: 100%;
      line-height: 1.2;
      .q,
      .a {
        margin-right: 20px;
        float: left;
      }
      .ques,
      .ans {
        overflow: hidden;
        width: 100%;
        .text {
          float: left;
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
          width: calc(100% - 100px);
        }
      }
      .ques {
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 20px;
      }
      .ans {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(3, 77, 244, 1);
        .a {
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
}
</style>
