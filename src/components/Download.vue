<!-- 下载 -->
<template>
  <div class='download-container'>
    <div class="container">
      <div class="l-box">
        <div class="title">下载类别</div>
        <div class="directory" v-for="(item,index) in qesList" :key="index">
          {{item.name}}
        </div>
      </div>
      <div class="r-box">
        <div class="title">下载列表</div>
        <table class="table">
          <thead>
            <th>
            </th>
          </thead>
          <tbody>

          </tbody>
        </table>
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
  list:[
    {name:'目录',id:1}
  ],
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
.download-container {
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
    .directory {
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
    .table {
      width: 100%;
    }
  }
}
</style>
