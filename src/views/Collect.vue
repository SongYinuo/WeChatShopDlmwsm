<template lang="html">
  <div class="index">
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-main class="collectInfo">
      <el-row>
        <el-col :span="22" :offset="2">
          <el-tabs v-model="collect.activeName" @tab-click="handleClick">
            <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified"
              v-if="k.label==='商品'">
              <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in goodslist">
                <el-col :span="6" class="collectInfoProductDrawing">
                  <router-link :to="{ name: '详情页',params: { id: o.id, title: k.label } }">
                    <img :src="o.original_img">
                  </router-link>
                </el-col>
                <el-col :span="17" :offset="1">
                  <div class="mgT4">{{o.goods_name}}</div>
                  <div class="pd2 colorRed">￥{{o.shop_price}}</div>
                </el-col>
              </el-col>
            </el-tab-pane>
              <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified"
              v-if="k.label==='攻略'">
              <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in strategyList">
                <el-col :span="12">
                  <div class="strategyTitle">{{o.title}}</div>
                  <div class="pd2 strategyContent">{{o.content}}</div>
                  <div class="mgT10 strategyTime">{{o.confirm_time_text}}</div>
                </el-col>
                <el-col :span="10" :offset="1" class="collectInfoProductDrawing">
                  <router-link :to="{ name: '旅游攻略',query: { id: o.article_id, title: o.title } }">
                    <img :src="o.author_head_pic" class="strategyImg">
                  </router-link>
                </el-col>
              </el-col>
            </el-tab-pane>
            <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified"
              v-if="k.label==='种草'">
              <el-col :span="22" :offset="1" v-for="o in grow_grass" class="pdt20">
                  <router-link :to="{ name: '种草详情',query: { id: o.article_id } }" >
                          <img :src="o.author_head_pic" class="headerImg" v-on:error.once="moveErrorImg($event)">
                          <div class="headerText">
                          <div class="mgT2 colorGray colorYellow userName">{{o.author}}</div>
                          <div class="pd1 colorGray uTime">{{o.confirm_time_text}}</div>
                          <div class="pd2 userTitle">{{o.title}}</div>
                          <div class="pd2 overHidden contentSize">{{o.content}}</div>
                          </div>
                          <el-col :span="20" :offset="4">
                            <el-col :span="8" class="listImg " v-if="o.user_type==1" v-for="i in o.user_url">
                              <img :src="i">
                            </el-col>
                          </el-col>
                          <el-col :span="20" :offset="4"  v-if="o.user_type==2" >
                             <video :src="o.user_url" controls="controls" class="videoUrl"></video>
                          </el-col>
                  </router-link>
              </el-col>
            </el-tab-pane>
          
            <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified"
              v-if="k.label==='讲堂'">
              <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in lectureRoom">
                <el-col :span="12">
                  <div class=" strategyTitle">{{o.title}}</div>
                  <div class="mgT10 strategyTime">{{o.confirm_time_text}}</div>
                </el-col>
                <el-col :span="10" :offset="1" class="collectInfoProductDrawing">
                  <router-link :to="{ name: '讲堂详情',query: { id: o.id, title: k.title } }">
                    <img :src="o.thumb" class="classImg">
                  </router-link>
                </el-col>
              </el-col>
            </el-tab-pane>
            <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified"
              v-if="k.label==='书画'">
              <el-col :span="24" class="collectInfoProductDrawing" v-for="o in bookList">
                <div class="ptbg" v-if="o.is_hot===1">
                  <span class="ptAttribute">热门</span>
                </div>
                <div class="ptbg" v-if="o.is_hot===-1" style="display:none">
                  <span class="ptAttribute">热门</span>
                </div>
                <router-link :to="{ name: '书画详情',query: { id: o.id, title: k.title } }">
                  <img :src="o.thumb">
                </router-link>
                <el-col class="mgT4 overHidden">{{o.title}}</el-col>
                <el-col class="pd2 overHidden">{{o.img_author}} - {{o.img_material}}</el-col>
              </el-col>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
    <v-footer />
  </div>
</template>

