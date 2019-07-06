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
              <li class="fl text-alignCenter pd2">待支付</li>
            </router-link>
            <router-link :to="{ name: '待发货' }">
              <li class="fl text-alignCenter pd2">待发货</li>
            </router-link>
            <router-link :to="{ name: '待收货' }">
              <li class="fl text-alignCenter pd2">待收货</li>
            </router-link>
            <!-- <router-link :to="{ name: '退款/售后' }">
              <li class="fl text-alignCenter pd2">退款</li>
            </router-link> -->
          </ul>
        </el-col>
      </el-row>
      <el-row class="brB10 pdB2" v-for="(o,inex) in allOrderForm.listArray">
        <el-col :span="22" :offset="1" class="pd1">
          <el-col class="pd2 text-alignRight">{{o.order_attr_name}}</el-col>
          <el-col :span="6" class="userAllOrderFormListImg">
            <router-link :to="{ name: '详情页', params: { id: i.goods_id } }" v-for="i in o.goods_list">
              <img :src="i.thumb" style="margin-bottom:8px;">
            </router-link>
          </el-col>
          <el-col :span="17" :offset="1" class="pdLR1">
            <el-row>
              <router-link :to="{ name: '订单详情', params: { id: o.order_id }}">
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
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.order_attr === '1'">
                <el-button round @click="cancel(inex)">取消订单</el-button>
                <el-button round class="bgUndertintYellow colorWhite brR1" @click="payment(inex)">付款</el-button>
                <!-- <router-link :to="{ name: '购物车详情' }">
                  <el-button round class="bgUndertintYellow colorWhite brR1">付款</el-button>
                </router-link> -->
              </el-col>     
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.order_attr ==='3'">
                 <router-link
                   :to="{ name: '订单详情', params: { id: o.goods_list[0].order_id } }">
                  <el-button round>物流追踪</el-button>
                 </router-link>
                <el-button round class="bgUndertintYellow colorWhite" @click="affirm(inex)">确认收货
                </el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.order_attr ==='2'">
                <!-- <el-button round @click="btnBackOrder = true">退款/退货</el-button> -->
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.order_attr==='4'">
                <el-button round @click="deleste(inex)">删除订单</el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.order_attr==='5'">
                <!-- <el-button round>物流追踪</el-button> -->
                <router-link
                   :to="{ name: '订单详情', params: { id: o.goods_list[0].order_id } }">
                  <el-button round>物流追踪</el-button>
                 </router-link>
                <el-button round @click="deleste(inex)">删除订单</el-button>
              </el-col>
              <!-- <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='退款成功'">
                <el-button round>删除订单</el-button>
              </el-col>
              <el-col class="pd2 orderFormBtn text-alignRight" v-if="o.state==='退款中'">
                <el-button round>删除订单</el-button>
                <el-button round>取消付款</el-button>
              </el-col> -->
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
  inject: ["reload"],
  data() {
    return {
      allOrderForm: {
        label: "全部",
        name: "first",
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
    },
    affirm(inex) {
      const thir = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url:
          "/Api/order/order_confirm?order_id=" +
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
    payment(inex) {
      const thir = this;
      axios
        .get(
          "/Api/Payment/order_pay?order_id=" +
            thir.allOrderForm.listArray[inex].order_id
        )
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
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";

.el-main {
  padding: 0;

  .userAllOrder {
    .userAllOrderForm {
      .el-tabs__item {
        padding: 0 10px;
        width: 25%;
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
