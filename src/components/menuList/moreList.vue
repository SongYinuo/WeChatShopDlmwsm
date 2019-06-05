<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      更多列表
    </el-header>
    <el-main class="hotShop">
      <el-row>
        <el-col :span="8" v-for="(k,index) in datas" class="hotShopRow pdTRBL2">
          <router-link :to="{ name: '详情页',query: { id: k.goods_id,title:k.goods_name } }">
            <img :src="k.original_img">
            <div class="pd2 overHidden">{{k.goods_name}}</div>
            <div class="pd1 colorRed">¥{{k.shop_price}}</div>
          </router-link>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      datas: [
        // hotShopListArray: [
        //   // {
        //   //   id: "hotShop10001",
        //   //   imgurl: "static/testImg/product-details01-3.jpg",
        //   //   title: "【来自农家院】产的优质绿色大米 10kg 两代包邮",
        //   //   price: 540
        //   // }
        // ]
     ],
    
    };
  },
  mounted(){
      this.getImg();
  },
  methods:{
     getImg(){
       var newId = this.$route.query.id;
       const that = this;
       axios
       .get("/Api/Goods/goods_list" + "?id=" + newId)
       .then(function(res){
         console.log(res.data.data.goods_list);
         that.datas=res.data.data.goods_list;
       }).catch(function(error){

       })
     }
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/hotShop/hotShop.less";

.el-main {
  padding: 0;
}
</style>
