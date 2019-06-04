<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      支持大学生创业
    </el-header>
    <el-main class="undergraduateBusinesRow">
      <el-row>
        <el-col :span="22" :offset="1">
          <div class="lh1-2 letterSpacing1 pd2 textIndent2-8 img1" v-html="undergraduateBusinessDetails.content">
            {{undergraduateBusinessDetails.content}}
          </div>
          <div class="detailsImg pd1 ">
            <img :src="undergraduateBusinessDetails.thumb">
          </div>
        </el-col>
        <el-col :span="22" :offset="1" class="pd2">
          <router-link :to="{ name: '顺格格'}">
            <el-button plain class="joinIn">我也要加入</el-button>
          </router-link>
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
      undergraduateBusinessDetails: {}
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    getImg() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Index/college_student?"
      })
        .then(function(res) {
          that.undergraduateBusinessDetails = res.data.data;
        })
        .catch(function(error) {});
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

.undergraduateBusinesRow {
  .fz(font-size, 24);
  color: #313131;

  .joinIn {
    width: 100%;
    background-color: #dab62e;
    color: #fff;
    .fz(font-size, 34);
    border: none;
  }

  .detailsImg img {
    width: 100%;
  }

  .img1 img {
    width: 100%;
    margin-left: -8%;
  }
}
</style>
