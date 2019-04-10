
<template lang="html">
  <section class="section1 pd2">
    <div class="sectionRow">
      <span class="section1-title pd2">拍卖会</span>
    </div>
    <!-- <div class="auctionImg">
        <img src="../../../static/testImg/banner02.png">
        <h1>拍卖会|满文满商</h1>
        <p>第二十二季拍卖大会是空前未有的一场大型的拍卖会产品玲琅满目，欢迎大家准时参加。</p>
    </div> -->
    <el-row class="auctionImg">
    <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <img src="../../../static/testImg/banner02.png">
        </div>
        </el-col>
    <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple-dark auctionTitle">
            <h1>拍卖会|满文满商</h1>
        </div>
    </el-col>
    <el-col :span="16" :offset="4">
        <p class="auctionExplain">第二十二季拍卖大会是空前未有的一场大型的拍卖会产品玲琅满目，欢迎大家准时参加。</p>
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
@import "../../assets/index/style.css";
.sectionRow {
  .section1-title {
    padding: 2vw 0;
    .fz(font-size, 48);
    color: #333;
    position: relative;
  }
  padding: 0 2%;
  span {
    display: block;
    float: left;
    height: 8vw;
    line-height: 8vw;
  }
}
.auctionImg {
  img {
    width: 100%;
  }
}
.auctionTitle {
    text-align: center;
    h1 {
        line-height: 2;
        .fz(font-size, 44);
        letter-spacing: 1px;
    }
}
.auctionExplain {
      line-height: 1.6;
      .fz(font-size, 18);  
      color: #343434;
}
</style>
