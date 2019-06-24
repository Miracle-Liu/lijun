<!-- 常见问题类别 -->
<template>
  <div class='questions-container'>
    <div class="container">
      <div class="l-box">
        <div class="title">{{$t('faq.commonQues')}}</div>
        <div class="question" v-for="(item,index) in qesList" :key="index">
          {{$t(item.name)}}
        </div>
      </div>
      <div class="r-box">
        <div class="title">{{$t('faq.myzx')}}</div>
        <div class="answer" v-for="(item,index) in ansList" :key="index">
          <div class="ques">
            <div class="q">Q</div>
            <div class="text"> {{$t(item.ques)}}</div>
          </div>
          <div class="ans">
            <div class="a">A</div>
            <div class="text"> {{$t(item.ans)}}</div>
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
    {name:'faq.myzx',id:1}
  ],
  ansList:[
    {
      ques:'faq.q1',
      ans:'faq.a1'
    },
    {
      ques:'faq.q2',
      ans:'faq.a2'
    },
    {
      ques:'faq.q3',
      ans:'faq.a3'
    },
    {
      ques:'faq.q4',
      ans:'faq.a4'
    },
    {
      ques:'faq.q5',
      ans:'faq.a5'
    },
    {
      ques:'faq.q6',
      ans:'faq.a6'
    },
    {
      ques:'faq.q7',
      ans:'faq.a7'
    },
    {
      ques:'faq.q8',
      ans:'faq.a8'
    },
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
