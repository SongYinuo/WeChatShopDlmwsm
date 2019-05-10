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
      <el-col :span="24">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="swiper in swiperList">
              <img :src="swiper.imgUrl" class="swimg">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </el-col>
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
          <div v-for="item in items" class="copy">
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
                <div class="deParagraph pdT6">{{item.paragraph}}</div>
                <div class="deText pdT6">{{item.ptext}}</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </el-container>
</template>
<script>
  // import FocusIn from '@/common/_focusIn.vue'
  import Like from "@/common/like.vue";
  export default {
    components: {
      "v-like": Like
    },
    data() {

      return {
        title: "种草详情",
        dialogVisible: false,
        content: "sichaoyun",
        swiperList: [
          { imgUrl: "static/testImg/tourism01.jpg" },
          { imgUrl: "static/testImg/tourism02.jpg" }
        ], name: [
          {
            title: "种草详情",
          }
        ],
        items: [
          {
            photoUrl: "static/testImg/shunPrincess.png",
            tittle: "BB..颜无画",
            txt: "5天前",
            paragraph: "给大家推荐一个非常适合旅游的景点",
            ptext:
              "到底是什么景点呢？不卖关子了，这个景点就是红山。下面由我为大家介绍一下红山的文化。"
          }
        ]
      };
    },

    mounted() {
      this._initSwiper();
    },
    methods: {
      handleClose(done) {

      },
      _initSwiper() {
        this.swiper = new Swiper(".swiper-container", {
          type: "fraction",
          loop: true,
          autoplay: 3000,
          pagination: ".swiper-pagination",
          paginationType: "fraction"
        });
      },
      prev() {
        this.$router.go(-1)
      }
      //   ,watch: {
      //    title:{
      //      handle:function(Title,oldTitle){
      //        console.log(Title);
      //        console.log(oldTitle);
      //      }
      //    }
      //   //  title: function(Title,oldTitle){
      //   //    console.log(Title);
      //   //     console.log(oldTitle);

      //   //  }
      // } 
    }
  };
</script>
<style lang="less">
  @import "../../../assets/index/indexSwiper.less";
  @import "../../../assets/header.less";
  @import "../../../assets/index/style.less";
  @import "../../../assets/menu/details.less";
</style>