<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      二级推广员
    </el-header>
    <el-main class="userExtensionAgentRow">
      <el-row>
        <el-col :span="22" :offset="1" class="user pd2 brB1" v-for="k in generalizeArrayList">
          <el-col :span="4" class="headPortrait">
            <img :src="k.imgUrl">
          </el-col>
          <el-col :span="19" :offset="1">
            <div class="pdT4">{{k.name}}</div>
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
      generalizeArrayList: [
        {
          imgUrl: "static/testImg/userVip.png",
          id: "userIdA1000001",
          name: "媛媛媛贵妃"
        },
        {
          imgUrl: "static/testImg/oringe-2.jpg",
          id: "userIdA1000002",
          name: "A.aaCui、小兮"
        },
        {
          imgUrl: "static/testImg/user-forCollection.png",
          id: "userIdA1000003",
          name: "吕贺鹏"
        }
      ]
    };
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
