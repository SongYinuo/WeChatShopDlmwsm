<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      种草详情视频
    </el-header>
    <el-row class="videos">
      <el-col v-for="video in videos">
        <video :src="video.videoUrl" controls="controls" class="deVideos"></video>
      </el-col>

      <el-col :span="22" :offset="1" class="pdT6">
        <div v-for="item in items" class="copyVideo">
          <el-col :span="16">
            <img :src="item.photoUrl" class="fl deimg">
            <div class="fl pdLR2">
              <span class="fl detittle">{{item.tittle}}</span>
              <span class="fl detxt">{{item.txt}}</span>
            </div>
          </el-col>
          <div class="MenuLike">
            <v-like />
          </div>
          <el-row>
            <el-col :span="22">

              <div class="deText pdT6">{{item.ptext}}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>

    </el-row>
  </el-container>
</template>
<script>
  import Like from "@/common/like.vue";
  export default {
    components: {
      "v-like": Like
    },
    data() {
      return {
        videos: [
          {
            videoUrl: "static/testImg/pigsmall.mp4"
          }
        ],
        items: [
          {
            photoUrl: "static/testImg/shunPrincess.png",
            tittle: "BB..颜无画",
            txt: "5天前",

            ptext:
              "到底是什么景点呢？不卖关子了，这个景点就是红山。下面由我为大家介绍一下红山的文化。"
          }
        ]
      };
    }
  };
</script>
<style lang="less">
  @import "../../../assets/index/indexSwiper.less";
  @import "../../../assets/header.less";
  @import "../../../assets/index/style.less";
  @import "../../../assets/menu/details.less";
</style>