<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{detailsInfo.title}}
    </el-header>
    <el-main class="detailsInfo">
      <el-row>
        <el-col :span="24" class="detailsInfoText lh1-8 textIndent2-8 img1" v-html="detailsInfo.content">
          <el-col>
          {{detailsInfo.article_id}}-{{detailsInfo.content}}
          </el-col>
        </el-col>
        <!-- <el-col class="detailsInfoImg mgTB2">
          <img :src="detailsInfo.thumb">
        </el-col> -->
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      detailsInfo: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var newId = this.$route.params.id;
      const that = this;
      axios
        .get("/Api/Index/company_detail?article_id=" + newId)
        .then(function(res) {
          that.detailsInfo = res.data.data;
        })
        .catch(function(error) {});
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/index/style.less";
@import "../../assets/header.less";

.el-main {
  padding: 0;
}

.detailsInfo {
  .detailsInfoText {
    // width: 100%;
    .fz(font-size, 28);
  }

  // .detailsInfoText div span p {
  //   width: 100%;
  // }

  .detailsInfoText p {
    width: 90%;
  }

  .detailsInfoImg {
    img {
      width: 100%;
    }
  }
}

.img1 img {
  width: 100%;
}

.img1 {
  margin-top: 17px;
  .fz(font-size, 24);
  color: #313131;
}
video {
  width: 80%;
}
</style>
