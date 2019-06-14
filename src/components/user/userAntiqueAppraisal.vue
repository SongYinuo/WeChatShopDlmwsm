<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-row>
      <el-col :span="22" :offset="1" class="count">
        <div>
          <div class="smallTittle">我的发布（{{count}}）</div>
          <div v-for="item in households">
            <router-link :to="{name:'已发布-鉴定',query: { id: item.id }}">
              <el-row class="smallimg">
                <el-col :span="12" class="pd">
                  <p class="menu-strategy ">{{item.title}}</p>
                  <div class="menu-strategy-small omit">{{item.content}}</div>
                  <span class="menuTime">{{item.confirm_time_text}}</span>
                </el-col>
                <el-col :span="8" :offset="4">
                  <img :src="item.thumb">
                  <span class="state">{{item.is_confirm == 1?'未处理':'已处理'}}</span>
                </el-col>
              </el-row>
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      title: "古董鉴定",
      households: [],
      count: ""
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      const that = this;
      Axios({
        methods: "get",
        url: "/Api/User/prove_list"
      }).then(function(res) {
        that.households = res.data.data;
        that.count = res.data.count;
      });
    }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";
.count{

.menuTime {
  position: absolute;
  bottom: 10px;
  .fz(font-size, 24);
  color: #adaeaf;
}

.menuBtn {
  border-radius: 30px;
  background-color: #dab62e;
  .fz(font-size, 34);
  margin-right: 20px;
}

.menuBtn img {
  width: 24px;
}

.smallTittle {
  color: #313131;
  .fz(font-size, 34);
  font-weight: bold;
}

.state {
  color: #ee4040;
  .fz(font-size, 24);
  position: absolute;
  right: 5px;
  top: 5px;
}
}
</style>