<script>
import Footer from "@/common/_footer.vue";
import axios from "axios";
export default {
  components: {
    "v-footer": Footer
  },
  data() {
    return {
      title: "收藏",
      collect: {
        activeName: "shangpin",
        collectionClassified: [
          {
            label: "商品",
            name: "shangpin"
          },
          {
            label: "攻略",
            name: "gonglue"
          },
          {
            label: "讲堂",
            name: "jiangtang"
          },
          {
            label: "书画",
            name: "shuhua"
          },
          {
            label: "种草",
            name: "zhongcao"
          }
        ]
      },
      goodslist: [],
      grow_grass: [],
      strategyList: [],
      bookList: [],
      lectureRoom: []
    };
  },
  mounted() {
    // 商品
    this.getProduct();
    // 种草
    this.getGrowGrass();
    // 攻略
    this.getStrategy();
    // 书画
    this.getBook();
    // 讲堂
    this.getLectureRoom();
  },

  methods: {
    getProduct() {
      var that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/goods_collect_list"
      })
        .then(function(res) {
          that.goodslist = res.data.data;
        })
        .catch({});
    },
    // 种草
    getGrowGrass() {
      var that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/article_collect_front_list"
      })
        .then(function(res) {
          that.grow_grass = res.data.data;
         
        })
        .catch({});
    },
    // 攻略
    getStrategy: function() {
      var that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/article_collect_back_list"
      })
        .then(function(res) {
          that.strategyList = res.data.data;
        })
        .catch({});
    },
    // 书画
    getBook() {
      var that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/paint_collect_list"
      })
        .then(function(res) {
          that.bookList = res.data.data;
        })
        .catch({});
    },
    // 讲堂
    getLectureRoom() {
      var that = this;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/classroom_collect_list"
      })
        .then(function(res) {
          that.lectureRoom = res.data.data;
        })
        .catch({});
    },
   handleClick(tab, event) {
        // console.log(tab, event);
      },
    moveErrorImg: function (event) {
        event.currentTarget.src = "static/testImg/defaultAvatar.png";
      }
  }
};
</script>

<style lang="less">
@import "../assets/header.less";
@import "../assets/index/style.less";
@import "../assets/search/search.less";


.collectInfoProductDrawing {
  position: relative;

  .ptAttribute {
    font-size: 11px;
    width: 25px;
    transform: rotate(-90deg);
    position: absolute;
    left: 4px;
    top: -8px;
    color: #fff;
  }

  .ptbg {
    width: 0;
    height: 0;
    border-width: 25px;
    border-style: solid;
    border-color: transparent #ee4040 transparent transparent;
    transform: rotate(45deg);
    /*顺时针旋转90°*/
    position: absolute;
    left: -24.5px;
    top: -25px;
  }
}

.el-main {
  padding: 0;
}

.collectInfo {
  .el-tabs__item.is-active {
    color: #ffc000;
   
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  padding-bottom: 48px;
  .collectInfoProductDrawing {
    img {
      width: 100%;
    }
  }
  .uUrlImg {
    img {
      width: 48px;
      height: 48px;
      border-radius: 4px;
    }
  }
  .uTime {
    .fz(font-size, 24);
  }
  .annotation {
    .fz(font-size, 28);
    line-height: 1.4;
  }
  .listImg {
  padding-left: 8px;
    img {
      width: 100%;
    }
  }
  .videoUrl {
    width: 100%;
  }
  .contentSize {
    .fz(font-size, 24);
  }.headerImg{
    float: left;
    width: 40px;
    border-radius: 4px;
}.headerText{
  margin-left: 50px;
}.pdt20{
  padding-top: 20px;
}.userName{
  .fz(font-size, 26);
}.uTime {
    .fz(font-size, 22);
}.userTitle{
   .fz(font-size, 28);
   color: #313131;
   font-weight: bold;
}.contentSize {
    .fz(font-size, 24);
}.strategyImg{
  border-radius: 4px;
  width: 120px;
}.strategyTitle{
  .fz(font-size, 30);
  font-weight: bold;
  color: #313131;
}.strategyContent{
  .fz(font-size, 24);
}.strategyTime{
  .fz(font-size, 24);
  color: #ADAEAF;
}.classImg{
  border-radius: 4px;
  width: 120px;
}.el-tabs__active-bar{
   color: #ffc000;
   background-color: #ffc000;
   width: 30px !important;
   
}.el-tabs__nav-wrap:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
}
}
</style>
