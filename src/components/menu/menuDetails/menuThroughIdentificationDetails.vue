<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      已发布-鉴定
    </el-header>
    <el-row class="Identification">
      <el-col :span="22" :offset="1">
        <div v-for="item in items">
          <img :src="item.photoUrl" class="photo">
          <div class="text pdT6 pdB3">{{item.text}}</div>
          <div class="text pdT3 pdB3">{{item.txt}}</div>
          <div class="text pdT3 pdB3">{{item.num}}</div>
          <div class="text pdT3 pdB3">{{item.paragraph}}</div>
        </div>
        <el-button @click="prev()">删除</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          photoUrl: "static/testImg/secondCompany.png",
          text: "红山玉",
          txt: "高雅丽",
          num: "17603606917",
          paragraph:
            "爷爷的爷爷的爷爷辈的，一直传承下来的，因家里 需要急需钱，所以需要变卖，寻求有缘人，希望平台可以帮忙发布拍卖。"
        }
      ]
    };
  },
  methods: {
    prev() {
      this.$router.go(-1);
      console.log("删除")
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/indexSwiper.less";
@import "../../../assets/header.less";
@import "../../../assets/index/style.less";
@import "../../../assets/menu/details.less";
@import "../../../assets/fz.less";
</style>