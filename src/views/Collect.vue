<template lang="html">
  <div class="index">
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      收藏
    </el-header>
    <el-main class="collectInfo">
      <el-row>
        <el-col :span="22" :offset="1">
          <el-tabs v-model="collect.activeName">
             <el-tab-pane :label="k.label" :name="k.name"  v-for="k in collect.collectionClassified" v-if="k.label==='商品'">
                 <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in goodslist">
                  <el-col :span="6" class="collectInfoProductDrawing">
                    <router-link :to="{ name: '详情页',query: { id: o.id, title: k.label } }">
                      <img :src="o.original_img">
                    </router-link>
                  </el-col>
                  <el-col :span="17" :offset="1">
                    <div class="mgT4">{{o.goods_name}}</div>
                    <div class="pd2 colorRed">￥{{o.shop_price}}</div>
                  </el-col>
                 </el-col>
             </el-tab-pane>
              <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified" v-if="k.label==='种草'">
                 <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in grow_grass">
                    <el-col :span="4" class="uUrlImg">
                      <img :src="o.author_head_pic">
                    </el-col>
                    <router-link :to="{ name: '种草详情',query: { id: o.article_id } }" v-if="o.author_head_pic!==''">
                      <el-col :span="19" :offset="1">
                        <div class="mgT2 colorGray">{{o.author}}</div>
                        <div class="pd1 colorGray uTime">{{o.confirm_time_text}}</div>
                        <div class="pd2">{{o.title}}</div>
                      </el-col>
                    </router-link>
                    <router-link :to="{ name: '种草详情视频',query: { id: o.id } }" v-if="o.user_url!==''">
                      <el-col :span="19" :offset="1">
                        <div class="mgT2 colorGray">{{o.author}}</div>
                        <div class="pd1 colorGray uTime">{{o.confirm_time_text}}</div>
                        <div class="pd2">{{o.title}}</div>
                      </el-col>
                    </router-link>
                    <el-col class="annotation">{{o.annotation}}</el-col>
                    <el-col class="listImg pd1" v-if="o.imgUrl!==''"><img :src="o.imgUrl"></el-col>
                    <el-col v-if="o.videoUrl!==''">
                      <video :src="o.videoUrl" controls="controls" class="videoUrl"></video>
                    </el-col>
                 </el-col>
             </el-tab-pane>
             <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified" v-if="k.label==='攻略'|| k.label==='讲堂'">
                 <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in strategyList">
                  <el-col :span="11" class="collectInfoProductDrawing">
                    <router-link :to="{ name: '种草详情',query: { id: o.article_id, title: k.label } }">
                      <img :src="o.author_head_pic">
                    </router-link>
                  </el-col>
                  <el-col :span="12" :offset="1">
                    <div class="mgT10">{{o.title}}</div>
                    <!-- <div class="pd2 colorRed">￥{{o.price}}</div> -->
                  </el-col>
                 </el-col>
             </el-tab-pane>
            <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified" v-if="k.label==='书画'">
                  <el-col :span="12" class="collectInfoProductDrawing pdTRBL2" v-for="o in bookList">
                    <router-link :to="{ name: '书画详情',query: { id: o.article_id, title: k.label } }">
                      <img :src="o.author_head_pic">
                    </router-link>
                    <div class="mgT4 overHidden">{{o.title}}</div>
                    <!-- <div class="pd2 colorRed overHidden">￥{{o.price}}</div> -->
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
import Axios from "axios";
export default {
  components: {
    "v-footer": Footer
  },
  data() {
    return {
      collect: {
        activeName: "shangpin",
        collectionClassified: [
          {
            label: "商品",
            name: "shangpin"
          },
          {
            label: "攻略",
            name: "gonglue",
          },
          {
            label: "讲堂",
            name: "jiangtang",
          },
          {
            label: "书画",
            name: "shuhua",
          },
          {
            label: "种草",
            name: "zhongcao"
          }
        ]
        // 获取商品详情页面的数据
      },
      goodslist: [],
      grow_grass: [],
      strategyList:[],
      bookList:[],
    };
  },
  mounted() {
    this.getProduct();
    this.growGrass();
    // 攻略
    this.strategy();
    // 书画
    this.book();
  },

  methods: {
    getProduct() {
      var that = this;
      Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/goods_collect_list"
      })
        .then(function(res) {
          console.log("111");
          console.log(res);
          that.goodslist = res.data.data;
          console.log(that.goodslist);
        })
        .catch({});
    },
    // 种草
    growGrass() {
      var that = this;
      Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/article_collect_front_list"
      })
        .then(function(res) {
          console.log("2525");
          console.log(res);
          that.grow_grass = res.data.data;
          console.log(that.grow_grass)
          // that.collect.collectionClassified.grow_grass = res.data.data;
        })
        .catch({});
    },
    // 攻略
    strategy:function(){
      var that = this
      Axios({
        methods:'get',
         headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/article_collect_back_list"
      }).then(function(res){
        console.log("书画")
        console.log(res)
        that.strategyList = res.data.data
      })
    },
  // 书画
  book(){
     var that = this
      Axios({
        methods:'get',
         headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/paint_collect_list"
      }).then(function(res){
        console.log("功率")
        console.log(res)
        that.bookList = res.data.data
      })
  },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less">
@import "../assets/header.less";
@import "../assets/index/style.less";
@import "../assets/search/search.less";
.el-main {
  padding: 0;
}
.collectInfo {
  .el-tabs__active-bar {
    display: none;
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding: 0 20px;
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
    img {
      width: 100%;
    }
  }
  .videoUrl {
    width: 100%;
  }
}
</style>
