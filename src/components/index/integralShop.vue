<template lang="html">
 <el-container class="integral">
    <el-row class="title" style="padding-top:24px">
          <el-col :span="22" :offset="1">
            <div class="title">积分商城
            <router-link :to="{ name: '更多积分商品' }">
              <span class="more">查看更多<i class="el-icon-arrow-right"></i></span>
            </router-link>
            </div>
          </el-col>
         <el-col :span="22" :offset="1" class="list brB1">
         <el-col :span="8"  v-for="swiper in swiperList.goods_list" class="listText">
          <router-link :to="{ name: '详情页',params:{id:swiper.goods_id} }">
            <img :src="swiper.original_img" >
            <div class="integralTitle overHidden pd2">{{swiper.goods_name}}</div>
            <p class="integralTextAnnotation overHidden">{{swiper.exchange_integral}}积分抵{{swiper.exchange_integral/10}}元</p>
            <span class="integralPrice">￥{{swiper.shop_price}}</span>
          </router-link>
        </el-col>
      </el-col>
    </el-row>
    </el-container>
</template>
<script>
import axios from "axios";
export default {
  // name: "",
  data() {
    return {
      swiperList: [],
      num: ''
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      var that = this;
      axios({
        method: "get",
        hesders: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Goods/goods_list?size=3&is_point=1"
      })
        .then(function(res) {
          that.swiperList = res.data.data;
          that.num = res.data.data.exchange_integral / 10;
        })
        .catch({});
    }
  }
};
</script>
<style lang="less">
@import "../../assets/header.less";
@import "../../assets/index/style.less";
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";
.integral {
  img {
    width: 100%;
    height: 140px;
    border: #e9e9e9 solid 1px;
    border-radius: 4px;
  }
  .integralTitle {
    color: #313131;
    .fz(font-size, 28);
  }
  .integralTextAnnotation {
    color: #da4e44;
    .fz(font-size, 28);
  }
  .integralPrice {
    color: #da4e44;
    .fz(font-size, 24);
    margin-bottom: 10px;
  }
  .title {
    width: 100%;
    color: #313131;
    .fz(font-size, 42);
    padding-bottom: 17px;
  }
  .more {
    .fz(font-size, 34px);
    float: right;
    //  padding-right: 20px;
    color: #666;
  }
  .list {
    box-sizing: border-box;
  }
  .listText {
    padding-right: 10px;
    padding-bottom: 10px;
  }
}
</style>