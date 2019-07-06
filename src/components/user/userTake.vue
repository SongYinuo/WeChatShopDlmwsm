<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      待收货
    </el-header>
    <el-main class="userAllOrder">
      <el-row class="userAllOrderForm">
        <el-col class="tadsPage">
          <ul>
            <router-link :to="{ name: '全部' }">
              <li class="fl text-alignCenter pd2">全部</li>
            </router-link>
            <router-link :to="{ name: '待付款' }">
              <li class="fl text-alignCenter pd2">待支付</li>
            </router-link>
            <router-link :to="{ name: '待发货' }">
              <li class="fl text-alignCenter pd2">待发货</li>
            </router-link>
            <router-link :to="{ name: '待收货' }">
              <li class="fl text-alignCenter pd2 activeLi">待收货</li>
            </router-link>
            <!-- <router-link :to="{ name: '退款/售后' }">
              <li class="fl text-alignCenter pd2">退款</li>
            </router-link> -->
          </ul>
        </el-col>
      </el-row>
        <el-row v-for="(o,inex)  in allOrderForm.listArray">
        <el-col :span="22" :offset="1" v-if="o.order_attr === '3'" class="brB10 pdB2">
          <el-col class="pd2 text-alignRight">{{o.order_attr_name}}</el-col>
          <el-col :span="6" class="userAllOrderFormListImg">
            <router-link :to="{ name: '详情页', params: { id: o.id } }" v-for="i in o.goods_list">
              <img :src="i.thumb">
            </router-link>
          </el-col>
          <el-col :span="17" :offset="1" class="pdLR1">
            <el-row>
              <router-link :to="{ name: '订单详情', params: { id: o.order_id } }">
                <el-col v-for="(i,index) in o.goods_list" style="height: 80px;" class="pd2">
                <el-col :span="16" class="mgT1">
                  <div class="pd1 productTitle overHidden">{{i.goods_name}}</div>
                  <div class="overHidden">
                    <span class="colorGray productSpecification overHidden">{{i.spec_key_name}} <span v-if="i.spec_key_name!=''">;</span> </span>
                  </div>
                </el-col>
                <el-col :span="7" :offset="1" class="mgT2">
                  <div class="text-alignRight price">¥{{i.goods_price}}</div>
                  <div class="text-alignRight amount">x{{i.goods_num}}</div>
                  <!-- <div class="refundText colorYellow text-alignRight pdT1" v-if="o.state==='退款成功'">退款成功</div> -->
                </el-col>
                </el-col>
              </router-link>
             <el-col class="pd2">
                  <el-col class="text-alignRight">共{{o.count_goods_num}}件商品 合计：<span class="colorRed">{{o.total_amount}}</span></el-col>
               </el-col>
            </el-row>
            <el-row class="orderFormBtnRow">
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.order_attr ==='3'">
                <router-link :to="{ name: '订单详情', params: { id: o.order_id } }">
                    <el-button round>物流追踪</el-button>
                </router-link>
                <el-button round @click="affirm(inex)" class="bgUndertintYellow colorWhite brR1">确认收货
                </el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-row>
      <!-- <el-row>
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
      </el-row> -->
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  inject: ["reload"],
  data() {
    return {
      allOrderForm: {
        label: "待收货",
        name: "fourth",
        listArray: []
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const thir = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/order/order_list"
      })
        .then(function(res) {
          thir.allOrderForm.listArray = res.data.data;
        })
        .catch({});
    },
    affirm(inex) {
      const thir = this;
      const id = thir.allOrderForm.listArray[inex].order_id;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/order/order_confirm?order_id=" + id
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
