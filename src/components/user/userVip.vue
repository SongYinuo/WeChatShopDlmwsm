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
  //   wxpay() {
  //     const that = this;
  //     axios.post("/Api/Payment/vip_pay")
  //     // .then(res => {
  //     //     that.api = JSON.parse(res.data.data);
  //     //   })
  //     //   .catch(error => {});
  //    .then((res) => {
  //               if(res.code == 200) {
  //                   const api = JSON.parse(res.data.data);
  //                   console.log(1);
  //                   console.log(res.data.data);
  //                   console.log(2);
  //                   console.log(api);
  //                   if (typeof WeixinJSBridge == "undefined"){
  //                       if( document.addEventListener ){
  //                           document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
  //                       }else if (document.attachEvent){
  //                           document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
  //                           document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
  //                       }
  //                       }else{
  //                       this.onBridgeReady(pay_params);
  //                   }
  //               }else{
  //                   alert('微信支付调起失败！');
  //               }
  //           }).catch((err) => {
  //               console.log(err);
  //           })
  //       },
  // },}
  //        onBridgeReady(params) {
  //           const api = JSON.parse(res.data.data);
  //           console.log(3);
  //           console.log(res.data.data);
  //           console.log(4);
  //           console.log(api);
  //           WeixinJSBridge.invoke(
  //               'getBrandWCPayRequest', {
  //                   "appId": api.appId,  //公众号名称，由商户传入     
  //                   "timeStamp":api.timeStamp,  //时间戳，自1970年以来的秒数     
  //                   "nonceStr":api.nonceStr,  //随机串     
  //                   "package": api.package,     
  //                   "signType": api.signType,  //微信签名方式：     
  //                   "paySign": api.paySign  //微信签名 
  //               },
  //               function(res){
  //                   if(res.err_msg == "get_brand_wcpay_request:ok" ){
  //                   alert('支付成功！');
  //               } 
  //           }); 
  //       }
   wxpay() {
           axios.post("/Api/Payment/vip_pay")
            .then((res) => {
                if(res.data.code == 1) {
                     const that=this;
                    that.api = JSON.parse(res.data.data);
                    console.log(1);
                    console.log(res.data.data);
                    console.log(2);
                    console.log(api);
                    if (typeof WeixinJSBridge == "undefined"){
                        if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                        }else{
                        this.onBridgeReady(pay_params);
                    }
                }else{
                    alert('微信支付调起失败！');
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        onBridgeReady(params) {
            const pay_params = JSON.parse(api);
            console.log(3);
            console.log(res.data.data);
            console.log(4);
            console.log(api);
            console.log(5);
            console.log(pay_params);
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest',pay_params, 
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