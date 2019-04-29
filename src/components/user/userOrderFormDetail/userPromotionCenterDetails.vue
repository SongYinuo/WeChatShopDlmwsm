<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      账户明细
    </el-header>
    <el-main class="userPromotionCenter">
      <el-row>
        <el-col :span="22" :offset="1">
          <el-col class="brB1 pd1" v-for="k in promotionCenterInfo.accountsArray">
            <el-col :span="16">
              <div class="pd1 accountsText">{{k.accountsType}}</div>
              <div class="pd1 accountsDate colorGray">{{k.accountsDate}}{{k.commissionNme}}</div>
            </el-col>
            <el-col :span="8">
              <div class="text-alignRight pd1">{{k.accountsPrice}}</div>
              <div class="text-alignRight pd1 accountsLevel colorGray">{{k.level}}{{k.levelname}}</div>
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
      promotionCenterInfo: {
        advettImgUrl: "static/testImg/vipBanner.jpg",
        promotionEarnings: 12000,
        levelOnePromoter: 20,
        levelTwoPromoter: 10,
        accountsArray: [
          {
            accountsType: "提现",
            commissionNme: "",
            accountsDate: "2018.01.23 22:47:23",
            accountsPrice: -50.0,
            level: "",
            levelname: ""
          },
          {
            accountsType: "推广佣金",
            commissionNme: "上帝的手术刀",
            accountsDate: "2018.01.23 22:47:23",
            accountsPrice: +50.0,
            level: "1级",
            levelname: "崔小兮"
          },
          {
            accountsType: "提现",
            ommissionNme: "",
            accountsDate: "2018.01.23 22:47:23",
            accountsPrice: -50,
            level: "",
            levelname: ""
          },
          {
            accountsType: "推广佣金",
            ommissionNme: "下帝的手术刀",
            accountsDate: "2018.01.23 22:47:23",
            accountsPrice: +150,
            level: "2级",
            levelname: "李晓明"
          },
          {
            accountsType: "提现",
            ommissionNme: "",
            accountsDate: "2018.01.23 22:47:23",
            accountsPrice: -50,
            level: "",
            levelname: ""
          }
        ]
      }
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

.el-message-box {
  width: 100%;
  margin-top: 70%;
}
</style>
