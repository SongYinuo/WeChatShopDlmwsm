<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      种草详情视频
    </el-header>
    <el-row class="videos">
      <el-col >
        <video :src="videos.user_url" controls="controls" class="deVideos" autoplay="autoplay"></video>
      </el-col>
      <el-col :span="22" :offset="1" class="pdT6">
        <div  class="copyVideo">
          <el-col :span="16">
            <img :src="videos.author_head_pic" class="fl deimg">
            <div class="fl pdLR2">
              <span class="fl detittle">{{videos.author}}</span>
              <span class="fl detxt">{{videos.confirm_time_text}}</span>
            </div>
          </el-col>
          <el-col :span="4" :offset="20">
          <div class="MenuLike">
            <div id="admire">
                <img v-if="videos.is_collect===0" src="static/testImg/Focus1.png" class="likeimage" @click="change()">
                <img  src="static/testImg/Focus2.png" class="likeimage" v-else @click="change()">
            </div> 
          </div>
          </el-col>
          <el-row>
            <el-col :span="22">
              <div class="deText pdT6">{{videos.content}}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import axios from "axios";
export default {
  props: ["article_id"],
  inject: ["reload"],
  data() {
    return {
      dialogVisible: false,
      videos: [],
      article_ids: "",
      admire: ""
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    getImg() {
      var newId = this.$route.params.id;
      const that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Article/article_detail" + "?article_id=" + newId
      })
        .then(function(res) {
          that.videos = res.data.data;
        })
        .catch(function(error) {});
    },
    moveErrorImg: function(event) {
      event.currentTarget.src = "static/testImg/defaultAvatar.png";
    },
    change: function() {
      var newId = this.$route.params.id;
      const that = this;
      this.admire == false ? (this.admire = true) : (this.admire = false);
      this.$http
        .post("/Api/User/collect", {
          model: "article",
          id: newId
        })
        .then(res => {
          that.$message({
            message: "返回我的收藏，查看收藏内容",
            type: "success"
          });
          that.reload();
        })
        .catch(error => {});
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/index/indexSwiper.less";
@import "../../../assets/header.less";
@import "../../../assets/index/style.less";
@import "../../../assets/menu/details.less";
.videos {
  .likeimage {
    width: 24px;
    position: absolute;
    right: -100px;
  }
}
</style>