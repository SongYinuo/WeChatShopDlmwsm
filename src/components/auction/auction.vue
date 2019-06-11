<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        拍卖会
        </el-header>
        <el-main class="auctionRow pd2 mgB2">
            <el-row class="advertising">
                <el-col class="advertisingImg">
                    <img :src="auctionImg.thumb">
                </el-col>
            </el-row>
            <el-row>
              <el-col :span="22" :offset="1">
                <el-tabs v-model="auctionList.tabKey" >
                    <el-tab-pane v-for="k in auctionList.auctionAdvertisingArray" :label="k.label" :name="k.name"  v-if="k.label==='必抢爆款'">
                       <el-row class="productRow">
                             <el-col :span="22" :offset="1">
                                <el-col :span="8" class="productRowInfo pdLR1" v-for="o in auctionText[0]">
                                    <router-link :to="{ name: '详情页', params: { id: o.id } }">
                                        <img :src="o.goods_image">
                                        <div class="pd2 infoTilte bgCfff lh1-2">{{o.goods_name}}</div>
                                        <div class="colorRed bgCfff">¥{{o.goods_price}}</div>
                                     </router-link>
                                </el-col>
                            </el-col>
                        </el-row> 
                    </el-tab-pane>
                    <el-tab-pane v-for="k in auctionList.auctionAdvertisingArray" :label="k.label" :name="k.name" v-if="k.label==='万年古董'">
                       <el-row class="productRow">
                             <el-col :span="22" :offset="1">
                                <el-col :span="8" class="productRowInfo pdLR1" v-for="o in auctionTxt[1]">
                                    <router-link :to="{ name: '详情页', params: { id: o.id } }">
                                        <img :src="o.goods_image">
                                        <div class="pd2 infoTilte bgCfff lh1-2">{{o.goods_name}}</div>
                                        <div class="colorRed bgCfff">¥{{o.goods_price}}</div>
                                     </router-link>
                                </el-col>
                            </el-col>
                        </el-row> 
                    </el-tab-pane>
                    <el-tab-pane v-for="k in auctionList.auctionAdvertisingArray" :label="k.label" :name="k.name" v-if="k.label==='人气爆品'">
                       <el-row class="productRow">
                             <el-col :span="22" :offset="1">
                                <el-col :span="8" class="productRowInfo pdLR1" v-for="(o,index) in auctionPopularity[2]">
                                    <router-link :to="{ name: '详情页', params: { id: o.id } }">
                                        <img :src="o.goods_image">
                                        <div class="pd2 infoTilte bgCfff lh1-2">{{o.goods_name}}</div>
                                        <div class="colorRed bgCfff">¥{{o.goods_price}}</div>
                                     </router-link>
                                </el-col>
                            </el-col>
                        </el-row> 
                    </el-tab-pane>
                    <el-tab-pane v-for="k in auctionList.auctionAdvertisingArray" :label="k.label" :name="k.name" v-if="k.label==='囤货必备'">
                       <el-row class="productRow">
                             <el-col :span="22" :offset="1">
                                <el-col :span="8" class="productRowInfo pdLR1" v-for="(o,index) in auctionStockpile[3]">
                                    <router-link :to="{ name: '详情页', params: { id: o.id } }">
                                        <img :src="o.goods_image">
                                        <div class="pd2 infoTilte bgCfff lh1-2">{{o.goods_name}}</div>
                                        <div class="colorRed bgCfff">¥{{o.goods_price}}</div>
                                     </router-link>
                                </el-col>
                            </el-col>
                        </el-row> 
                    </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      auctionList: {
        tabKey: "biqiangbaokuan",
        auctionAdvertisingArray: [
          {
            label: "必抢爆款",
            name: "biqiangbaokuan",
          },
           {
            label: "万年古董",
            name: "wanniangudong",
          },{
            label: "人气爆品",
            name: "renqibaopin",
          },{
            label: "囤货必备",
            name: "tunhuobibei",
          }

        ]
      },
      auctionImg:[],
      // banner图
      auctionText:[],
      // 必抢爆款
      auctionTxt:[],
      // 万年古董
      auctionPopularity:[],
      // 人气爆品
      auctionStockpile:[],
      // 囤货必备

    };
  },
 
  mounted(){
    this.getImg();
     // banner图
    this.getList();
     // 必抢爆款
    this.gettxt();
    // 万年古董
     this.getPopularity();
    // 人气爆品
     this.getStockpile();
    // 囤货必备

  },methods:{
    getImg(){
      var that = this;
      axios({
        methods:"get",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        url:"/Api/Index/auction_list"

      })
      .then(function(res){
        that.auctionImg=res.data.data.auction;
       
      })
    },
    getList(){
      var that = this;
      axios({
        methods: "get",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        url:"/Api/Index/auction_list"
      })
      .then(function(res){
        that.auctionText=res.data.data.goods_list;
      }).catch({})
    },
    gettxt(){
       var that = this;
      axios({
        methods: "get",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        url:"/Api/Index/auction_list"
      })
      .then(function(res){
        that.auctionTxt=res.data.data.goods_list;
      }).catch({})
    },
    getPopularity(){
       var that = this;
      axios({
        methods: "get",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        url:"/Api/Index/auction_list"
      })
      .then(function(res){
        that.auctionPopularity=res.data.data.goods_list;
      }).catch({})
    },
    getStockpile(){
      var that = this;
      axios({
        methods: "get",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        url:"/Api/Index/auction_list"
      })
      .then(function(res){
        that.auctionStockpile=res.data.data.goods_list;
      }).catch({})
    }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
.el-main {
  padding: 0;
}
.auctionRow {
 
  .el-tabs__active-bar {
    display: none;
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding: 0 20px;
  }
  .el-tabs__header {
    margin-bottom: 4px;
  }
  
  .el-tabs__item {
    width: 25%;
  }
  .el-tabs__nav {
    width: 100%;
  }
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding: 0 20px;
  }
  .el-tabs--top .el-tabs__item.is-top:last-child {
    padding: 0 20px;
  }
  .advertising {
    .advertisingImg {
      img {
         width: 100%;
      }
    }
  }
  .productRow {
    background-color: #f5f5f5;
    .productRowInfo {
      background-color: white;
      padding-bottom: 1vw;
      img {
        width: 100%;
      }
      .infoTilte {
        .fz(font-size, 28);
      }
    }
  }
  .el-tabs__item.is-active{
  color: #DAB62E;
}.el-tabs__active-bar{
    display: block;
    background-color:#DAB62E;
  }
  .el-tabs__active-bar {
    color: #ffc000;
    background-color: #ffc000;
    width: 55px !important;
}.el-tabs--top .el-tabs__item.is-top:nth-child(2){
  padding-left: 0;
}
}
</style>