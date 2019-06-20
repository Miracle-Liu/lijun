<!-- 下载 -->
<template>
  <div class='download-container'>
    <div class="container">
      <div class="l-box">
        <div class="title">下载类别</div>
        <div class="directory" v-for="(item,index) in directoryList" :key="index">
          {{item.name}}
        </div>
      </div>
      <div class="r-box">
        <div class="title">下载列表</div>
        <table class="table">
          <thead>
            <th>名字</th>
            <th>介绍</th>
            <th>大小</th>
            <th>下载量</th>
            <th>更新</th>
            <th>下载</th>
          </thead>
          <tbody>
            <tr v-for="(item,index) in list" :key="index">
              <td class="file-name">{{item.name}}</td>
              <td>{{item.des}}</td>
              <td>{{item.size}}</td>
              <td>{{item.download_count}}</td>
              <td>{{item.update_time}}</td>
              <td class="download-btn">Download</td>
            </tr>
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
  directoryList:[
    {name:'目录',id:1}
  ],
  list:[
    {
    name:"Catalog.pdf",
    des:"Catalog of Wellmien",
    size:"4.73MB",
    download_count:"352",
    update_time:"2016-12-06",
    },
    {
    name:"Catalog.pdf",
    des:"Catalog of Wellmien",
    size:"4.73MB",
    download_count:"352",
    update_time:"2016-12-06",
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
.download-container {
  padding: 60px 0;
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
      margin-bottom: 10px;
    }
    .table {
      width: 100%;
      th {
        text-align: left;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        border-bottom: 1px solid rgba(232, 232, 232, 1);
        padding: 20px 0;
      }
      tr {
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        &:last-of-type {
          td {
            border: none;
          }
        }
      }
      td {
        padding: 20px 0;
        border-bottom: 1px solid rgba(232, 232, 232, 1);
      }
      .download-btn,
      .file-name {
        color: #034df4;
      }
      .download-btn {
        cursor: pointer;
      }
    }
  }
}
</style>
