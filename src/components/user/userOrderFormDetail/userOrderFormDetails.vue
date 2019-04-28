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
                <img src="../../../../static/testImg/userOrderFormIcon.png">
              </div>
            </el-col>
            <el-col :span="20" :offset="2" class="detailsHeaderInfo">
              <div class="pd1 stateText colorWhite lh1-6"> {{detailsInfo.stateText}} </div>
              <div class="pd1 colorWhite detailsHeaderText lh1-6">物流公司： {{detailsInfo.logisticsCompany}} </div>
              <div class="pd1 colorWhite detailsHeaderText lh1-6">订单号：{{detailsInfo.orderFormNum }} </div>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="detailsMain brB10">
          <el-col :span="22" :offset="1" class="pd4">
            <el-col :span="2">
              <div class="detailsMainLogisticsIcon mgT2">
                <img src="../../../../static/testImg/user-take.png">
              </div>
            </el-col>
            <el-col :span="19" :offset="1">
              <div v-for="k in detailsInfo.logisticsDynamicArray">
                <div class="logisticsInfoRow lh1-6 colorYellow">
                  <span>快递已在</span>
                  <span>{{k.logisticsCity}}</span>
                  <span>{{k.department}}</span>
                  <span>签收</span>
                  <span>签收人：{{k.signer}}</span>
                  <span>本人如有疑问请电联</span>
                  <span>{{k.signerPhone}}</span>
                  <span>{{k.signerSpecialPlane}}</span>
                  <div class="mgT1 pd2 colorGray">{{k.dateTime}}</div>
                </div>
              </div>
            </el-col>
            <el-col :span="1" :offset="1">
              <div class="logisticsMoreIcon">
                <i class="el-icon-arrow-right"></i>
              </div>
            </el-col>
          </el-col>

          <el-col :span="22" :offset="1" class="pd4">
            <el-col :span="2">
              <div class="detailsMainLogisticsIcon">
                <img src="../../../../static/testImg/user-site.png">
              </div>
            </el-col>
            <el-col :span="21" :offset="1">
              <el-col :span="16">
                <div class="detailsInfoConsignee">收货人：{{detailsInfo.consignee}}</div>
              </el-col>
              <el-col :span="8" class="text-alignRight">
                <div class="detailsInfoConsigneePhone">{{detailsInfo.consigneePhone}}</div>
              </el-col>
              <el-col class="detailsInfoPlaceOfReceipt pd2 lh1-2 colorGray">
                {{detailsInfo.placeOfReceipt}}
              </el-col>
            </el-col>
          </el-col>

        </el-col>
      </el-row>
      <el-row class="brB10 pdB2" v-for="o in detailsInfo.listArray">
        <el-col :span="22" :offset="1">
          <el-col class="pd2 text-alignRight">{{o.stateText}}</el-col>
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
                <el-col :span="16" :offset="8">共{{o.amount}}件商品 合计：{{o.price}}</el-col>
              </el-col>
            </el-row>
            <el-row class="orderFormBtnRow">
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='待付款'">
                <el-button round @click="btnCancellationOrder = true">取消订单</el-button>
                <el-button round class="bgUndertintYellow colorWhite brR1" @click="btnPaymentOrder = true">付款
                </el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='待收货'">
                <el-button round @click="btnLogisticsTrackingOrder = true">物流追踪</el-button>
                <el-button round class="bgUndertintYellow colorWhite brR1" @click="btnConfirmReceiptOrder = true">确认收货
                </el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='退款/退货'">
                <el-button round @click="btnBackOrder = true">退款/退货</el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='交易关闭'">
                <el-button round @click="btnCancelOrder = true">删除订单</el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='交易成功'">
                <el-button round @click="btnLogisticsTrackingOrder = true">物流追踪</el-button>
                <el-button round @click="btnCancelOrder = true">删除订单</el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='退款成功'">
                <el-button round @click="btnCancelOrder = true">删除订单</el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='退款中'">
                <el-button round @click="btnCancelOrder = true">删除订单</el-button>
                <el-button round @click="btnForfeiturePayment = true">取消付款</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="detailsPaymentInfo" :span="22" :offset="1">
          <el-col class="pd2 mgTB2 brB1">
            <el-col :span="16">商品总额</el-col>
            <el-col :span="8" class="text-alignRight">¥{{detailsInfo.totalAmount}}</el-col>
          </el-col>
          <el-col class="pd2 brB1">
            <el-col :span="16">运费</el-col>
            <el-col :span="8" class="text-alignRight">¥{{detailsInfo.transportationExpense}}</el-col>
          </el-col>
          <el-col class="pd2 orderInfo">
            <div class="pd2 infoText colorGray">订单编号：{{detailsInfo.orderNum}}</div>
            <div class="pd2 infoText colorGray">下单时间：{{detailsInfo.orderTime}}</div>
            <div class="pd2 infoText colorGray">支付方式：{{detailsInfo.patternOfPayment}}</div>
          </el-col>
          <el-col class="pd8">
            <el-col :span="8" :offset="16">
              <span>应付总额</span>
              <span class="text-alignRight">¥{{detailsInfo.copeWithPrice}}</span>
            </el-col>
          </el-col>
          <el-col class="pd8 orderFormDeatilsBtn text-alignRight">
            <el-button round @click="btnDetailsCancelOrder = true">查看物流</el-button>
            <el-button round @click="btnDetailsForfeiturePayment = true" class="bgUndertintYellow colorWhite brR1">确认收货
            </el-button>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-dialog title="取消订单" :visible.sync="btnCancellationOrder" width="100%" :before-close="handleClose" top="50%">
          <span>这是取消订单</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnCancellationOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnCancellationOrder = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="付款" :visible.sync="btnPaymentOrder" width="100%" :before-close="handleClose" top="50%">
          <span>这是订单付款</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnPaymentOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnPaymentOrder = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="退款/退货" :visible.sync="btnBackOrder" width="100%" :before-close="handleClose" top="50%">
          <span>这是订单退款/退货</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnBackOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnBackOrder = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="退款/退货" :visible.sync="btnLogisticsTrackingOrder" width="100%" :before-close="handleClose"
          top="50%">
          <span>这是订单物流追踪</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnLogisticsTrackingOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnLogisticsTrackingOrder = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="确认收货" :visible.sync="btnConfirmReceiptOrder" width="100%" :before-close="handleClose"
          top="50%">
          <span>这是订单确认收货</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnConfirmReceiptOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnConfirmReceiptOrder = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="删除订单" :visible.sync="btnCancelOrder" width="100%" :before-close="handleClose" top="50%">
          <span>这是订单删除</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnCancelOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnCancelOrder = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="取消付款" :visible.sync="btnForfeiturePayment" width="100%" :before-close="handleClose" top="50%">
          <span>这是订单删除</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnForfeiturePayment = false">取 消</el-button>
            <el-button type="primary" @click="btnForfeiturePayment = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="退款/退货" :visible.sync="btnDetailsCancelOrder" width="100%" :before-close="handleClose"
          top="50%">
          <span>这是订单物流追踪</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnDetailsCancelOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnDetailsCancelOrder = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="确认收货" :visible.sync="btnDetailsForfeiturePayment" width="100%" :before-close="handleClose"
          top="50%">
          <span>这是订单确认收货</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnDetailsForfeiturePayment = false">取 消</el-button>
            <el-button type="primary" @click="btnDetailsForfeiturePayment = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-row>
    </el-main>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
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
        logisticsDynamicArray: [
          {
            logisticsCity: "哈尔滨",
            department: "分部",
            signer: "小明",
            signerPhone: "15124550264",
            signerSpecialPlane: "0451-82896542",
            dateTime: "2019-03-05  06:18:12"
          }
          //  { logisticsCity: '哈尔滨南岗区', department: '分部', signer: '分部签收', signerPhone: '15524550264',signerSpecialPlane: '0451-82896542' } ,
          //  { logisticsCity: '天津', department: '转部', signer: '签收', signerPhone: '13124550264',signerSpecialPlane: '0451-82896542' }
        ],
        consignee: "张三",
        consigneePhone: "18536790386",
        placeOfReceipt:
          "收货地址：上海上海市浦东新区张江镇路上海上海市浦东新区 张江镇路368号39号楼233室",
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
