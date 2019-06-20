<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        分享二维码
        </el-header>
        <el-main class="posterQRcodeInfo">
            <el-row>
              <img :src="posterQRcode">
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posterQRcode: [
      ],
      newId:'',
    };
  },
  mounted() {
    this.getId();
  },methods: {
    getId(){
       const that = this;
      var newId = that.$route.params.id;
      that.$http
        .post("/Api/Goods/goods_qrcode"+"?goods_id="+ newId,{
          goods_id:newId,
        }) .then(function(res){
          that.posterQRcode = res.data.data;
        }).catch(function(error){});
    },
    
  },
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/detail/details.less";
.posterQRcodeInfo{
  img{
    width: 100%;
  }
}
</style>