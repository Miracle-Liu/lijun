<!-- 下载 -->
<template>
  <div class='download-container'>
    <div class="container">
      <div class="l-box">
        <div class="title">{{$t('download.title')}}</div>
        <div class="directory" v-for="(item,index) in directoryList" :key="index">
          {{$t(item.name)}}
        </div>
      </div>
      <div class="r-box">
        <div class="title">{{$t('download.list')}}</div>
        <table class="table">
          <thead>
            <th>{{$t('download.th_name')}}</th>
            <th>{{$t('download.th_description')}}</th>
            <th>{{$t('download.th_size')}}</th>
            <th>{{$t('download.th_downloads')}}</th>
            <th>{{$t('download.th_update_time')}}</th>
            <th>{{$t('download.th_download')}}</th>
          </thead>
          <tbody>
            <tr v-for="(item,index) in list" :key="index">
              <td class="file-name">{{item.name}}</td>
              <td>{{item.description}}</td>
              <td>{{item.size}}</td>
              <td>{{item.downloads}}</td>
              <td>{{item.update_time}}</td>
              <td class="download-btn">
                <a href="/static/files/Catalog.pdf" download="Catalog of Xiantao Lijun Non-woven Products Co.,Ltd.pdf">Download</a>
              </td>
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
    {name:'download.directory',id:1}
  ],
  list:[
    {
    name:"Catalog.pdf",
    description:"Catalog of Xiantao Lijun",
    size:"4.73MB",
    downloads:"352",
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
        a,
        a:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
