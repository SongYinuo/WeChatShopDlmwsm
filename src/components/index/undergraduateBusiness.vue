
<template lang="html">
  <section>
    <div class="undergraduateBusinessRow">
        <div class="indexSwiperHeader">
           <el-row>
              <el-col :span="22" :offset="1">
                <el-col :span="24">
                    <div class="headerTitle pdT2">支持大学生创业</div>
                    <p>顺格格面膜定力相助</p>
                </el-col>
              </el-col>
            </el-row>
        </div>
    </div>
    <el-row class="auctionImg pdT2">
        <el-col :span="22" :offset="1">
          <div>
              <router-link :to="{ name: '支持大学生创业页' }">
                  <img src="../../../static/testImg/mianmo.png">
              </router-link>
          </div>
        </el-col>
    </el-row>
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
@import "../../assets/index/indexSwiper.less";
.auctionImg {
  img {
    width: 100%;
    border-radius: 2vw;
  }
}
</style>
