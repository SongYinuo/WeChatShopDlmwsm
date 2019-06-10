<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      排名信息
    </el-header>
    <el-main class="companyRank">
      <el-row class="companyRankRow pd2" v-for="(k,index) in companyRanksArray">
        <el-col :span="22" :offset="1" class="brB1 pdB3">
          <el-col :span="6" class="companyRankRowImgLogo">
            <img :src="k.thumb">
          </el-col>
          <span class="companyRanksIcon">
            <img src="../../../static/testImg/first.png" v-if="index == 0">
            <img src="../../../static/testImg/second.png" v-if="index == 1">
            <img src="../../../static/testImg/thirdly.png" v-if="index == 2">
          </span>
          <router-link :to="{ name: '公司排名详情', query: { id: k.article_id } }">
            <el-col :span="17" :offset="1" class="companyText">
              <div class="companyName overHidden lh1-6 pdT1" v-html="k.title">{{k.title}}</div>
              <div class="companyCaption colorGray mgT1 img1" v-html="k.content">{{k.content}}</div>
            </el-col>
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
      companyRanksArray: []
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    getImg() {
      const that = this;
      axios
        .get("/Api/Index/company_sort?size=12")
        .then(function(res) {
          that.companyRanksArray = res.data.data;
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

.companyRank {
  .companyRankRow {
    .companyRankRowImgLogo {
      img {
        width: 100%;
        border-radius: 8px;
        height: 80px;
      }
    }

    .companyRanksIcon {
      position: absolute;
      top: 12px;
      left: 20px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .companyText {
    .companyName {
      .fz(font-size, 32);
      font-weight: 600;
    }

    .companyCaption {
      .fz(font-size, 28);
    }

    .img1 img {
      width: 100%;
    }
  }
}
</style>
