<template>
    <div class="footer">
        <div class="top">
            <TopList class="item" v-for="(tList,index) in topLists" :key="index" :item="tList.item" :text="tList.text" />
        </div>
        <div class="bottom">
            <div class="logo">
                <img src="../static/images/logo.png" alt="">
                <span>仙桃市利军无纺布制品有限公司</span>
            </div>
            <div class="about" v-for="(bList,index) in bottomLists" :key="index" :title="bList.title">
                <dl>
                    <dt>{{bList.title}}</dt>
                    <dd v-for="list in bList.bottomList">{{list}}</dd>
                </dl>
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
            {item:item2,text:"027-83928188"},
            {item:item3,text:"027-83928188"},
            ],
            bottomLists:[
            {bottomList:['FAQ','下载'],title:'关于我们'},
            {bottomList:['一次性口罩','N95防尘口罩','一次性帽子','防护服','实验服','隔离衣','鞋套','其它'],title:'产品'},
            {bottomList:['地址: 湖北省仙桃市彭场镇千秋南街138号','阿里巴巴: https://lijunchina.en.alibaba.com','外贸部: 湖北省武汉市江汉区后襄河北路海马中心2109','版权所有: 仙桃市利军无纺布制品有限公司'],title:'联系我们'}
            ]        
        }
    },
}
</script>
<style lang="scss">
    .footer {
        width:1920px;
        height:630px;
        background:rgba(4,13,16,1);
        .top {
            width: 1179px;
            height: 98px;
            margin: 0px 60px;
            background:rgba(48,171,223,1);
            .item {
                width:393px;
                height:98px;
                background:rgba(48,171,223,1);
                float: left
            }
        }
        .bottom {
            width: 1179px;
            height: 472px;
            margin: 0 60px;
            position: relative;
            .logo {
                width: 320px;
                height: 472px;
                float: left;
                img {
                    margin: 61px 171px 21px 74px;
                }
                span {
                    width:222px;
                    height:16px;
                    margin: 42px;
                    font-size:16px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(48,171,223,1);
                    line-height:70px;
                }
            }
            .about {
                width: 201px;
                height: 411px;
                padding-left: 40px;
                padding-top: 61px;
                float: left;
                dt {
                    height: 62px;
                    font-size:18px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(255,255,255,1);
                }
                dd {
                    height: 22px;
                    font-size:14px;
                    margin: 0px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(131,137,140,1);
                }
            }    
            .banben {
                width:299px;
                height:11px;
                font-size:12px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(131,137,140,1);
                line-height:70px;
                position: absolute;
                left: 370;
                bottom: 21px
            }
        }
    }
</style>