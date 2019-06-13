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
                        <router-link :to="{ name: '更多列表',query: { id: o.id,title:o.name } }">
                          查看更多
                          <i class="el-icon-arrow-right"></i>
                        </router-link>
                      </el-col>
                    </el-col>
                  </el-row>
                  <el-row class="rows">
                    <el-col :span="8" v-for="q in o.goods_list" :key="o.goods_id"
                      class="ShunPrincessRow bgCBlue pdTRBL1">
                      <router-link :to="{ name: '详情页',params: { id: q.goods_id,title:q.goods_name }}">
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
            <el-col :span="22" :offset="1" class="pd2 text-alignLeft brB1" v-for="(l, index) in texts.tmenu">
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
      datas: [],
      tabs: [],
      texts: []
    };
  },
  mounted() {
    this.getText();
    this.getData();
    this.getImg();
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getText() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Goods/goods_channel_list?cat_id=846"
      })
        .then(function(res) {
          that.datas = res.data.data.cat_data;
        })
        .catch(function(error) {
          // console.log(error)
        });
    },
    getData() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Goods/goods_channel_list?cat_id=846"
      })
        .then(function(res) {
          that.tabs = res.data.data.channel_list.tmenu;
        })
        .catch(function(error) {
          // console.log(error)
        });
    },
    getImg() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Goods/goods_channel_list?cat_id=846"
      })
        .then(function(res) {
          that.texts = res.data.data.channel_list;
        })
        .catch(function(error) {
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
