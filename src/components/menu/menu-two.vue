<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-col :span="22" :offset="1">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="攻略" name="first">
          <el-row>
            <div v-for="item in items">
              <router-link :to="{ name:'旅游攻略',query: { id: item.article_id }}">
                <el-row class="smallimg">
                  <el-col :span="12" class="pd">
                    <p class="menu-strategy " v-html="item.title">{{item.title}}</p>
                    <div class="menu-strategy-small omit" v-html="item.content">{{item.content}}</div>
                    <div class="menuTime" v-html="item.confirm_time_text">{{item.confirm_time_text}}</div>
                  </el-col>
                  <el-col :span="8" :offset="4">
                    <img :src="item.thumb">
                  </el-col>
                </el-row>
              </router-link>
            </div>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="社区" name="second">
          <div v-for="array in arrays">
            <router-link :to="{name: '种草详情',query: { id: array.article_id }}">
              <el-row>
                <el-col :span="22">
                  <img :src="array.author_head_pic" v-on:error.once="moveErrorImg($event)" class="fl menuHeader">
                  <div class="fl menuHead-txt">{{array.title}}</div>
                  <div class="fl cl menuHead-smtxt omit">{{array.confirm_time_text}}</div>
                  <p class="smalltxt-p cl fl">{{array.content}}</p>
                  <div class="cl smalltxt-div">{{array.author}}</div>
                </el-col>
              </el-row>
              <el-row type="flex" class="row-bg smallimg ">
                <el-row>
                  <div class="morePhoto1">
                    <el-col :span="7" :offset="1" v-for="b in array.user_url"
                      v-if="array.user_type===1 && array.user_url.length===1" justify="start">
                      <img :src="b" class="CommunityImg">
                    </el-col>
                    <!--单图-->
                  </div>
                </el-row>
                <el-row>
                  <div class="morePhoto">
                    <el-col :span="7" :offset="1" v-for="b in array.user_url"
                      v-if="array.user_type===1 && array.user_url.length > 1" justify="start">
                      <img :src="b" class="CommunityImg2">
                    </el-col>
                    <!--多图-->
                  </div>
                </el-row>
                <el-row>
                  <el-col :span="21" :offset="3">
                    <video :src="array.user_url" controls="controls" class="menu-video"
                      v-if="array.user_type===2"></video>
                  </el-col>
                </el-row>
              </el-row>
            </router-link>
          </div>
          <el-col>
            <router-link :to="{ name:'发布',query:{cart_id:1002}}">
              <span class="flbtn"><img src="static/testImg/write@2x.png">发布</span>
            </router-link>
          </el-col>
          <el-row>
            <el-col :span="24">
              <div class="emptyFOOT"></div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-container>
</template>
<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      title: "旅游文化",
      activeName: "first",
      items: [],
      arrays: []
    };
  },
  mounted() {
    this.getData();
    this.getImg();
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getData() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Article/article_list?cat_id=1002"
      })
        .then(function(res) {
          that.items = res.data.data.admin_list;
        })
        .catch(function(error) {});
    },
    getImg() {
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Article/article_list?cat_id=1002"
      })
        .then(function(res) {
          that.arrays = res.data.data.user_list;
        })
        .catch(function(error) {});
    },
    moveErrorImg: function(event) {
      event.currentTarget.src = "static/testImg/defaultAvatar.png";
    }
  }
};
</script>
<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/menu/menu.less";

.menuTime {
  position: absolute;
  bottom: 10px;
  .fz(font-size, 24);
  color: #adaeaf;
}

.menuHead-smtxt {
  margin-left: 45px;
  .fz(font-size, 22);
  color: #949494;
  margin-top: -20px;
  text-overflow: ellipsis;
}

.smalltxt-p {
  .fz(font-size, 28);
  color: #313131;
  font-weight: bold;
  margin-left: 45px;
}

.morePhoto,
.CommunityImg {
  width: 90%;
  margin-left: 10%;
}
</style>
