<template lang="html">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="k in datas.swiperUrl" :key="k.id">
           <img :src="k.img">
        </mt-swipe-item>
        <span class="hotIcon bgRed pdLR2TB1 colorWhite" v-if="datas.state==='热销'">热销</span>
      </mt-swipe>
      <div class="back" @click="$router.go(-1)">
        <span class="icon-go"></span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      datas: {
        // state: '热销',
        swiperUrl: [
          { img: "static/testImg/product-details01.jpg", text: "1" },
          { img: "static/testImg/product-details01-1.jpg", text: "2" },
          { img: "static/testImg/product-details01-2.jpg", text: "3" },
          { img: "static/testImg/product-details01-3.jpg", text: "4" }
        ]
      }
    };
  }
  // computed: {
  //   swiper () {
  //     return this.$store.state.detail.productDatas.swiper
  //   }
  // }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";

.swiper {
  width: 100%;
  position: relative;
  .mint-swipe {
    width: 100%;
    height: 100vw;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .hotIcon {
    position: absolute;
    left: 8vw;
    top: 8vw;
    .fz(font-size, 28);
    border-radius: 8px;
  }
  .back {
    width: 7vw;
    height: 7vw;
    position: absolute;
    left: 4vw;
    top: 4vw;
    // background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    text-align: center;
    span {
      display: inline-block;
      line-height: 7vw;
      .fz(font-size, 40);
      transform: rotate(-180deg);
      &::before {
        color: #333;
      }
    }

    &:active {
      transform: scale(1.3);
    }
  }
}
</style>
