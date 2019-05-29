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
               {{k}}
                 <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in collect.collectionClassified.goodslist">
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
                {{k}}
                 <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in k.infoArray">
                    <el-col :span="4" class="uUrlImg">
                      <img :src="o.uUrlImg">
                    </el-col>
                    <router-link :to="{ name: '种草详情',query: { id: o.id } }" v-if="o.imgUrl!==''">
                      <el-col :span="19" :offset="1">
                        <div class="mgT2 colorGray">{{o.uName}}</div>
                        <div class="pd1 colorGray uTime">{{o.uTime}}</div>
                        <div class="pd2">{{o.title}}</div>
                      </el-col>
                    </router-link>
                    <router-link :to="{ name: '种草详情视频',query: { id: o.id } }" v-if="o.videoUrl!==''">
                      <el-col :span="19" :offset="1">
                        <div class="mgT2 colorGray">{{o.uName}}</div>
                        <div class="pd1 colorGray uTime">{{o.uTime}}</div>
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
                 <el-col :span="22" :offset="1" class="pd2 brB1" v-for="o in k.infoArray">
                  <el-col :span="11" class="collectInfoProductDrawing">
                    <router-link :to="{ name: '种草详情',query: { id: o.id, title: k.label } }">
                      <img :src="o.imgUrl">
                    </router-link>
                  </el-col>
                  <el-col :span="12" :offset="1">
                    <div class="mgT10">{{o.title}}</div>
                    <div class="pd2 colorRed">￥{{o.price}}</div>
                  </el-col>
                 </el-col>
             </el-tab-pane>
            <el-tab-pane :label="k.label" :name="k.name" v-for="k in collect.collectionClassified" v-if="k.label==='书画'">
                  <el-col :span="12" class="collectInfoProductDrawing pdTRBL2" v-for="o in k.infoArray">
                    <router-link :to="{ name: '书画详情',query: { id: o.id, title: k.label } }">
                      <img :src="o.imgUrl">
                    </router-link>
                    <div class="mgT4 overHidden">{{o.title}}</div>
                    <div class="pd2 colorRed overHidden">￥{{o.price}}</div>
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
            name: "shangpin",
            goodslist: []
          },
          {
            label: "攻略",
            name: "gonglue",
            infoArray: [
              {
                id: "idA20000001",
                imgUrl: "static/testImg/pig01.jpg",
                title: "小猪佩奇",
                price: 152
              },
              {
                id: "idA200000012",
                imgUrl: "static/testImg/pig01.jpg",
                title: "1小猪佩奇",
                price: 153
              },
              {
                id: "idA200000013",
                imgUrl: "static/testImg/pig01.jpg",
                title: "2小猪佩奇",
                price: 154
              },
              {
                id: "idA200000014",
                imgUrl: "static/testImg/pig01.jpg",
                title: "3小猪佩奇",
                price: 155
              },
              {
                id: "idA200000015",
                imgUrl: "static/testImg/pig01.jpg",
                title: "4小猪佩奇",
                price: 156
              },
              {
                id: "idA200000016",
                imgUrl: "static/testImg/pig01.jpg",
                title: "5小猪佩奇",
                price: 157
              }
            ]
          },
          {
            label: "讲堂",
            name: "jiangtang",
            infoArray: [
              {
                id: "idA30000001",
                imgUrl: "static/testImg/oringe-2.jpg",
                title: "美味鲜橙",
                price: 152
              },
              {
                id: "idA300000012",
                imgUrl: "static/testImg/oringe-2.jpg",
                title: "1美味鲜橙",
                price: 253
              },
              {
                id: "idA300000013",
                imgUrl: "static/testImg/oringe-2.jpg",
                title: "2美味鲜橙",
                price: 254
              },
              {
                id: "idA300000014",
                imgUrl: "static/testImg/oringe-2.jpg",
                title: "3美味鲜橙",
                price: 255
              },
              {
                id: "idA300000015",
                imgUrl: "static/testImg/oringe-2.jpg",
                title: "4美味鲜橙",
                price: 256
              },
              {
                id: "idA300000016",
                imgUrl: "static/testImg/oringe-2.jpg",
                title: "5美味鲜橙",
                price: 257
              }
            ]
          },
          {
            label: "书画",
            name: "shuhua",
            infoArray: [
              {
                id: "idA30000001",
                imgUrl: "static/testImg/youhua.jpg",
                title: "经典书画",
                price: 105002
              },
              {
                id: "idA300000012",
                imgUrl: "static/testImg/youhua.jpg",
                title: "1经典书画 实力大师创作",
                price: 22053
              },
              {
                id: "idA300000013",
                imgUrl: "static/testImg/youhua.jpg",
                title: "2经典书画 实力大师创作",
                price: 25400
              },
              {
                id: "idA300000014",
                imgUrl: "static/testImg/youhua.jpg",
                title: "3经典书画 实力大师创作",
                price: 25500
              },
              {
                id: "idA300000015",
                imgUrl: "static/testImg/youhua.jpg",
                title: "4经典书画 实力大师创作",
                price: 25600
              },
              {
                id: "idA300000016",
                imgUrl: "static/testImg/youhua.jpg",
                title: "5经典书画 实力大师创作",
                price: 25700
              }
            ]
          },
          {
            label: "种草",
            name: "zhongcao",
            grow_grass: [
            ]
          }
        ]
      }
    };
  },
   mounted() {
     this.getProduct();
     this.grow_grass();



  },

  methods: {
    getProduct(){
      var that = this;
     Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url:'/Api/User/goods_collect_list'
      }).then(function(res){
        console.log("111")
        console.log(res)
        that.collect.collectionClassified.goodslist = res.data.data
        console.log(that.collect.collectionClassified)
        console.log(that.collect.collectionClassified.goodslist)
      }).catch({

      })
    },
    // 种草
    grow_grass:function(){
      var that = this
      Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url:'/Api/User/article_collect_front_list'
      }).then(function(res){
        console.log("2525")
        console.log(res)
        that.collect.collectionClassified.grow_grass = res.data.data
      }).catch({

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
