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
      <div class="block">
    
    <el-carousel trigger="click"  >
      <el-carousel-item  v-for="banner in swiperList.img_url" v-if="swiperList.img_url.length > 1" >
        <img :src="banner" >
      </el-carousel-item>
      <el-carousel-item  v-for="banner in swiperList.img_url"  v-if="swiperList.img_url.length===1" > 
        <img :src="banner" >
      </el-carousel-item>
      <!-- <el-col :span="24" class="of">
            <video :src="swiperList.video_url"  autoplay="autoplay" class="menu-video"
              v-if="swiperList.user_type===2"></video>
          </el-col> -->
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
              <!-- article_idd -->
              <v-like :article_id='article_ids'></v-like>
            </div>
            <el-row>
              <el-col :span="22">
                <div class="deParagraph pdT6">{{items.title}}</div>
                <div class="deText pdT6">{{items.content}}</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24" class="of">
            <video :src="swiperList.video_url"  autoplay="autoplay" class="menu-video"></video>
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
        title: "讲堂详情",
        dialogVisible: false,
        content: "sichaoyun",
        swiperList: [],
        name: [
          {
            title: "讲堂详情"
          }
        ],
        items: [],
        article_ids:'',
      };
    },
    // beforeCreate(){
    //    this.getData();
    // },
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
          .get("/Api/Article/classroom_detail" + "?id=" + newId)
          .then(function (res) {
            //   console.log(newId)
            // console.log("1111")
            // console.log(res);
            that.article_ids = res.data.data.is_collect;
            // console.log(that.article_ids)
            // console.log(res.data.data);
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
          .get("/Api/Article/classroom_detail" + "?id=" + newId)
          .then(function (res) {
            console.log(res.data.data.img_url);
            that.swiperList = res.data.data;
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
    margin-top: 20px;
  }

  .menu-video {
    height: 310px;
    width: 100%;
  }

  .swimg {
    width: 100%;
  }.el-carousel__indicators{
    display: none;
  }img{
    width: 100%;
  }
</style>