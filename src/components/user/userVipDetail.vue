<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-2)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-row class="Vip">
      <el-col :span="22" :offset="1">
        <el-col class="make">{{article_list.title}}</el-col>
        <el-col v-html="article_list.content" style="width:96%;margin-left:2%"></el-col>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "Vip详情",
      article_list: {}
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var that = this;
      var article_id = that.$route.params.article_id;
      axios
        .get("/Api/User/vip_detail?article_id=" + article_id)
        .then(function(res) {
          that.article_list = res.data.data;
        })
        .catch(function(error) {});
    }
  }
};
</script>
<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
.Vip{
.back {
  margin-right: 30%;
}
.back i {
  margin-top: 5px;
  margin-left: 50%;
}
.header {
  height: 40px;
  line-height: 40px;
}
.make {
  font-size: 1.5rem;
  color: #313131;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
.menu-video {
  width: 80%;
  display: block;
  margin: 0 auto;
}
}
</style>