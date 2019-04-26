<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      全部
    </el-header>
    <el-main class="userAllOrder">
      <el-row class="userAllOrderForm">
        <el-col class="tadsPage">
          <ul>
            <router-link :to="{ name: '全部' }">
              <li class="fl text-alignCenter pd2 activeLi">全部</li>
            </router-link>
            <router-link :to="{ name: '待付款' }">
              <li class="fl text-alignCenter pd2">待付款</li>
            </router-link>
            <router-link :to="{ name: '待发货' }">
              <li class="fl text-alignCenter pd2">待发货</li>
            </router-link>
            <router-link :to="{ name: '待收货' }">
              <li class="fl text-alignCenter pd2">待收货</li>
            </router-link>
            <router-link :to="{ name: '退款/售后' }">
              <li class="fl text-alignCenter pd2">退款</li>
            </router-link>
          </ul>
        </el-col>
      </el-row>
      <el-row class="brB10 pdB2" v-for="o in allOrderForm.listArray">
        <el-col :span="22" :offset="1">
          <el-col class="pd2 text-alignRight">{{o.stateText}}</el-col>
          <el-col :span="6" class="userAllOrderFormListImg">
            <router-link :to="{ name: '详情页', params: { id: o.id } }">
              <img :src="o.productImg">
            </router-link>
          </el-col>
          <el-col :span="17" :offset="1" class="pdLR1">
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
      allOrderForm: {
        label: "全部",
        name: "first",
        listArray: [
          {
            id: "userOrderForm100001",
            productImg: "static/testImg/oringe-2.jpg",
            title: "【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 402,
            amount: 1,
            state: "待付款",
            stateText: "待付款"
          },
          {
            id: "userOrderForm100002",
            productImg: "static/testImg/product-details01-3.jpg",
            title: "1【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 403,
            amount: 1,
            state: "退款/退货",
            stateText: "已付款"
          },
          {
            id: "userOrderForm100003",
            productImg: "static/testImg/photo1.jpg",
            title: "2【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "1鹰雕像",
            price: 140,
            amount: 1,
            state: "待收货",
            stateText: "已发货"
          },
          {
            id: "userOrderForm100004",
            productImg: "static/testImg/pig01.jpg",
            title: "3【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "1鹰雕像",
            price: 130,
            amount: 1,
            state: "交易关闭",
            stateText: "交易关闭"
          },
          {
            id: "userOrderForm100005",
            productImg: "static/testImg/productTestImg.png",
            title: "4【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "1鹰雕像",
            price: 440,
            amount: 1,
            state: "交易成功",
            stateText: "交易成功"
          },
          {
            id: "userOrderForm100006",
            productImg: "static/testImg/vegetables-1.jpg",
            title: "5【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "1鹰雕像",
            price: 540,
            amount: 1,
            state: "退款成功",
            stateText: "交易关闭"
          },
          {
            id: "userOrderForm100007",
            productImg: "static/testImg/corn1.jpg",
            title: "6【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "1鹰雕像",
            price: 640,
            amount: 1,
            state: "退款中",
            stateText: "退款中"
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
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";

.el-main {
  padding: 0;

  .userAllOrder {
    .userAllOrderForm {
      .el-tabs__item {
        padding: 0 10px;
        width: 20%;
        text-align: center;
      }

      .el-tabs__nav {
        width: 100%;
      }

      .el-tabs__nav-prev {
        display: none;
      }

      .el-tabs__nav-next {
        display: none;
      }

      .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        padding: 0 10px;
      }

      .el-tabs--top .el-tabs__item.is-top:last-child {
        padding: 0 10px;
      }
    }
  }
}
</style>
