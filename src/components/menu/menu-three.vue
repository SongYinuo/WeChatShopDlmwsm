<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-row>
      <el-col :span="22" :offset="1" class="class">
        <div v-for="item in items">
          <router-link :to="{ name:'讲堂详情',params: { id: item.id,title:item.title }}">
            <el-row class="smallimg">
              <el-col :span="12" class="pd">
                <p class="menu-strategy ">{{item.title}}</p>
                <div class="menu-strategy-small omit">{{item.content}}</div>
                <span class="menuTime">{{item.confirm_time_text}}</span>
              </el-col>
              <el-col :span="10" :offset="2">
                <img :src="item.thumb">
              </el-col>
            </el-row>
          </router-link>
        </div>
      </el-col>
      <!-- <el-col>
        <router-link :to="{ name:'发布讲堂'}">
          <span class="flbtn"><img src="static/testImg/write@2x.png">讲个故事</span>
        </router-link>
      </el-col> -->
    </el-row>
  </el-container>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      title: "讲堂",
      items: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Article/classroom_list"
      })
        .then(function(res) {
          that.items = res.data.data;
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
.class {
  .menuTime {
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

  .smallimg img {
    margin-top: 10px;
  }
}
</style>
