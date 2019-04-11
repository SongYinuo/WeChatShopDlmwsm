<template lang="html">
  <section>
      <div class="indexIntegralShop mgTB2">
        <div class="indexSwiperHeader">
          <el-row>
            <el-col :span="22" :offset="1">
              <el-col :span="16">
                <div class="headerTitle pdB2 pdT2">积分商城</div>
              </el-col>
              <el-col :span="8">
                <div class="indexSwiperHeaderMore">
                  <a>查看更多<i class="el-icon-arrow-right"></i></a>
                </div>
              </el-col>
            </el-col>
          </el-row>
        </div>

       <div class="indexSwiperRow">
        <el-row>
          <el-col :span="22" :offset="1" class="brB1">
            <div class="swiper-container integralShopSwiper " id="integralShopSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="swiper in swiperList" :key="swiper.id">
                       <router-link :to="{name:'详情页'}">
                        <img :src="swiper.imgUrl" class="swiperListImg">
                      </router-link>
                      <el-row class="integralShopSwiperRow pd2">
                          <el-col :span="24"> 
                              <span class="integralShopSwiper-title pd1">{{swiper.title}}</span>
                          </el-col>
                          <el-col :span="24"> 
                              <span class="integralShopSwiper-annotation colorRed pd1 lh1-2">{{swiper.textAnnotation}}</span>
                          </el-col>
                          <el-col :span="24"> 
                              <span class="integralShopSwiper-price colorRed pd1 lh1-2">¥{{swiper.price}}</span>
                          </el-col>
                      </el-row>
                    </div>
                </div>
             </div>
          </el-col>
       </el-row>
      </div>
    </div>
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    banner: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
@import "../../assets/index/indexSwiper.less";
</style>
<script>
export default {
  name: "",
  data() {
    return {
      swiperList: [
        {
          title: "1神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "1300积分送30",
          price: "414"
        },
        {
          title: "2神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "21300积分送30",
          price: "415"
        },
        {
          title: "3神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "31300积分送30",
          price: "416"
        },
        {
          title: "4神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "41300积分送30",
          price: "417"
        },
        {
          title: "5神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "51300积分送30",
          price: "418"
        },
        {
          title: "6神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "61300积分送30",
          price: "419"
        },
        {
          title: "7神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "71300积分送30",
          price: "420"
        },
        {
          title: "8神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "81300积分送30",
          price: "414"
        },
        {
          title: "9神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "91300积分送30",
          price: "414"
        },
        {
          title: "10神龟",
          imgUrl: "../../../static/testImg/productImg.png",
          textAnnotation: "11300积分送30",
          price: "414"
        }
      ]
    };
  },
  mounted() {
    this._initSwiper();
  },
  methods: {
    _initSwiper() {
      this.swiper = new Swiper("#integralShopSwiper", {
        slidesPerView: 3.04,
        spaceBetween: 10,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  }
};
</script>