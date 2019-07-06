<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
          我的Vip
        </el-header>
        <el-main class="userVip">
          <el-row class="userVipRow">
            <el-col>
              <img :src="userVip.userVipBanner">
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16" :offset="4" class="userVipBtnRow">
              <div class="text-alignCenter colorWhite userVipTitle pdT3">我办理的Vip</div>
              <div class="text-alignCenter colorWhite userVipDay pdT1">还有{{userVips}}天到期</div>
              <div class="text-alignCenter userVipTitle pdT3">
                <el-button plain @click="wxpay">立即续费</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22" :offset="1">
              <div class="userVipTitle pdT6">VIP服务介绍</div>
              <div class="pdT3 userVipExplain">{{userVip.userVipExplain}}</div>
            </el-col>
          </el-row>
        </el-main>
    </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userVips: '',
      userVip: {
        userVipBanner: "static/testImg/vipBanner.jpg",
        remainingDays: 40,
        userVipExplain: "办理vip即可获取专属vip专属视频"
      },
      api: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Api/index"
      }).then(function(res) {
        that.userVips = res.data.data.user.vip_remain_day;
      });
    },
    wxpay() {
      axios
        .get("/Api/Payment/vip_pay")
        .then(function(res) {
          var api = JSON.parse(res.data.data);
          WeixinJSBridge.invoke(
            "getBrandWCPayRequest",
            {
              appId: api.appId, //公众号名称，由商户传入
              timeStamp: api.timeStamp, //时间戳，自1970年以来的秒数
              nonceStr: api.nonceStr, //随机串
              package: api.package,
              signType: api.signType, //微信签名方式：
              paySign: api.paySign //微信签名
            },
            function(res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                // location.href='$go_url';
              } else {
                alert('支付失败');
                // alert(res.err_code + res.err_desc + res.err_msg);
                // location.href='$back_url';
              }
            }
          );
        })
        .catch(function(error) {});
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
.userVipBtnRow {
  .el-button {
    border-radius: 0;
  }
}
</style>