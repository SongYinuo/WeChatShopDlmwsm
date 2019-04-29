<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      物流跟踪
    </el-header>
    <el-main class="logisticsListInfo">
      <el-row class="brB10">
        <el-col :span="22" :offset="1" class="pd2" v-for="k in productList">
          <el-col :span="6" class="logisticsListInfoImg">
            <img :src="k.productImg">
          </el-col>
          <el-col :span="17" :offset="1" class="pd2">
            <div>
              <span class="logisticsTitle colorGray lh1-6">物流状态：</span>
              <span>{{k.logisticsState}}</span>
            </div>
            <div>
              <span class="logisticsTitle colorGray lh1-6">承运来源：</span>
              <span>{{k.logisticsCompany}}</span>
            </div>
            <div>
              <span class="logisticsTitle colorGray lh1-6">运单编号：</span>
              <span>{{k.orderFormNum}}</span>
            </div>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset="1" class="pd8">
          <el-col>详细信息</el-col>
          <el-col class="pd4">
            <el-col :span="22" :offset="1">
              <el-timeline>
                <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color"
                  :size="activity.size" :timestamp="activity.timestamp">
                  <span class="title lh1-6">
                    {{activity.content}}
                    {{activity.state}}
                    {{activity.signer}}
                    {{activity.signerPhone}}
                  </span>
                </el-timeline-item>
              </el-timeline>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          id: "A1000001",
          productImg: "static/testImg/youhua.jpg",
          orderFormNum: "orderFormH10000101",
          logisticsState: "已签收",
          logisticsCompany: "顺通快递"
        }
      ],
      activities: [
        {
          content: "上海市浦东新区张江公司",
          state: "已签收",
          timestamp: "2018-04-03 20:46",
          signer: "顺丰快递",
          signerPhone: "15624548634",
          color: "#DAB62E"
        },
        {
          content: "上海市浦东新区 ",
          state: "已收入",
          timestamp: "2018-04-03 12:46",
          signer: "张江",
          signerPhone: "15624548634",
          color: ""
        },
        {
          content: "上海市浦东新区张江1公司",
          state: "派件中",
          timestamp: "2018-04-03 00:46",
          signer: "顺丰快递",
          signerPhone: "15624548634",
          color: ""
        },
        {
          content: "1广东省深圳市平湖公司 已发出",
          nextSite: "深圳转运心",
          state: "已签收",
          timestamp: "2018-04-03 20:46",
          signer: "转运",
          signerPhone: "15624548634",
          color: ""
        },
        {
          content: "2广东省深圳市平湖公司 已发出",
          nextSite: "深圳转运心",
          state: "已签收",
          timestamp: "2018-04-03 20:46",
          signer: "转运",
          signerPhone: "15624548634",
          color: ""
        },
        {
          content: "3广东省深圳市平湖公司 已发出",
          nextSite: "深圳转运心",
          state: "已签收",
          timestamp: "2018-04-03 20:46",
          signer: "转运",
          signerPhone: "15624548634",
          color: ""
        },
        {
          content: "4广东省深圳市平湖公司 已发出",
          nextSite: "深圳转运心",
          state: "已签收",
          timestamp: "2018-04-03 20:46",
          signer: "转运",
          signerPhone: "15624548634",
          color: ""
        },
        {
          content: "5广东省深圳市平湖公司 已发出",
          nextSite: "深圳转运心",
          state: "已签收",
          timestamp: "2018-04-03 20:46",
          signer: "转运",
          signerPhone: "15624548634",
          color: ""
        },
        {
          content: "6广东省深圳市平湖公司 已发出",
          nextSite: "深圳转运心",
          state: "已签收",
          timestamp: "2018-04-03 20:46",
          signer: "转运",
          signerPhone: "15624548634",
          color: ""
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";

.el-main {
  padding: 0;
}
</style>
