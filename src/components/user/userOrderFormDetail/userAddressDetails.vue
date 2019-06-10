<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
            {{title}}        
        </el-header>
        <el-main class="addRow">
            <el-row>
                <el-col :span="22" :offset="1">
                    <el-col class="pd2 title14">收货人姓名：{{data.consignee}}</el-col>
                    <el-col class="pd2 title14">收货人电话：{{data.mobile}}</el-col>
                    <el-col class="pd2 title14">收货人省份：
                        {{data.province_name}}
                        {{data.city_name}}
                        {{data.district_name}}
                    </el-col>
                    <el-col class="pd2 title14">
                        收货人详细地址：
                        {{data.address}}
                    </el-col>
                <el-col class="editBtn" :span="22">
                    <router-link :to="{ name: '编辑地址', params: { id: data.address_id } }">
                    <el-button type="primary" class="bgUndertintYellow brRNone title14">编辑收货地址</el-button>
                    </router-link >
                </el-col>
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
      title: "收货地址详情",
      data: {}
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var that = this;
      var address_id = that.$route.params.id;
      axios
        .get("/Api/User/address_detail?id=" + address_id)
        .then(function(res) {
          console.log(res), (that.data = res.data.data);
          console.log(that.data);
        })
        .catch(function(error) {});
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
  .title14 {
    font-size: 12px;
  }
}
.userVipBtnRow {
  .el-button {
    border-radius: 0;
  }
}
</style>