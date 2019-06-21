<template lang="html">
  <section class="detailsDtails">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="k in goods_images_list">
           <img :src="k.image_url">
        </mt-swipe-item>
        <!-- <span class="hotIcon bgRed pdLR2TB1 colorWhite" v-if="datas.state==='热销'">热销</span> -->
      </mt-swipe>
      <div class="back" @click="$router.go(-1)">
        <span class="icon-go"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:['goods_images_list'],
  data() {
    return {
    };
  },
  created(){
  var that = this
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
.detailsDtails {
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
}
</style>