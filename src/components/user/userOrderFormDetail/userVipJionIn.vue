<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      vip
    </el-header>
    <el-main class="userWithdrawDepositRow">
      <el-row>
        <el-col :span="22" :offset="1">
          <el-form ref="form" :model="form">
            <!-- <el-form-item label="充值金额"></el-form-item>
            <el-col>
              <el-col :span="1" class="pdT1 priceCharacter">￥</el-col>
              <el-col :span="22" :offset="1">
                <el-form-item>
                  <el-input v-model="form.inputValue" placeholder="请输入金额" type="number"></el-input>
                </el-form-item>
              </el-col>
            </el-col> -->
            <el-col class="pdT12">
              <el-form-item>
                <el-button type="primary" class="subBtn bgYellow brRNone" @click="onSubmit">确认充值</el-button>
              </el-form-item>
            </el-col>
          </el-form>
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
      form: {
        inputValue: ""
      }
    };
  },
  mounted: function() {
    this.onSubmit();
  },
  methods: {
    onSubmit() {
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
                alert(res.err_code + res.err_desc + res.err_msg);
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
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";

.el-main {
  padding: 0;
}
</style>
