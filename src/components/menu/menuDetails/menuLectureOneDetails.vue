<template lang="html">
    <el-container>
      <el-header class="tittle">
        <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
         </div>
           故事分类
     </el-header>
     <el-row>
       <el-col>
           <el-button type="primary" @click="one()">登录按钮</el-button>
       </el-col>
       <el-col>
           <el-button type="success" @click="two()">按钮1</el-button>
       </el-col>
       <el-col>
           <el-button type="info" @click="three()">按钮2</el-button>
       </el-col>
       <el-col>
           <el-button type="warning" @click="four()">按钮3</el-button>
       </el-col>
       <el-col>
           <el-button type="danger" @click="five()">退出按钮</el-button>
       </el-col>
     </el-row>
    </el-container>
</template>
<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return{}
  },
  mounted() {
    // this.one();
    // this.two();
    // this.three();
    // this.four();
    // this.five();
  },
  methods: {
    one() {
      const that = this;
      axios.get("/Api/User/see").then(function(res) {
      });
    },
    two() {
      const that = this;
      axios
        .get("/Api/User/login_test?username=13133335555")
        .then(function(res) {
        });
    },
    three() {
      const that = this;
      axios
        .get("/Api/User/login_test?username=13133336666")
        .then(function(res) {
        });
    },
    four() {
      const that = this;
      axios
        .get("/Api/User/login_test?username=13133337777")
        .then(function(res) {
        });
    },
    five() {
      const that = this;
      axios.get("/Api/User/logout_test").then(function(res) {
      });
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/header.less";
</style>