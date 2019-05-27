<template lang="html">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="swipe in swipeData">
        <router-link :to="{ name: '详情页'}">
          <img :src="swipe.ad_code">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      swipeData: []
    };
  },
  mounted() {
    this.getImg();
  },
 
  methods: {
    getImg() {
      const thit = this;
      axios
        .get("/Api/Index/advert")
        .then(function(res) {
          thit.swipeData = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
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
