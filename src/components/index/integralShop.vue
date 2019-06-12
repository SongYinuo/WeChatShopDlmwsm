<template lang="html">
 <el-container class="integral">
    <el-row class="title">
          <el-col :span="22" :offset="1">
            <div class="title">积分商城
            <router-link :to="{ name: '更多积分商品' }">
              <span class="more">查看更多></span>
            </router-link>
            </div>
          </el-col>
         <el-col :span="22" :offset="1" class="list" >
         <el-col :span="8"  v-for="swiper in swiperList.goods_list" class="listText">
          <router-link :to="{ name: '详情页',query:{id:swiper.goods_id} }">
            <img :src="swiper.original_img" >
            <div class="integralTitle overHidden">{{swiper.goods_name}}</div>
            <p class="integralTextAnnotation">{{swiper.exchange_integral}}</p>
            <span class="integralPrice">￥{{swiper.shop_price}}</span>
          </router-link>
        </el-col>
      </el-col>
    </el-row>
    </el-container>
</template>
<script>
import axios from "axios"
export default {
  // name: "",
  data() {
    return {
      swiperList: [
        
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList(){
     var that= this;
     axios({
       method:"get",
       hesders:{
          "Content-Type":"application/x-www-form-urlencoded"
       },
       url:"/Api/Goods/goods_list?size=3&is_point=1"
     })
     .then(function(res){
          that.swiperList=res.data.data;
     })
     .catch({})
     
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
.integral{
 img{
   width: 100%;
   height: 140px;
   border: #E9E9E9 solid 1px;
   border-radius: 4px;
 }.integralTitle{
   color: #313131;
   .fz(font-size, 28);
   font-weight: bold;
   margin-top: 10px;
 }.integralTextAnnotation{
   color: #DA4E44;
   .fz(font-size, 24);
 }.integralPrice{
    color: #DA4E44;
   .fz(font-size, 20);
   margin-bottom: 10px;
 }.title{
   color: #313131;
   .fz(font-size, 42);
   padding-bottom: 17px;
 }.more{
   color: #313131;
   .fz(font-size,20px);
   float: right;
   font-weight: 100;
   padding-right: 20px;
 }.list{
   border-bottom: #E9E9E9 1px solid;
   box-sizing: border-box;
 }.listText{
   padding-right: 10px;
   padding-bottom: 10px;
 }
}

</style>