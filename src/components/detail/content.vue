<template lang="html">
  <section class="detail-content">
    <el-row class="pdT2">
      <el-col :span="24" v-for="k in datas.swiperUrl">
        <img :src="k.img" class="contentUrl">
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  // computed:{
  //   content(){
  //     return this.$store.state.detail.productDatas.contentImgSrc
  //   }
  // }
  data() {
    return {
      datas: {
        swiperUrl: [
          { img: "static/testImg/product-details01.jpg", text: "1" },
          { img: "static/testImg/product-details01-1.jpg", text: "2" },
          { img: "static/testImg/product-details01-2.jpg", text: "3" },
          { img: "static/testImg/product-details01-3.jpg", text: "4" }
        ]
      }
    };
  }
};
</script>

<style lang="less">
@import "../../assets/detail/details.less";
</style>
