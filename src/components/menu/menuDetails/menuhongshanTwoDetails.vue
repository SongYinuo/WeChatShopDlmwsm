<template lang="html">


  <el-container>
    <el-header class="tittle" v-model="title" v-for="i in name">
      <!-- v-if="this.ruleForm.text!==''&&this.ruleForm.textarea!=='' -->
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      <!-- {种草详情} -->
      {{i.title}}
    </el-header>
    <el-row class="details">
      <!-- <el-col :span="24">
         <div class="swiper-container">
          <div class="swiper-wrapper">
            <el-col class="swiper-slide" v-for="(swiper,index) in swiperList.user_url"
              v-if="swiperList.user_type===1 && swiperList.user_url.length > 1">
              <img :src="swiper" class="swimg">
              <div class="swiper-pagination"></div>
            </el-col>
          </div>
          <div class="swiper-wrapper">
            <el-col class="swiper-slide" v-for="b in swiperList.user_url"
              v-if="swiperList.user_type===1 && swiperList.user_url.length===1">
              <img :src="b" class="swimg">
              <div class="swiper-pagination"></div>
            </el-col>
          </div>
          <el-col :span="24" class="of">
            <video :src="swiperList.user_url" controls="controls" class="menu-video"
              v-if="swiperList.user_type===2"></video>
          </el-col>

        </div> 
       
      </el-col> -->
      <div class="block">
    
    <el-carousel trigger="click" height="150px" >
      <el-carousel-item :key="item" v-for="banner in swiperList">
        <img :src="banner" >
      </el-carousel-item>
    </el-carousel>
  </div>
      <el-button icon="el-icon-more" circle type="text" @click="dialogVisible = true"></el-button>
      <el-dialog title="操作" :visible.sync="dialogVisible" width="100%">
        <span slot="footer" class="dialog-footer">
          <el-row>
            <el-col :span="22" :offset="1">
              <el-col :span="4" :offset="2">
                <router-link :to="{name:'编辑详情'}">
                  <div type="primary" @click="dialogVisible = false" class="icon">
                    <i class="el-icon-edit"></i>
                  </div>
                </router-link>
                <div class="del">编辑</div>
              </el-col>
              <el-col :span="4" :offset="2">
                <div type="danger" @click="prev()" class="icon">
                  <i class="el-icon-delete"></i>
                </div>
                <div class="del">删除</div>
              </el-col>
            </el-col>
          </el-row>
        </span>
      </el-dialog>
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
              <v-like />
            </div>
            <el-row>
              <el-col :span="22">
                <div class="deParagraph pdT6">{{items.title}}</div>
                <div class="deText pdT6">{{items.content}}</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </el-container>
</template>
<script>
  import Like from "@/common/like.vue";
  import axios from "axios";
  export default {
    components: {
      "v-like": Like
    },
    data() {
      return {
        title: "种草详情",
        dialogVisible: false,
        content: "sichaoyun",
        swiperList: [],
        name: [
          {
            title: "种草详情"
          }
        ],
        items: []
      };
    },

    mounted() {
      // this._initSwiper();
      this.getData();
      this.getImg();
      // this.getGoodsInfoData();
    },
    methods: {
      handleClose(done) { },
      // _initSwiper() {
      //   this.swiper = new Swiper(".swiper-container", {
      //     type: "fraction",
      //     loop: true,
      //     autoplay: 3000,
      //     pagination: ".swiper-pagination",
      //     paginationType: "fraction"
      //   });
      // },
      prev() {
        this.$router.go(-1);
      },
      getData() {
        var newId = this.$route.query.id;
        const that = this;
        axios
          .get("/Api/Article/article_detail" + "?article_id=" + newId)
          .then(function (res) {
            console.log(res);
            that.items = res.data.data;
          })
          .catch(function (error) {
            // console.log(error)
          });
      },
      getImg() {
        var newId = this.$route.query.id;
        const that = this;
        axios
          .get("/Api/Article/article_detail?article_id=24")
          .then(function (res) {
            console.log(res.data.data.user_url);
            that.swiperList = res.data.data.user_url;
          })
          .catch(function (error) {
            // console.log(error)
          });
      },
      moveErrorImg: function (event) {
        event.currentTarget.src = "static/testImg/defaultAvatar.png";
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
  }

  .menu-video {
    height: 310px;
    width: 100%;
  }

  .swimg {
    width: 100%;
  }
</style>