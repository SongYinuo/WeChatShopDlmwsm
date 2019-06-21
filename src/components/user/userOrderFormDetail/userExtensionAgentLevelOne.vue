<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      一级推广员
    </el-header>
    <el-main class="userExtensionAgentRow">
      <el-row>
        <el-col :span="22" :offset="1" class="user pd2 brB1">
          <el-col :span="4" class="headPortrait">
            <img :src="generalize.head_pic">
          </el-col>
          <el-col :span="19" :offset="1">
            <div class="pdT4">{{generalize.nickname}}</div>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      generalize: {}
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData() {
      const thir = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Distribut/get_lower?id=" + 1
      })
        .then(function(res) {
          thir.generalize = res.data.data;
        })
        .catch({});
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";

.el-main {
  padding: 0;
}
</style>
