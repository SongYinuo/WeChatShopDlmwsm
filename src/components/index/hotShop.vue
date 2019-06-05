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
                         <div class="swiper-slide" v-for="swiper in goods_list">
                           <router-link :to="{ name: '详情页', query: { id: swiper.goods_id}}">
                            <img :src="swiper.original_img" class="swiperListImg">
                          </router-link>
                          <div class="explainRow">
                            <el-row>
                              <el-col :span="14">
                                <div class="explainTitle">
                                    {{swiper.goods_name}}
                                </div>
                              </el-col>
                              <el-col :span="4" :offset="1">
                                <div class="explainPrice">
                                  ￥{{swiper.shop_price}}
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
  name: "",
  data() {
    return {
      hotTitle: '热卖',
      hotId: 'HotA10001',
      // 热卖榜
      goods_list:[],
    };
  },
  mounted() {
    this._initSwiper();
    this.getData();
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
     getData(){
    let that = this
      axios
        .get("/Api/Goods/goods_list" + "?is_hot=" + 1 +'&size=' + 4)
        .then(function(res){
          // console.log(res)
          console.log(res)
          console.log("1111")
          that.goods_list = res.data.data.goods_list
        })
        .catch(function(error){
          // console.log(error)
        });   
  }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";
</style>
