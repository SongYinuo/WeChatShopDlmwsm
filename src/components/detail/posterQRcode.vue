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
              <el-col :span="22" :offset="1" class="brB1 pd2">
                <el-col :span="22" :offset="1" class="posterQRcodeRow pd2">
                    <img :src="posterQRcode.product.productImgUrl">
                    <el-col>
                      <div class="colorRed pd2">¥{{posterQRcode.product.price}}</div>
                      <div class="pd2">{{posterQRcode.product.title}}</div>
                      <div class="pd2">
                        <el-col :span="5">
                          <img class="mgT6 posterQRcodUimg" :src="posterQRcode.product.uImg">
                        </el-col>
                        <el-col :span="10" :offset="1" class="mgT10 posterQRcodUname colorYellow">{{posterQRcode.product.uName}}</el-col>
                        <el-col :span="8">
                          <img :src="posterQRcode.product.posterQRcodeImg">
                        </el-col>
                      </div>
                    </el-col>
                </el-col>
              </el-col>
              <el-col :span="22" :offset="1" class="appletOfWeChatInfo pd2">
                    <img src="../../../static/testImg/appletOfWeChat.jpg">
              </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      posterQRcode: {
        product: {
          id: "product100001",
          productImgUrl: "static/testImg/product-details01-3.jpg",
          price: 554,
          title: "给大家推荐一个非常适合旅游的景点",
          uImg: "static/testImg/oringe-2.jpg",
          uId: "UidA1000001",
          uName: "小兮",
          posterQRcodeImg: "static/testImg/posterQRcodeTest.jpg"
        }
      }
    };
  }
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/detail/details.less";
</style>