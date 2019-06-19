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
              <div v-if="detailsInfo.placeOfReceipt!=''&&detailsInfo.consignee!=''">
                <el-col :span="14">
                  <div class="detailsInfoConsignee">收货人：{{detailsInfo.consignee}}</div>
                </el-col>
                <el-col :span="8" class="text-alignRight">
                  <div class="detailsInfoConsigneePhone">{{detailsInfo.consigneePhone}}</div>
                </el-col>
              </div>
              <div v-if="detailsInfo.placeOfReceipt===''&&detailsInfo.consignee===''">
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
              <el-col class="detailsInfoPlaceOfReceipt pd2 lh1-2 colorGray" v-if="detailsInfo.placeOfReceipt!=''&&detailsInfo.consignee!=''">
                {{detailsInfo.placeOfReceipt}}
              </el-col>
            </el-col>
          </el-col>
          </el-col>
      </el-row>
      <el-row class="brB10 pdB2" v-for="o in detailsInfo.listArray">
        <el-col :span="22" :offset="1" class="pd2">
          <el-col :span="6" class="userAllOrderFormListImg">
            <router-link :to="{ name: '详情页', params: { id: o.id } }">
              <img :src="o.productImg">
            </router-link>
          </el-col>
          <el-col :span="17" :offset="1" class="pdLR1">
            <el-row>
              <el-col :span="16" class="mgT1">
                <div class="pd1 productTitle">{{o.title}}</div>
                <div>
                  <span class="colorGray productSpecification">{{o.specificationSize}} ; </span>
                  <span class="colorGray productSpecification">{{o.specificationShape}} ; </span>
                </div>
              </el-col>
              <el-col :span="7" :offset="1" class="mgT2">
                <div class="text-alignRight price">¥{{o.price}}</div>
                <div class="text-alignRight amount">x{{o.amount}}</div>
                <div class="refundText colorYellow text-alignRight pdT1" v-if="o.state==='退款成功'">退款成功</div>
              </el-col>
              <el-col class="pd2">
                <el-col :span="20" :offset="4" class="text-alignRight">共{{o.amount}}件商品 合计：{{o.price}}</el-col>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="detailsPaymentInfo" :span="22" :offset="1">
          <el-col class="pd2 mgT2 brB1">
            <el-col :span="16">商品总额</el-col>
            <el-col :span="8" class="text-alignRight">¥{{detailsInfo.totalAmount}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col :span="4">积分</el-col>
            <el-col :span="12" class="colorGray mgT1" style="font-size:12px;">共{{detailsInfo.integral}},最大抵扣{{detailsInfo.maxIntegral}}</el-col>
            <el-col :span="8" class="text-alignRight">¥{{detailsInfo.transportationExpense}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col :span="16">运费</el-col>
            <el-col :span="8" class="text-alignRight">¥{{detailsInfo.transportationExpense}}</el-col>
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
              <span class="text-alignRight colorRed">¥{{detailsInfo.copeWithPrice}}</span>
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
        distribution: "物流配送",
        listArray: [
          {
            id: "userOrderForm100001",
            orderFormId: "orderForm000003",
            productImg: "static/testImg/oringe-2.jpg",
            title: "【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 402,
            amount: 1,
            state: "退款/退货",
            stateText: "待付款"
          },
          {
            id: "userOrderForm100001",
            orderFormId: "orderForm000003",
            productImg: "static/testImg/food1.jpg",
            title: "【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 402,
            amount: 1,
            state: "待付款",
            stateText: "待付款"
          },
          {
            id: "userOrderForm100001",
            orderFormId: "orderForm000003",
            productImg: "static/testImg/vegetables-1.jpg",
            title: "【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 402,
            amount: 1,
            state: "待收货",
            stateText: "待付款"
          }
        ]
      }
    };
  },
  methods: {
    submitCarDetails() {
      console.log(this.textarea);
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
  .carDetailsTextarea {
    .el-textarea__inner {
      background-color: #eeeeee;
      border: none;
    }
  }
}
</style>
