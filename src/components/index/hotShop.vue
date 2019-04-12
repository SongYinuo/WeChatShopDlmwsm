<template lang="html">
  <section>
    <div class="indexHotShop mgTB2">
        <div class="indexSwiperHeader">
          <el-row>
            <el-col :span="22" :offset="1">
              <el-col :span="16">
                <div class="headerTitle pdB2 pdT2">热卖商城</div>
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
              <el-col :span="22" :offset="1">
                  <div class="swiper-container">
                     <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="swiper in swiperList" :key="swiper.id">
                           <router-link :to="{name:'详情页'}">
                            <img :src="swiper.imgUrl" class="swiperListImg">
                          </router-link>
                          <div class="explainRow">
                            <el-row>
                              <el-col :span="14">
                                <div class="explainTitle">
                                    {{swiper.title}}
                                </div>
                              </el-col>
                              <el-col :span="4" :offset="1">
                                <div class="explainPrice">
                                  ￥{{swiper.price}}
                                </div>
                              </el-col>
                              <el-col :span="4">
                                <div class="explainOriginalPrice">
                                  <del>￥{{swiper.originalPrice}}</del>
                                </div>
                              </el-col>
                              <el-col :span="24">
                                <div class="explainAnnotation">
                                {{swiper.textAnnotation}}
                                </div>
                              </el-col>
                            </el-row>
                          </div>
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
export default {
  name: "",
  data() {
    return {
      swiperList: [
        {
          title: "1热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation: "1热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制1",
          price: "514",
          originalPrice: "759"
        },
        {
          title: "2热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://www.baidu.com",
          textAnnotation: "2热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制2",
          price: "515",
          originalPrice: "758"
        },
        {
          title: "3热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://www.baidu.com",
          textAnnotation: "3热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制3",
          price: "516",
          originalPrice: "759"
        },
        {
          title: "4热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation: "4热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制4",
          price: "517",
          originalPrice: "759"
        },
        {
          title: "5热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation: "5热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制5",
          price: "518",
          originalPrice: "759"
        },
        {
          title: "6热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "6热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制6",
          price: "519",
          originalPrice: "759"
        },
        {
          title: "7热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "7热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制7",
          price: "520",
          originalPrice: "759"
        },
        {
          title: "8热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "8热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制8",
          price: "514",
          originalPrice: "759"
        },
        {
          title: "9热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "9热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制9",
          price: "514",
          originalPrice: "759"
        },
        {
          title: "10热卖古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation:
            "10热卖古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制10",
          price: "514",
          originalPrice: "759"
        }
      ]
    };
  },
  mounted() {
    this._initSwiper();
  },
  methods: {
    _initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        pagination: ".swiper-pagination",
        paginationClickable: true,
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
@import "../../assets/index/indexSwiper.less";
</style>
