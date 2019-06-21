<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      确认订单
    </el-header>
    <el-main class="userOrderFormDetails userAllOrder">
      <el-row>
        <el-col class="detailsMain brB10">
          <el-col :span="22" :offset="1" class="pd4">
            <el-col :span="2">
              <div class="detailsMainLogisticsIcon" style="margin-top:-4px">
                <img src="static/testImg/user-site.png">
              </div>
            </el-col>
            <el-col :span="21" :offset="1">
              <div v-if="address_list !=''">
                <el-col :span="14">
                  <div class="detailsInfoConsignee">收货人：{{address_list.consignee}}</div>
                </el-col>
                <el-col :span="8" class="text-alignRight">
                  <div class="detailsInfoConsigneePhone">{{address_list.mobile}}</div>
                </el-col>
              </div>
              <div v-if="address_list ==''">
                <el-col :span="22">
                选择收货地址
                </el-col>
              </div>
              <el-col :span="2" class="text-alignRight">
                <router-link :to="{ name: '收货地址'}">
                    <div>
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </router-link>
              </el-col>
              <el-col class="detailsInfoPlaceOfReceipt pd2 lh1-2 colorGray" v-if="address_list !=''">
               {{address_list.province_name}}{{address_list.city_name}}{{address_list.district_name}}{{address_list.address}}
              </el-col>
            </el-col>
          </el-col>
          </el-col>
      </el-row>
      <el-row class="brB10 pdB2" v-for="item in goods_list">
        <el-col :span="22" :offset="1" class="pd2">
          <el-col :span="6" class="userAllOrderFormListImg">
            <router-link :to="{ name: '详情页', params: { id: item.goods_id} }">
              <img :src="item.thumb">
            </router-link>
          </el-col>
          <el-col :span="17" :offset="1" class="pdLR1">
            <el-row>
              <el-col :span="16" class="mgT1">
                <div class="pd1 productTitle">{{item.goods_name}}</div>
                <div>
                  <!-- <span class="colorGray productSpecification">{{o.specificationSize}} ; </span> -->
                  <span class="colorGray productSpecification">{{item.spec_key_name}} ; </span>
                </div>
              </el-col>
              <el-col :span="7" :offset="1" class="mgT2">
                <div class="text-alignRight price">¥{{item.goods_price}}</div>
                <div class="text-alignRight amount">x{{item.goods_num}}</div>
                <!-- <div class="refundText colorYellow text-alignRight pdT1" v-if="o.state==='退款成功'">退款成功</div> -->
              </el-col>
              <el-col class="pd2">
                <el-col :span="20" :offset="4" class="text-alignRight">共{{item.goods_num}}件商品 合计：{{item.goods_fee}}</el-col>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="detailsPaymentInfo" :span="22" :offset="1">
          <el-col class="pd2 mgT2 brB1">
            <el-col :span="16">商品总额</el-col>
            <el-col :span="8" class="text-alignRight">¥{{goods_detail_message.goods_price}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col :span="4">积分</el-col>
            <el-col :span="12" class="colorGray mgT1" style="font-size:12px;">共{{user_pay_points}},最大抵扣{{goods_detail_message.integral_money}}</el-col>
            <el-col :span="8" class="text-alignRight">{{goods_detail_message.use_point}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col :span="16">配送方式</el-col>
            <el-col :span="8" class="text-alignRight">{{detailsInfo.distribution}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col :span="16">支付方式</el-col>
            <el-col :span="8" class="text-alignRight">{{detailsInfo.patternOfPayment}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col>买家留言</el-col>
            <el-col class="pd2 carDetailsTextarea">
              <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
            </el-col>
          </el-col>
        </el-col>
        <el-col>
          <el-col class="lh1-6">
            <el-col :span="16" class="text-alignRight mgT2">
              <span>应付总额</span>
              <span class="text-alignRight colorRed">¥{{goods_detail_message.order_amount}}</span>
            </el-col>
          <el-col :span="8" class="orderFormDeatilsBtn text-alignRight">
            <el-button @click="submitCarDetails()" class="bgUndertintYellow colorWhite brR1" style="border-radius:0">立即支付
            </el-button>
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
  data() {
    return {
      textarea: "",
      detailsInfo: {
        totalAmount: 1002,
        transportationExpense: 10,
        copeWithPrice: 804,
        orderNum: "orderNumIdB1000001",
        orderTime: "2019-03-15 16:01:59",
        patternOfPayment: "微信支付",
        integral: 3000,
        maxIntegral: 2500,
        logisticsDynamicArray: [
          {
            logisticsCity: "哈尔滨",
            department: "分部",
            signer: "小明",
            signerPhone: "15124550264",
            signerSpecialPlane: "0451-82896542",
            dateTime: "2019-03-05  06:18:12",
            logisticsId: "logisticsA100000101"
          }
        ],
        consignee: "张三",
        consigneePhone: "15124550264",
        placeOfReceipt: "上海市张江镇路368号39号楼233室",
        distribution: "物流配送"
      },
      // 商品列表
      goods_list: [],
      goods_detail_message: "",
      // 用户共多少积分
      user_pay_points: "",
      // 收货地址列表
      address_list: ""
    };
  },
  methods: {
    // 获取页面信息
    getData() {
      var that = this;
      axios
        .get("/Api/Cart/cart_submit" + "?address_id=" + "")
        .then(function(res) {
          that.goods_list = res.data.data.cart_list;
          that.goods_detail_message = res.data.data.result;
          that.user_pay_points = res.data.data.user_pay_points;
          that.address_list = res.data.data.address;
        })
        .catch(function(error) {});
    },
    // 立即支付
    submitCarDetails() {
      axios
        .post("/Api/Cart/cart_submit", {
          address_id: ""
        })
        .then(function(res) {
          if (res.data.code == 1) {
            axios
              .get("/Api/Payment/order_pay?order_id=" + res.data.data.order_id)
              .then(function(ress) {
                var str_attr = JSON.parse(ress.data.data);
                WeixinJSBridge.invoke(
                  "getBrandWCPayRequest",
                  {
                    appId: str_attr.appId, //公众号名称，由商户传入
                    timeStamp: str_attr.timeStamp, //时间戳，自1970年以来的秒数
                    nonceStr: str_attr.nonceStr, //随机串
                    package: str_attr.package,
                    signType:str_attr.signType, //微信签名方式：
                    paySign: str_attr.paySign //微信签名
                  },
                  function(res) {
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                    }
                  }
                );
              });
          }
        })
        .catch(function(error) {});
    }
  },
  mounted() {
    var that = this;
    that.getData();
  }
};
</script>

<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";

.el-main {
  padding: 0;
  .carDetailsTextarea {
    .el-textarea__inner {
      background-color: #eeeeee;
      border: none;
    }
  }
}
</style>
