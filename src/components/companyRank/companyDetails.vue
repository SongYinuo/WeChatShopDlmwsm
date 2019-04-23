<template lang="html">
    <!-- <mt-header title="公司排名">
    </mt-header> -->
    <el-container>
        <el-header class="tittle">{{detailsInfo.title}}</el-header>
        <el-main class="detailsInfo">
            <el-row>
                <el-col :span="22" :offset="1" class="detailsInfoText lh1-8">
                    {{detailsInfo.id}}-{{detailsInfo.captionText}}
                </el-col>
                <el-col class="detailsInfoImg mgTB2">
                    <img :src="detailsInfo.captionImg">
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
      detailsInfo: {
        id: "companyDetailsA1000001",
        title: "哈尔滨鼎龙科技有限公司",
        captionText:
          "哈尔滨鼎龙信息科技有限公司成立于2006年，专注向中小企业提供 移动互联网的技术及数据营销服务，是目前中国服务企业过万的移 动营销服务商之一。2015年1月，鼎龙科技由产品销售型向平台研 发成功转型，鼎龙科技拥有庞大的研发团队，维护团队,制作团队及 其运营团队。目前公司所服务的企业已经自黑龙江辐射于辽宁,吉林, 北京、上海、深圳等地。",
        captionImg: "static/testImg/company.jpg"
      }
    };
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
      text-indent: 28px; 
  }
  .detailsInfoImg {
    img {
      width: 100%;
    }
  }
}
</style>