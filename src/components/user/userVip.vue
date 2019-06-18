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
              <div class="text-alignCenter colorWhite userVipDay pdT1">还有{{userVip.remainingDays}}天到期</div>
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
      userVip: {
        userVipBanner: "static/testImg/vipBanner.jpg",
        remainingDays: 40,
        userVipExplain: "此处为有关vip的说明文字"
      }
    };
  },
  methods: {
    wxpay() {
      axios({
        methods: "post",
        async: "false",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Payment/vip_pay"
      })
        // .post(url, data)
        .then(res => {
          if (res.code == 200) {
            const callpay = res.data.jsApiParameters;
            if (typeof WeixinJSBridge == "undefined") {
              if (document.addEventListener) {
                document.addEventListener(
                  "WeixinJSBridgeReady",
                  onBridgeReady,
                  false
                );
              } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
                document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
              }
            } else {
              onBridgeReady();
              // this.onBridgeReady(pay_params);
            }
          } else {
            alert("微信支付调起失败！");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onBridgeReady(params) {
      const pay_params = JSON.parse(params);
      WeixinJSBridge.invoke("getBrandWCPayRequest", jsApiParameters, function(
        res
      ) {
        //WeixinJSBridge.log(res.err_msg);
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          // location.href='$go_url';
        } else {
          alert(res.err_code + res.err_desc + res.err_msg+"1");
          // location.href='$back_url';
         
        }
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
.userVipBtnRow {
  .el-button {
    border-radius: 0;
  }
}
</style>