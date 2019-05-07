<template lang="html">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="swipe in swipeData">
        <router-link :to="{ name: '详情页'}">
          <img :src="swipe.imgUrl">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  data() {
    return {
      swipeData: [
        {
          title: "轮播一",
          imgUrl: "static/testImg/banner01.png",
          id: "banner1"
        },
        {
          title: "轮播二",
          imgUrl: "static/testImg/banner02.png",
          id: "banner2"
        },
        {
          title: "轮播三",
          imgUrl: "static/testImg/banner01.png",
          id: "banner3"
        },
        {
          title: "轮播四",
          imgUrl: "static/testImg/banner02.png",
          id: "banner4"
        },
        {
          title: "轮播五",
          imgUrl: "static/testImg/banner01.png",
          id: "banner5"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  width: 100%;
  height: 50vw;
  a,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
