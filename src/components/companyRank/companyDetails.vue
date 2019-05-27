<template lang="html">
    <!-- <mt-header title="公司排名">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        {{detailsInfo.title}}
        </el-header>
        <el-main class="detailsInfo">
            <el-row>
                <el-col :span="22" :offset="1" class="detailsInfoText lh1-8 textIndent2-8 img1" v-html="detailsInfo.content">
                    {{detailsInfo.article_id}}-{{detailsInfo.content}}
                </el-col>
                <el-col class="detailsInfoImg mgTB2">
                    <img :src="detailsInfo.thumb">
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      detailsInfo: {
        // id: "companyDetailsA1000001",
        // title: "哈尔滨鼎龙科技有限公司",
        // captionText:
        //   "哈尔滨鼎龙信息科技有限公司成立于2006年，专注向中小企业提供 移动互联网的技术及数据营销服务，是目前中国服务企业过万的移 动营销服务商之一。2015年1月，鼎龙科技由产品销售型向平台研 发成功转型，鼎龙科技拥有庞大的研发团队，维护团队,制作团队及 其运营团队。目前公司所服务的企业已经自黑龙江辐射于辽宁,吉林, 北京、上海、深圳等地。",
        // captionImg: "static/testImg/company.jpg"
      }
    };
  },mounted(){
    this.getData();
  },methods:{
    getData(){
      const that = this
      axios.get('/Api/Index/company_detail?article_id=1418')
      .then(function(res){
        that.detailsInfo = res.data.data;
        // console.log(res)
      }).catch(function(error){
        // console.log(error)
      })
    }
  }
};
</script>
<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
.el-main {
  padding: 0;
}
.detailsInfo {
  .detailsInfoText {
    .fz(font-size, 28);
  }
  .detailsInfoImg {
    img {
      width: 100%;
    }
  }
} .img1 img{
  width: 100%;
}.img1{
  margin-top: 17px;
  .fz(font-size,24);
  color: #313131;
}
</style>