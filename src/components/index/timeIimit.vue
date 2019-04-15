<template lang="html">
  <section>
    <div class="indexTimeLimit mgTB2">
        <div class="indexSwiperHeader">
          <el-row>
            <el-col :span="22" :offset="1">
              <el-col :span="8">
                <div class="headerTitle pdB2 pdT2">限时抢购</div>
              </el-col>
              <el-col :span="8">
                <div class="countDown">
                  <span class="countDown pd2">
                    <ul>
                      <li>10</li>
                      <li>:</li>
                      <li>20</li>
                      <li>:</li>
                      <li>32</li>
                    </ul>
                  </span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="indexSwiperHeaderMore">
                  <router-link :to="{ name: '限时抢购页' }">
                      <a>查看更多<i class="el-icon-arrow-right"></i></a>
                  </router-link>
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
                           <router-link :to="{ name: '详情页', query: { id: swiper.id }}">
                            <img :src="swiper.imgUrl" class="swiperListImg">
                          </router-link>
                          <div class="explainRow">
                            <el-row>
                              <el-col :span="17">
                                <div class="explainTitle">
                                    {{swiper.title}}
                                </div>
                              </el-col>
                              <el-col :span="3" :offset="1">
                                <div class="explainPrice">
                                  ¥{{swiper.price}}
                                </div>
                              </el-col>
                              <el-col :span="3">
                                <div class="explainOriginalPrice textar">
                                  <del>¥{{swiper.originalPrice}}</del>
                                </div>
                              </el-col>
                              <el-col :span="24">
                                <div class="explainAnnotation lh4 pdT2">
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
import { Lazyload } from "mint-ui";
export default {
  // name: "",
  // props: {
  //   banner: {
  //     type: String,
  //     default: ""
  //   },
  //   list: {
  //     type: Array,
  //     default: function() {
  //       return [];
  //     }
  //   }
  // },

  data() {
    return {
      swiperList: [
        {
          id: 'A10001',
          title: "1古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation: "1古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制1",
          price: "414",
          originalPrice: "659"
        },
        {
          id: 'A10002',
          title: "2古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://www.baidu.com",
          textAnnotation: "2古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制2",
          price: "415",
          originalPrice: "658"
        },
        {
          id: 'A10003',
          title: "3古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://www.baidu.com",
          textAnnotation: "3古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制3",
          price: "416",
          originalPrice: "659"
        },
        {
          id: 'A10004',
          title: "4古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation: "4古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制4",
          price: "417",
          originalPrice: "659"
        },
        {
          id: 'A10005',
          title: "5古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation: "5古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制5",
          price: "418",
          originalPrice: "659"
        },
        {
          id: 'A10006',
          title: "6古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "6古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制6",
          price: "419",
          originalPrice: "659"
        },
        {
          id: 'A10007',
          title: "7古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "7古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制7",
          price: "420",
          originalPrice: "659"
        },
        {
          id: 'A10008',
          title: "8古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "8古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制8",
          price: "414",
          originalPrice: "659"
        },
        {
          id: 'A10009',
          title: "9古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "htttp://www.baidu.com",
          textAnnotation: "9古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制9",
          price: "414",
          originalPrice: "659"
        },
        {
          id: 'A10010',
          title: "10古典轻奢瓷器艺术品陈设饰品",
          imgUrl: "https://t10.baidu.com/it/u=3605678574,1074337534&fm=76",
          url: "https://m.vip.com",
          textAnnotation: "10古典轻奢瓷器艺术品陈设饰品,茱萸光滑,高端定制10",
          price: "414",
          originalPrice: "659"
        }
      ]
    };
  },
  mounted() {
    window.scrollTo(0,0);
    this._initSwiper();
  },
  methods: {
    _initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        spaceBetween: 12
      });
    },
    open: function(id) {
      this.$router.push({ path: "detail", query: { id: id } });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";
</style>
