
<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
     交易中心栏目列表
    </el-header>

    <div class="listnav">
      <el-row>
        <img :src="lists.listUrl" class="listimg">
        <el-col :span="22" :offset="1">

          <el-col :span="12" v-for="k in lists.listArray" class="listLi text-alignLeft">

            <router-link :to="{ name:'详情页',query: { id: k.id }}">
              <img :src="k.iconurl" class="pdB2">
              <div class="listTxt pd1">{{k.text}}</div>
              <div class="colorRed price text-alignLeft">￥{{k.num}}</div>
              <el-col :span="24">
                <el-button plain class="pdTRBL1">立即购买</el-button>
              </el-col>
            </router-link>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        lists: {
          listUrl: "static/testImg/banner01.png",
          listArray: [
            {
              iconurl: "static/testImg/product-details01-2.jpg",
              text: "万年古董珍藏 价值连城",
              num: "110",
              id: "10000"
            },
            {
              iconurl: "static/testImg/product-details01-2.jpg",
              text: "万年古董珍藏 价值连城",
              num: "110",
              id: "10001"
            },
            {
              iconurl: "static/testImg/product-details01-2.jpg",
              text: "万年古董珍藏 价值连城",
              num: "110",
              id: "10002"
            },
            {
              iconurl: "static/testImg/product-details01-2.jpg",
              text: "万年古董珍藏 价值连城",
              num: "110",
              id: "10003"
            },
            {
              iconurl: "static/testImg/product-details01-2.jpg",
              text: "万年古董珍藏 价值连城",
              num: "110",
              id: "10004"
            }
          ],
        }
      };
    }
  };
</script>
<style lang="less">
  @import "../../assets/index/style.less";
  @import "../../assets/header.less";
  @import "../../assets/list/list.less";
</style>