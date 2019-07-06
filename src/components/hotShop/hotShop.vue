<template lang="html">
      <!-- <mt-header title="热卖商城">
      </mt-header> -->
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        热卖商城
        </el-header>
        <el-main class="hotShop">
            <el-row>
                <el-col :span="12" v-for="item in goods_list" class="hotShopRow pdTRBL2">
                    <router-link :to="{ name: '详情页', params: { id: item.goods_id } }">
                      <img :src="item.original_img">
                      <span class="hotShopIcon brR1 pdTRBL1 bgCOrange colorWhite">热门</span>
                      <div class="pd2">{{item.goods_name}}</div>
                      <div class="pd1">¥{{item.shop_price}}</div>
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
      // 商品列表
      goods_list:[],
    };
  },
  mounted() {
    let that = this
      axios
        .get("/Api/Goods/goods_list" + "?is_hot=" + 1)
        .then(function(res){
          that.goods_list = res.data.data.goods_list
        })
        .catch(function(error){
        });   

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
 