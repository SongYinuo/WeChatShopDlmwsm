<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      推广中心
    </el-header>
    <div class="userPromotionCenter">
      <el-row class="brB10">
        <el-col class="advettImg">
          <img :src="promotionCenterInfo.advettImgUrl">
        </el-col>
        <el-col :span="22" :offset="1">
          <div class="commissionTitle pd4 text-alignCenter colorGray">我的佣金（元）</div>
          <div class="commissionPrice pd4 text-alignCenter">{{promotionCenterInfo.info.user_money}}</div>
          <div class="pd2 text-alignCenter">
            <!-- <router-link :to="{ name: '推荐提现' }">
              <el-button class="bgRed colorWhite">立即提现</el-button>
            </router-link> -->
              <el-button class="bgRed colorWhite" @click="withdrawDeposit()">立即提现</el-button>
          </div>
          <el-col>
            <el-col :span="8">
              <div class="pd1">{{promotionCenterInfo.promotionEarnings}}</div>
              <div class="commissionText colorGray pd2">累计推广收益</div>
            </el-col>
            <el-col :span="8">
              <router-link :to="{ name: '一级推广' }">
                <div class="pd1">{{promotionCenterInfo.info.first_lower}}</div>
                <div class="commissionText colorGray pd2">一级推广员</div>
              </router-link>
            </el-col>
            <el-col :span="8">
              <router-link :to="{ name: '二级推广' }">
                <div class="pd1">{{promotionCenterInfo.info.second_lower}}</div>
                <div class="commissionText colorGray pd2">二级推广员</div>
              </router-link>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset="1">
          <el-col class="pd4 mgB2">
            <el-col :span="16" class="accountsTitle">账户明细</el-col>
            <router-link :to="{ name: '账户明细' }">
              <el-col :span="8" class="text-alignRight"><i class="el-icon-arrow-right"></i></el-col>
            </router-link>
          </el-col>
          <el-col class="brB1 pd1" v-for="k in promotionCenterInfo.account">
            <el-col :span="16">
              <div class="pd1 accountsText">{{k.desc}}</div>
              <div class="pd1 accountsDate colorGray">{{k.change_time|formatDate}}</div>
            </el-col>
            <el-col :span="8">
              <!-- <div class="text-alignRight pd1">{{k.accountsPrice}}</div> -->
              <div class="text-alignRight pd1 accountsLevel colorGray">{{k.user_dis_level}}{{k.dis_name}}</div>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  filters: {
      formatDate: function (value) {
        let date = new Date(value * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        let s = date.getSeconds();
        s = s < 10 ? "0" + s : s;
        // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;//多种时间格式的拼接
        return h + ":" + m;
      }
    },
  data() {
    return {
      promotionCenterInfo: {
        advettImgUrl: "static/testImg/tg-bg@2x.png",
        accountsArray: []
      }
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData(){
      const thir = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url:
          "/Api/Distribut/index" 
      })
        .then(function(res) {
         thir.promotionCenterInfo = res.data.data
        })
        .catch({});
    },
    withdrawDeposit(){
      this.$message({
            message: "功能研发中心...",
            type: "warning"
        });
    }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";

.el-main {
  padding: 0;
}

.el-message-box {
  width: 100%;
  margin-top: 70%;
}
</style>
