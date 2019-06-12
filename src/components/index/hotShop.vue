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
                <router-link :to="{ name: '热卖商城页', params: { id: hotId, value: hotTitle } }">
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
                <div class="swiper-slide" v-for="swipers in swiperList" :key="swiper.goods_id">
                   <router-link :to="{ name: '详情页', params: { id: swipers.goods_id }}">
                    <img :src="swipers.original_img" class="swiperListImg">
                  </router-link>
                  <div class="explainRow">
                    <el-row>
                      <el-col :span="14">
                        <div class="explainTitle">
                          {{swipers.goods_name}}
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="1">
                        <div class="explainPrice">
                          ￥{{swipers.shop_price}}
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div class="explainOriginalPrice">
                          <del>￥{{swipers.originalPrice}}</del>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="explainAnnotation">
                          {{swipers.textAnnotation}}
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
import axios from "axios";
export default {
  data() {
    return {
      hotTitle: "热卖",
      hotId: "HotA10001",
      swiperList: []
    };
  },
  mounted() {
    this.getData();
    this._initSwiper();
  },
  methods: {
    _initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: 1.2,
        spaceBetween: 16,
        paginationClickable: true,
        spaceBetween: 12,
        observer: true,
        observeParents: true,
        autoplay: 10000,
        loop: true
      });
    },
    getData() {
      const thit = this;
      axios
        .get("/Api/Goods/goods_list" + "?is_hot=" + 1 + "&size=" + 4)
        .then(function(res) {
          thit.swiperList = res.data.data.goods_list;
        })
        .catch(function(error) {});
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";
.mint-swipe {
  width: 100%;
  height: 50vw;
  a,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.swiperListImg {
  height: 200px;
  border-radius: 8px;
}

.explainRow {
  padding: 2vw 0;
  line-height: 1.6;
  .fz(font-size, 32);
  border-bottom: 1px solid #eee;

  .explainTitle {
    text-align: left;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .explainPrice {
    float: right;
    margin-right: 4px;
    line-height: 1.5;
    .fz(font-size, 32);
    color: #e4393c;
  }

  .explainOriginalPrice {
    color: gray;
    line-height: 2;
    .fz(font-size, 22);
  }

  .explainAnnotation {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    color: gray;
    margin-right: 0;
    .fz(font-size, 22);
  }
}
</style>
