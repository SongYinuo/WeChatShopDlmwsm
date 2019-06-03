<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{datas.name}}
    </el-header>
    <el-row class="mianMo">
    <el-main class="menuShunPrincess">
      <el-row>
        <el-col class="shunPrincessAdvertising">
          <img :src="datas.image">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-col>
            <div class="tabMore" @click="dialogShow = true">更多</div>
          </el-col>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="k.mobile_name" :name="k.name" v-for="(k, index) in tabs">
              <el-row v-for="o in k.sub_menu">
                <el-row>
                  <el-col :span="24">
                    <div class="maskHeaderTitle pd4 colorBlack text-alignCenter bgCfff">{{o.name}}</div>
                    <el-col class="listRome fr" :span="6" v-if="index<6">
                      <router-link :to="{ name: '更多列表'}">
                        查看更多
                        <i class="el-icon-arrow-right"></i>
                      </router-link>
                    </el-col>
                  </el-col>
                </el-row>
                <el-row class="rows">
                  <el-col :span="8" v-for="q in o.goods_list" :key="o.goods_id"
                    class="ShunPrincessRow bgCBlue pdTRBL1">
                    <router-link :to="{ name: '详情页',query: { id: q.goods_id,title:q.goods_name }}">
                      <div class="bgCfff pdTRBL1">
                        <img :src="q.original_img">
                        <div class="shunPrincessProductTitle pd2">{{q.goods_name}}</div>
                        <div class="shunPrincessProductPrice pdB2 colorRed">¥{{q.shop_price}}</div>
                      </div>
                    </router-link>
                  </el-col>
                </el-row>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
     <el-dialog title="分类" :visible.sync="dialogShow" width="70%" top="0">
        <el-row>
          <el-col :span="22" :offset="1" class="pd2 text-alignLeft brB1"
            v-for="(l, index) in texts.tmenu">
            <router-link :to="{ name: 'tab栏目分类',query: { id: l.id,title:l.name }}">
              <el-col :span="18">{{l.mobile_name}}</el-col>
              <el-col :span="6" class="text-alignRight"><i class="el-icon-arrow-right"></i></el-col>
            </router-link>
          </el-col>
        </el-row>
      </el-dialog>
    </el-main>
    </el-row>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogShow: false,
      activeName: "面膜",
      datas: [
        
        // menuClassify: {
        //   menuName: "顺格格",
        //   headerUrlImg: "../../../static/testImg/banner01.png",
        //   menuSubsetClassify: [
        //     {
        //       menuSubsetName: "面膜",
        //       label: "面膜",
        //       name: "mianmo",
        //       menuSubsetId: "menuSixIdA1000001",
        //       active: true,
        //       grandsonArray: [
        //         {
        //           title: "顺格格面膜",
        //           grandsonId: "menuSixGrandsonId1000001",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "ShunGG00001",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备1",
        //               price: 124
        //             },
        //             {
        //               id: "ShunGG00002",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备2",
        //               price: 125
        //             },
        //             {
        //               id: "ShunGG00003",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备3",
        //               price: 126
        //             },
        //             {
        //               id: "ShunGG00004",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备4",
        //               price: 127
        //             },
        //             {
        //               id: "ShunGG00005",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备5",
        //               price: 128
        //             },
        //             {
        //               id: "ShunGG00006",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备6",
        //               price: 129
        //             },
        //             {
        //               id: "ShunGG00007",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备7",
        //               price: 130
        //             },
        //             {
        //               id: "ShunGG00008",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备8",
        //               price: 131
        //             }
        //           ]
        //         },
        //         {
        //           title: "寡肽原液面膜",
        //           grandsonId: "menuSixGrandsonId1000002",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "YuanYemianmo0000001",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备11",
        //               price: 224
        //             },
        //             {
        //               id: "YuanYemianmo0000002",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备12",
        //               price: 225
        //             },
        //             {
        //               id: "YuanYemianmo0000003",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备13",
        //               price: 226
        //             },
        //             {
        //               id: "YuanYemianmo0000004",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备14",
        //               price: 227
        //             },
        //             {
        //               id: "YuanYemianmo0000005",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备15",
        //               price: 228
        //             },
        //             {
        //               id: "YuanYemianmo0000006",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备16",
        //               price: 229
        //             },
        //             {
        //               id: "YuanYemianmo0000007",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备17",
        //               price: 230
        //             },
        //             {
        //               id: "YuanYemianmo0000008",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备18",
        //               price: 231
        //             }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       menuSubsetName: "饰品",
        //       label: "饰品",
        //       name: "shipin",
        //       menuSubsetId: "menuSixIdA1000001",
        //       active: "active",
        //       grandsonArray: [
        //         {
        //           title: "饰品",
        //           grandsonId: "menuSixGrandsonId1000001",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "ShunGG00001",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备1",
        //               price: 124
        //             },
        //             {
        //               id: "ShunGG00002",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备2",
        //               price: 125
        //             },
        //             {
        //               id: "ShunGG00003",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备3",
        //               price: 126
        //             },
        //             {
        //               id: "ShunGG00004",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备4",
        //               price: 127
        //             },
        //             {
        //               id: "ShunGG00005",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备5",
        //               price: 128
        //             },
        //             {
        //               id: "ShunGG00006",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备6",
        //               price: 129
        //             },
        //             {
        //               id: "ShunGG00007",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备7",
        //               price: 130
        //             },
        //             {
        //               id: "ShunGG00008",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备8",
        //               price: 131
        //             }
        //           ]
        //         },
        //         {
        //           title: "寡肽原液饰品",
        //           grandsonId: "menuSixGrandsonId1000002",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "YuanYemianmo0000001",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "饰品-时尚走 秀必备11",
        //               price: 224
        //             },
        //             {
        //               id: "YuanYemianmo0000002",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "饰品-时尚走 秀必备12",
        //               price: 225
        //             },
        //             {
        //               id: "YuanYemianmo0000003",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "饰品-时尚走 秀必备13",
        //               price: 226
        //             },
        //             {
        //               id: "YuanYemianmo0000004",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备14",
        //               price: 227
        //             },
        //             {
        //               id: "YuanYemianmo0000005",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备15",
        //               price: 228
        //             },
        //             {
        //               id: "YuanYemianmo0000006",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备16",
        //               price: 229
        //             },
        //             {
        //               id: "YuanYemianmo0000007",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备17",
        //               price: 230
        //             },
        //             {
        //               id: "YuanYemianmo0000008",
        //               url: "static/testImg/product-details01-3.jpg",
        //               title: "顺格格面膜-时尚走 秀必备18",
        //               price: 231
        //             }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       menuSubsetName: "衣衫",
        //       label: "衣衫",
        //       name: "yishan",
        //       menuSubsetId: "menuSixIdA1000001",
        //       active: "active",
        //       grandsonArray: [
        //         {
        //           title: "衣衫",
        //           grandsonId: "menuSixGrandsonId1000001",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "ShunGG00001",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "衣衫-时尚走 秀必备1",
        //               price: 124
        //             },
        //             {
        //               id: "ShunGG00002",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "衣衫-时尚走 秀必备2",
        //               price: 125
        //             },
        //             {
        //               id: "ShunGG00003",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备3",
        //               price: 126
        //             },
        //             {
        //               id: "ShunGG00004",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备4",
        //               price: 127
        //             },
        //             {
        //               id: "ShunGG00005",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "衣衫-时尚走 秀必备5",
        //               price: 128
        //             },
        //             {
        //               id: "ShunGG00006",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备6",
        //               price: 129
        //             },
        //             {
        //               id: "ShunGG00007",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备7",
        //               price: 130
        //             },
        //             {
        //               id: "ShunGG00008",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "顺格格面膜-时尚走 秀必备8",
        //               price: 131
        //             }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       menuSubsetName: "口红",
        //       label: "口红",
        //       name: "kouhong",
        //       menuSubsetId: "menuSixIdA1000001",
        //       active: "active",
        //       grandsonArray: [
        //         {
        //           title: "口红",
        //           grandsonId: "menuSixGrandsonId1000001",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "ShunGG00001",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "口红-时尚走 秀必备1",
        //               price: 124
        //             },
        //             {
        //               id: "ShunGG00002",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "口红-时尚走 秀必备2",
        //               price: 125
        //             },
        //             {
        //               id: "ShunGG00003",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "口红-时尚走 秀必备3",
        //               price: 126
        //             },
        //             {
        //               id: "ShunGG00004",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备4",
        //               price: 127
        //             },
        //             {
        //               id: "ShunGG00005",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "口红-时尚走 秀必备5",
        //               price: 128
        //             },
        //             {
        //               id: "ShunGG00006",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备6",
        //               price: 129
        //             },
        //             {
        //               id: "ShunGG00007",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备7",
        //               price: 130
        //             },
        //             {
        //               id: "ShunGG00008",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "口红-时尚走 秀必备8",
        //               price: 131
        //             }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       menuSubsetName: "包包",
        //       label: "包包",
        //       name: "baobao",
        //       menuSubsetId: "menuSixIdA1000001",
        //       active: "active",
        //       grandsonArray: [
        //         {
        //           title: "包包",
        //           grandsonId: "menuSixGrandsonId1000001",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "ShunGG00001",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "口红-时尚走 秀必备1",
        //               price: 124
        //             },
        //             {
        //               id: "ShunGG00002",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "包包-时尚走 秀必备2",
        //               price: 125
        //             },
        //             {
        //               id: "ShunGG00003",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "口红-时尚走 秀必备3",
        //               price: 126
        //             },
        //             {
        //               id: "ShunGG00004",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备4",
        //               price: 127
        //             },
        //             {
        //               id: "ShunGG00005",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "包包-时尚走 秀必备5",
        //               price: 128
        //             },
        //             {
        //               id: "ShunGG00006",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备6",
        //               price: 129
        //             },
        //             {
        //               id: "ShunGG00007",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "包包-时尚走 秀必备7",
        //               price: 130
        //             },
        //             {
        //               id: "ShunGG00008",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "包包-时尚走 秀必备8",
        //               price: 131
        //             }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       menuSubsetName: "食品",
        //       label: "食品",
        //       name: "shipina",
        //       menuSubsetId: "menuSixIdA1000001",
        //       active: "active",
        //       grandsonArray: [
        //         {
        //           title: "食品",
        //           grandsonId: "menuSixGrandsonId1000001",
        //           mianmoShunPrincessArray: [
        //             {
        //               id: "ShunGG00001",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "食品-时尚走 秀必备1",
        //               price: 124
        //             },
        //             {
        //               id: "ShunGG00002",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "食品-时尚走 秀必备2",
        //               price: 125
        //             },
        //             {
        //               id: "ShunGG00003",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "食品-时尚走 秀必备3",
        //               price: 126
        //             },
        //             {
        //               id: "ShunGG00004",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "饰品-时尚走 秀必备4",
        //               price: 127
        //             },
        //             {
        //               id: "ShunGG00005",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "包包-时尚走 秀必备5",
        //               price: 128
        //             },
        //             {
        //               id: "ShunGG00006",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "食品-时尚走 秀必备6",
        //               price: 129
        //             },
        //             {
        //               id: "ShunGG00007",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "包包-时尚走 秀必备7",
        //               price: 130
        //             },
        //             {
        //               id: "ShunGG00008",
        //               url: "static/testImg/product-details01.jpg",
        //               title: "食品-时尚走 秀必备8",
        //               price: 131
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // }
     ],
     tabs:[],
     texts:[],
    };
  },
  mounted(){
  this.getText();
  this.getData();
  this.getImg();
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getText(){
     const that = this;
     axios
      .get("/Api/Goods/goods_channel_list?cat_id=846")
      .then(function(res){
        console.log(res.data.data.channel_list);
        that.datas = res.data.data.cat_data;
      })  .catch(function(error){
          // console.log(error)
        });   

    },getData(){
     const that = this;
     axios
      .get("/Api/Goods/goods_channel_list?cat_id=846")
      .then(function(res){
        console.log(res.data.data.channel_list.tmenu);
        that.tabs = res.data.data.channel_list.tmenu;
      })  .catch(function(error){
          // console.log(error)
        });   

    },getImg(){
     const that = this;
     axios
      .get("/Api/Goods/goods_channel_list?cat_id=846")
      .then(function(res){
        console.log(res.data.data.channel_list);
        that.texts = res.data.data.channel_list;
      })  .catch(function(error){
          // console.log(error)
        });   

    }
  }
};
</script>
<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
</style>
