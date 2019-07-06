<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <div class="trading">
      <el-tabs :tab-position="tabPosition" v-model="tabkey">
        <el-tab-pane v-for="(household,index) in datas.households" :label="household.mobile_name" :name="household.name" >
          <el-row>
            <el-col :span="22" :offset="1" class="tradingtab-antique">
              <div class="tradingtab-adiv">
                <img :src="household.image">
              </div>
            </el-col>
          </el-row>
          <el-col :span="5" :offset="1" v-for="k in household.tmenu">
            <router-link :to="{ name:'交易中心列表',params: { id: k.id }}">
              <span class="tradingtab-icon">
                <img :src="k.thumb">
                <div class="menu-strategy tc">{{k.name}}</div>
              </span>
            </router-link>
          </el-col>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "交易中心",
      tabPosition: "left",
      tabkey: "食品",
      datas: {
        households: []
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Goods/index"
      }).then(function(res) {
        that.datas.households = res.data.data;
      });
    }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";

.trading .el-tabs__nav {
  margin-left: 0%;
  background-color: #f5f5f4;
  left: 0;
}

.trading .el-tabs--left .el-tabs__active-bar.is-left,
.el-tabs--left .el-tabs__nav-wrap.is-left::after {
  left: 0;
}

.trading .el-tabs__item:hover {
  color: #dab62e;
  cursor: pointer;
  background-color: #fff;
}

.tradingtab-adiv img {
  width: 80%;
  padding-left: 10%;
}

.tradingtab-adiv {
  margin-bottom: 38px;
}

.trading .tradingtab-icon {
  text-align: center;
}

.tradingtab-icon img {
  border-radius: 50%;
}

// 后加的内容
.tradingtab-icon img {
  width: 100%;
  height: 100%;
}
</style>
