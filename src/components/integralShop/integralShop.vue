<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      更多积分商品
    </el-header>
    <el-row class="morePoints">
      <el-col :span="22" :offset="1" v-for="swiper in swiperList.goods_list" class="list">
        <router-link :to="{ name: '详情页',query:{id:swiper.goods_id} }">
          <el-col :span="8">
            <img :src="swiper.original_img">
          </el-col>
          <el-col :span="14" :offset="2">
            <div class="listTitle">{{swiper.goods_name}}</div>
            <div class="listTextAnnotation">{{swiper.exchange_integral}}</div>
            <div class="listPrice">￥{{swiper.shop_price}}</div>
          </el-col>
          </router-link>
      </el-col>
    </el-row>
   </el-container>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      swiperList: [
      ]
    };
  },
  mounted() {
   this.getlist();
  },
  methods: {
    getlist(){
      var that =this;
      axios({
        method:"get",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        url:"/Api/Goods/goods_list?is_point=1"
      })
      .then(function(res){
        that.swiperList = res.data.data;
      })
      .catch({})
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/header.less";
@import "../../assets/index/style.less";
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";
.morePoints{
  img{
    width: 100%;
    border-radius: 4px;
  }.list{
    padding: 15px 0;
    border-bottom: 1px solid #E9E9E9;
  }.listTitle{
    color: #313131;
    .fz(font-size,28px);
    font-weight: bold;
    margin-top: 24px;
    margin-bottom: 10px;
  }.listTextAnnotation{
    color: #DA4E44;
    .fz(font-size,32);
    font-weight: bold;
    margin-bottom: 9px;
  }.listPrice{
    color: #DA4E44;
     .fz(font-size,28);


  }

}
</style>