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
      <el-carousel-item  v-for="banner in swiperList.img_show_url" v-if="swiperList.img_show_url.length > 1" >
        <img :src="banner" >
      </el-carousel-item>
      <el-carousel-item  v-for="banner in swiperList.img_show_url"  v-if="swiperList.img_show_url.length===1" > 
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
                <router-link :to="{name:'讲堂编辑详情',query: { id: swiperList.id,title:swiperList.title }}">
                  <div type="primary" @click="dialogVisible = false" class="icon">
                    <i class="el-icon-edit"></i>
                  </div>
                </router-link>
                <div class="del">编辑</div>
              </el-col>
              <el-col :span="4" :offset="2">
                <div type="danger" @click="submitForm()" class="icon">
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
            <el-row>
              <el-col :span="22">
                <div class="deParagraph pdT6">{{items.title}}</div>
                <div class="deText pdT6">{{items.content}}</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24" class="of">
            <video :src="swiperList.video_show_url"  autoplay="autoplay" class="menu-video"></video>
          </el-col>
      </el-row>
    </el-row>
  </el-container>
</template>
<script>
  import axios from "axios";
  export default {
    data() {
      return {
        title: "我的讲堂详情",
        dialogVisible: false,
        content: "sichaoyun",
        swiperList: [],
        name: [
          {
            title: "我的讲堂详情"
          }
        ],
        items: [],
        article_ids:'',
      };
    },
    mounted() {
      this.getData();
      this.getImg();
    },
    methods: {
      handleClose(done) { },
      getData() {
        var newId = this.$route.query.id;
        const that = this;
        axios
          .get("/Api/User/classroom_detail" + "?id=" + newId)
          .then(function (res) {
            that.article_ids = res.data.data.is_collect;
            that.items = res.data.data;
          })
          .catch(function (error) {
          });
      },
      getImg() {
        var newId = this.$route.query.id;
        const that = this;
        axios
          .get("/Api/User/classroom_detail" + "?id=" + newId)
          .then(function (res) {
            console.log(res.data.data.img_url);
            that.swiperList = res.data.data;
          })
          .catch(function (error) {
          });
      },
      moveErrorImg: function (event) {
        event.currentTarget.src = "static/testImg/defaultAvatar.png";
      },submitForm(formName){
         var newId = this.$route.query.id;
        let that = this;
        that.$http
          .post("/Api/User/classroom_delete" + "?id=" + newId, {
            id:newId,
          })
          this.$router.go(-1);
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
