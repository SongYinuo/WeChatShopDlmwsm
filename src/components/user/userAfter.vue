<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      退款/售后
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
              <li class="fl text-alignCenter pd2">待收货</li>
            </router-link>
            <!-- <router-link :to="{ name: '退款/售后' }">
              <li class="fl text-alignCenter pd2 activeLi">退款</li>
            </router-link> -->
          </ul>
        </el-col>
      </el-row>
      <el-row class="brB10 pdB2" v-for="(o,inex) in allOrderForm.listArray" style="display: none">
        <el-col :span="22" :offset="1">
          <el-col class="pd2 text-alignRight">{{o.stateText}}</el-col>
          <el-col :span="6" class="userAllOrderFormListImg">
            <router-link :to="{ name: '详情页', params: { id: o.id } }">
              <img :src="o.productImg">
            </router-link>
          </el-col>
          <el-col :span="17" :offset="1" class="pdLR1">
            <el-row>
              <router-link :to="{ name: '订单详情', params: { id: o.orderFormId } } ">
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
                  <!-- <div class="refundText colorYellow text-alignRight pdT1" v-if="o.state==='退款成功'">退款成功</div> -->
                </el-col>
                <el-col class="pd2">
                  <el-col :span="16" :offset="8">共{{o.amount}}件商品 合计：{{o.price}}</el-col>
                </el-col>
              </router-link>
            </el-row>
            <el-row class="orderFormBtnRow">
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.order_attr === '10'">
                <el-button round @click="deleste(inex)">删除订单</el-button>
                <el-button round @click="cancel(inex)">取消付款</el-button>
              </el-col>
            </el-row>
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
      allOrderForm: {
        label: "退款",
        name: "fifth",
        listArray: []
      }
    };
  },
  mounted() {
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
    cancel(inex) {
      const thir = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url:
          "/Api/order/order_cancle?order_id=" +
          thir.allOrderForm.listArray[inex].order_id
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
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url:
          "/Api/order/order_delete?order_id=" +
          thir.allOrderForm.listArray[inex].order_id
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
