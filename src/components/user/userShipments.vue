<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      待发货
    </el-header>
    <el-main class="userAllOrder">
      <el-row class="userAllOrderForm">
        <el-col class="tadsPage">
          <ul>
            <router-link :to="{ name: '全部' }">
              <li class="fl text-alignCenter pd2">全部</li>
            </router-link>
            <router-link :to="{ name: '待付款' }">
              <li class="fl text-alignCenter pd2">待付款</li>
            </router-link>
            <router-link :to="{ name: '待发货' }">
              <li class="fl text-alignCenter pd2 activeLi">待发货</li>
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
        <el-dialog title="退款/退货" :visible.sync="btnBackOrder" width="100%" :before-close="handleClose" top="50%">
          <span>这是订单退款/退货</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="btnBackOrder = false">取 消</el-button>
            <el-button type="primary" @click="btnBackOrder = false">确 定</el-button>
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
      btnBackOrder: false,
      allOrderForm: {
        label: "待发货",
        name: "third",
        listArray: [
          {
            id: "userOrderForm300001",
            productImg: "static/testImg/product-details01-3.jpg",
            title: "【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 402,
            amount: 1,
            state: "退款/退货"
          },
          {
            id: "userOrderForm300002",
            productImg: "static/testImg/product-details01-3.jpg",
            title: "1【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 102,
            amount: 1,
            state: "退款/退货"
          },
          {
            id: "userOrderForm300003",
            productImg: "static/testImg/product-details01-3.jpg",
            title: "2【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 202,
            amount: 1,
            state: "退款/退货"
          },
          {
            id: "userOrderForm300004",
            productImg: "static/testImg/product-details01-3.jpg",
            title: "3【夢工房】龍文堂 造 岩口道安形 鉄瓶 身縦銘　ZZ-3",
            specificationSize: "50cm*80cm",
            specificationShape: "鹰雕像",
            price: 302,
            amount: 1,
            state: "退款/退货"
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
}
</style>
