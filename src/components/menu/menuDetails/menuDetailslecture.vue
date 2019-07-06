<template lang="html">
  <el-container>
    <el-header class="tittle" v-for="i in name">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{i.title}}
    </el-header>
    <el-row class="details">
      <div class="block">
        <el-carousel trigger="click">
          <el-carousel-item v-for="banner in swiperList.img_url" v-if="swiperList.img_url.length > 1">
            <img :src="banner">
          </el-carousel-item>
          <el-carousel-item v-for="banner in swiperList.img_url" v-if="swiperList.img_url.length===1">
            <img :src="banner">
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row>
        <el-col :span="22" :offset="1" class="pdT6">
          <div class="copy">
            <el-col :span="16">
              <img :src="items.author_head_pic" v-on:error.once="moveErrorImg($event)" class="fl deimg">
              <div class="fl pdLR2">
                <span class="fl detittle">{{items.author}}</span>
                <span class="fl detxt">{{items.confirm_time_text}}</span>
              </div>
            </el-col>
            <div class="MenuLike">
              <div id="admire">
                <img v-if="itemtxts.is_collect===0" src="static/testImg/Focus1.png" id="likeimage" @click="change()">
                <img src="static/testImg/Focus2.png" id="likeimage" v-else @click="change()">
              </div>
            </div>
            <el-row>
              <el-col :span="22">
                <div class="deParagraph pdT6">{{items.title}}</div>
                <div class="deText pdT6">{{items.content}}</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24" class="of" v-if="swiperList.video_url!=''">
          <video :src="swiperList.video_url" autoplay="autoplay" class="menu-video"></video>
        </el-col>
      </el-row>
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
      content: "sichaoyun",
      swiperList: [],
      items: [],
      article_ids: "",
      admire: "",
      name: [
        {
          title: "讲堂详情"
        }
      ]
    };
  },
  mounted() {
    this.getImg();
    this.getData();
  },
  methods: {
    handleClose(done) {},
    prev() {
      this.$router.go(-1);
    },
    getImg() {
      var newId = this.$route.params.id;
      const that = this;
      axios
        .get("/Api/Article/classroom_detail" + "?id=" + newId)
        .then(function(res) {
          that.swiperList = res.data.data;
        })
        .catch(function(error) {});
    },
    getData() {
      var newId = this.$route.params.id;
      const that = this;
      axios
        .get("/Api/Article/classroom_detail" + "?id=" + newId)
        .then(function(res) {
          that.article_ids = res.data.data.is_collect;
          that.items = res.data.data;
        })
        .catch(function(error) {});
    },
    moveErrorImg: function(event) {
      event.currentTarget.src = "static/testImg/defaultAvatar.png";
    },
    created: function() {
      this.getImg();
    },
    change: function() {
      var newId = this.$route.params.id;
      const that = this;
      this.admire == false ? (this.admire = true) : (this.admire = false);
      this.$http
        .post("/Api/User/collect", {
          model: "classroom",
          id: newId
        })
        .then(res => {
          that.$message({
            message: "返回我的收拍，查看收拍内容",
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

.menu-video {
  width: 100%;
  height: 100%;
}

.of {
  overflow: hidden;
  margin-top: 20px;
}

.menu-video {
  height: 310px;
  width: 100%;
}

.swimg {
  width: 100%;
}

.el-carousel__indicators {
  display: none;
}
img {
  width: 100%;
}
  #likeimage {
  width: 34px;
  height: 34px;
  right: 12px;
  top: 12px;;
  position: absolute;
  }
</style>
