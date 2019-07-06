<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      订单详情
    </el-header>
    <el-main class="userOrderFormDetails userAllOrder">
      <el-row>
        <el-col class="detailsHeaderBg baUndertintBlack">
          <el-col :span="22" :offset="1" class="detailsHeader pd4">
            <el-col :span="24">
              <div class="detailsHeaderIcon">
                <img src="/static/testImg/userOrderFormIcon.png">
              </div>
            </el-col>
            <el-col :span="20" :offset="2" class="detailsHeaderInfo">
              <div class="pd1 stateText colorWhite lh1-6"> {{detailsInfo.order_attr_name}} </div>
              <div class="pd1 colorWhite detailsHeaderText lh1-6">物流公司： {{detailsInfo.shipping_name}} </div>
              <div class="pd1 colorWhite detailsHeaderText lh1-6">订单号：{{detailsInfo.order_sn }} </div>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="detailsMain brB10" >
          <el-col :span="22" :offset="1" class="pd4" v-if="detailsInfo.order_attr==='3'||detailsInfo.order_attr==='5'">
            <el-col :span="2">
              <div class="detailsMainLogisticsIcon mgT2">
                <img src="/static/testImg/user-take.png">
              </div>
            </el-col>
            <el-col :span="21" :offset="1">
              <div>
                <el-col :span="22">
                  <div class="logisticsInfoRow lh1-6 colorYellow">
                    {{physicalDistributionText}}
                    <div class="mgT1 pd2 colorGray">{{physicalDistributionTime}}</div>
                  </div>
                </el-col>
                <el-col :span="1" :offset="1">
                  <router-link
                    :to="{ name: '物流跟踪详情', params: { id: detailsInfo.express_info.EBusinessID, order_id:detailsInfo.order_id, state:detailsInfo.order_attr_name,shipping_name:detailsInfo.shipping_name,order_sn:detailsInfo.order_sn } }">
                    <div class="logisticsMoreIcon">
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </router-link>
                </el-col>
              </div>
            </el-col>
          </el-col>
          <el-col :span="22" :offset="1" class="pd4">
            <el-col :span="2">
              <div class="detailsMainLogisticsIcon">
                <img src="/static/testImg/user-site.png">
              </div>
            </el-col>
            <el-col :span="21" :offset="1">
              <el-col :span="16">
                <div class="detailsInfoConsignee">收货人：{{detailsInfo.consignee}}</div>
              </el-col>
              <el-col :span="8" class="text-alignRight">
                <div class="detailsInfoConsigneePhone">{{detailsInfo.mobile}}</div>
              </el-col>
              <el-col class="detailsInfoPlaceOfReceipt pd2 lh1-2 colorGray">
                {{detailsInfo.address}}
              </el-col>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
      <el-row class="brB10 pdB2">
        <el-col :span="22" :offset="1">
          <el-col v-for="o in detailsInfo.goods_list">
            <el-col :span="6" class="userAllOrderFormListImg">
              <router-link :to="{ name: '详情页', params: { id: o.goods_id } }">
                <img :src="o.thumb">
              </router-link>
            </el-col>
            <el-col :span="17" :offset="1" class="pdLR1">
              <el-row>
                <el-col :span="16" class="mgT1">
                  <div class="pd1 productTitle">{{o.goods_name}}</div>
                  <div>
                    <span class="colorGray productSpecification">{{o.spec_key_name}} <span
                        v-if="o.spec_key_name!=''">;</span> </span>
                  </div>
                </el-col>
                <el-col :span="7" :offset="1" class="mgT2">
                  <div class="text-alignRight price">¥{{o.goods_price}}</div>
                  <div class="text-alignRight amount">x{{o.goods_num}}</div>
                  <!-- <div class="refundText colorYellow text-alignRight pdT1" v-if="o.state==='退款成功'">退款成功</div> -->
                </el-col>
              </el-row>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="detailsPaymentInfo" :span="22" :offset="1">
          <el-col class="pd2 mgTB2 brB1">
            <el-col :span="16">商品总额</el-col>
            <el-col :span="8" class="text-alignRight">¥{{detailsInfo.total_amount}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col :span="16">运费</el-col>
            <el-col :span="8" class="text-alignRight">¥{{detailsInfo.shipping_price}}</el-col>
          </el-col>
          <el-col class="pd2 orderInfo">
            <div class="pd2 infoText colorGray">订单编号：{{detailsInfo.order_sn}}</div>
            <div class="pd2 infoText colorGray">下单时间：{{detailsInfo.add_time|formatDate}}</div>
            <div class="pd2 infoText colorGray">支付方式：{{detailsInfo.pay_name}}</div>
          </el-col>
          <el-col class="pd8">
            <el-col :span="16" :offset="8" class="text-alignRight">
              <span>应付总额</span>
              <span class="text-alignRight colorRed">¥{{detailsInfo.order_amount}}</span>
            </el-col>
          </el-col>
          <el-col class="pd8 orderFormDeatilsBtn text-alignRight">
            <router-link
                    :to="{ name: '物流跟踪详情', params: { id: detailsInfo.express_info.EBusinessID, order_id:detailsInfo.order_id, state:detailsInfo.order_attr_name,shipping_name:detailsInfo.shipping_name,order_sn:detailsInfo.order_sn } }" v-if="detailsInfo.order_attr==='5'||detailsInfo.order_attr==='3'">
              <el-button round >查看物流</el-button>
            </router-link>
            <el-button round  @click="cancel()" v-if="detailsInfo.order_attr === '1'">取消订单</el-button>
            <el-button round  @click="deleste()" v-if="detailsInfo.order_attr === '4'||detailsInfo.order_attr === '5'">删除订单</el-button>
            <!-- <router-link :to="{name: '购物车详情'}">
              <el-button round class="bgUndertintYellow colorWhite brR1" v-if="detailsInfo.order_attr === '1'" @click="payment()">付款</el-button>
            </router-link> -->
            <el-button round class="bgUndertintYellow colorWhite brR1" v-if="detailsInfo.order_attr ==='3'" @click="affirm()">确认收货</el-button>
            <!-- <el-button round class="bgUndertintYellow colorWhite brR1">确认收货
            </el-button> -->
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  inject: ["reload"],
  filters: {
    formatDate: function(value) {
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
      return y + "-" + MM + "-" + d + " " + h + ":" + m; //多种时间格式的拼接
    }
  },
  data() {
    return {
      physicalDistributionText: "",
      physicalDistributionTime: "",
      btnCancellationOrder: false,
      btnPaymentOrder: false,
      btnBackOrder: false,
      btnLogisticsTrackingOrder: false,
      btnConfirmReceiptOrder: false,
      btnCancelOrder: false,
      btnForfeiturePayment: false,
      btnDetailsCancelOrder: false,
      btnDetailsForfeiturePayment: false,
      detailsInfo: {
        state: "退款/退货",
        stateText: "卖家已发货",
        logisticsCompany: "顺丰速运配送",
        orderFormNum: "201912789945435435",
        orderFormId: "orderFormIdA1000001",
        totalAmount: 1002,
        transportationExpense: 10,
        copeWithPrice: 804,
        orderNum: "orderNumIdB1000001",
        orderTime: "2019-03-15 16:01:59",
        patternOfPayment: "微信支付",
        consignee: "张三",
        consigneePhone: "18536790386",
        placeOfReceipt:
          "收货地址：上海上海市浦东新区张江镇路上海上海市浦东新区 张江镇路368号39号楼233室"
      }
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getData() {
      var that = this;
      var order_id = that.$route.params.id;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/order/order_detail?order_id=" + order_id
      })
        .then(function(res) {
          that.detailsInfo = res.data.data;
          (that.physicalDistributionText =
            that.detailsInfo.express_info.Traces[
              that.detailsInfo.express_info.Traces.length - 1
            ].AcceptStation),
            (that.physicalDistributionTime =
              that.detailsInfo.express_info.Traces[
                that.detailsInfo.express_info.Traces.length - 1
              ].AcceptTime);
        })
        .catch({});
    },
    cancel(inex) {
      const thir = this;
      const order_id = thir.$route.params.id;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/order/order_cancle?order_id=" + order_id
      })
        .then(function(res) {
          thir.allOrderForm.listArray = res.data.data;
          thir.$message({
            message: "操作成功",
            type: "success"
          });
        })
        .catch({});
      thir.reload();
    },
    deleste(inex) {
      const thir = this;
      const order_id = thir.$route.params.id;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/order/order_delete?order_id=" + order_id
      })
        .then(function(res) {
          thir.allOrderForm.listArray = res.data.data;
          thir.$message({
            message: "操作成功",
            type: "success"
          });
        })
        .catch({});
      thir.reload();
    },
    affirm(inex) {
      const thir = this;
      const order_id = thir.$route.params.id;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/order/order_confirm?order_id=" + order_id
      })
        .then(function(res) {
          thir.allOrderForm.listArray = res.data.data;
          thir.$message({
            message: "操作成功",
            type: "success"
          });
        })
        .catch({});
      thir.reload();
    },
    payment(inex) {
      const thir = this;
      const order_id = thir.$route.params.id;
      axios
        .get("/Api/Payment/order_pay?order_id=" + order_id)
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
                alert('支付失败')
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
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";

.el-main {
  padding: 0;
}
</style>
