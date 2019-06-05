<template lang="html">
  <el-container>
    <el-header class="tittle" v-model="title" v-for="i in name">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{i.title}}
    </el-header>
    <el-row class="Identification">
      <el-col :span="22" :offset="1">
        <div>
          <el-col :span="7" :offset="1" v-for="b in items.img_url" class="authenticateImgRow">
            <img :src="b" class="photo">
          </el-col>
          <div class="text pdT6 pdB3"><span class="colorRed pdLR1">*</span>{{items.title}}</div>
          <div class="text pdT3 pdB3"><span class="colorRed pdLR1">*</span>{{items.contact_name}}</div>
          <div class="text pdT3 pdB3"><span class="colorRed pdLR1">*</span>{{items.contact_phone}}</div>
          <div class="text pdT3 pdB3">{{items.content}}</div>
        </div>
        <el-button @click="submitForm()">删除</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: [
        {
          title: "我的古董鉴定"
        }
      ],
      items: []
    };
  },
  mounted() {
    this.getText();
  },
  methods: {
    getText() {
      var newId = this.$route.query.id;
      const that = this;
      axios
        .get("/Api/User/prove_detail" + "?id=" + newId)
        .then(function(res) {
          that.items = res.data.data;
        })
        .catch(function(error) {});
    },
    submitForm(formName) {
      var newId = this.$route.query.id;
      let that = this;
      that.$http.post("/Api/User/prove_delete" + "?id=" + newId, {
        id: newId
      });
      this.$router.go(-1);
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

.authenticateImgRow:first-child {
  margin-left: 0;
}
</style>
