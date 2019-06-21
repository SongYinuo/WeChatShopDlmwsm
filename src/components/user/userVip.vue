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
                <span @click="wxpay"><img :src="userVip.userVipimg"></span>
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
        userVipBanner: "static/testImg/VIP-bg@2x.png",
        userVipimg: "static/testImg/xfbtn@2x.png",
        remainingDays: 40,
        userVipExplain: "海量视频免费看，尊享会员生活"
      },
      api: {}
    };
  },
  methods: {
   wxpay() {
           axios
           .get("/Api/Payment/vip_pay")
           .then(function(res){
             console.log(res);
             var api = JSON.parse(res.data.data);
             console.log(api);
             WeixinJSBridge.invoke(
                  "getBrandWCPayRequest",
                  {
                    appId: api.appId, //公众号名称，由商户传入
                    timeStamp: api.timeStamp, //时间戳，自1970年以来的秒数
                    nonceStr: api.nonceStr, //随机串
                    package: api.package,
                    signType:api.signType, //微信签名方式：
                    paySign: api.paySign //微信签名
                  },function(res) {
                    if(res.err_msg == "get_brand_wcpay_request:ok") {
                  // location.href='$go_url';
                      }else{
                     alert(res.err_code+res.err_desc+res.err_msg);
                      // location.href='$back_url';
                     }
                  }
             );
           }).catch(function(error){});
   }
  
        }
  }
      
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