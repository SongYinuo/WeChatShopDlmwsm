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
    </el-main>
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
        advettImgUrl: "static/testImg/vipBanner.jpg",
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
          console.log(res);
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
