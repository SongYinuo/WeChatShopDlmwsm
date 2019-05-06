<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
          卡券详情
        </el-header>
        <el-main class="couponDetails">
            <el-row>
                <el-col>
                     <video :src="infoDetails.videoUrl" controls="controls" class="videoUrl"></video>
                </el-col>
                <el-col :span="22" :offset="1">
                    <div class="pd2 couponTitle">{{infoDetails.title}}</div>
                    <div class="pd2 lh1-6 couponInformation">{{infoDetails.information}}</div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      infoDetails: {
        couponId: "couponId1000001",
        videoUrl: "http://www.runoob.com/try/demo_source/movie.mp4",
        title: "大牌制作中华上下五千年",
        information:
          "春天天气真好花儿都开了杨柳树枝对着我们弯弯腰蝴蝶姑娘飞来了蜜蜂嗡嗡叫小白兔儿一跳一跳又一跳春天天气真好花儿都开了杨柳树枝对着我们弯弯腰"
      }
    };
  }
};
</script>

<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
.el-main {
  padding: 0;
}
</style>