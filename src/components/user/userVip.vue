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
      },
      api: {}
    };
  },
  methods: {
   wxpay() {
           axios.post("/Api/Payment/vip_pay")
            .then((res) => {
                if(res.data.code == 1) {
                     const that=this;
                    that.api = JSON.parse(res.data.data);
                    console.log(1);
                    console.log(res.data.data);
                    if (typeof WeixinJSBridge == "undefined"){
                        if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                        }else{
                        this.onBridgeReady(api);
                    }
                }else{
                    alert('微信支付调起失败！');
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        onBridgeReady(api) {
            const api = JSON.parse(api);
            console.log(3);
            console.log(res.data.data);
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest',api, 
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                    alert('支付成功！');
                } else{
                   alert(res.err_code+res.err_desc+res.err_msg);
                }
            }); 
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