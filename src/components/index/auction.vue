
<template lang="html">
  <section>
  <div class="indexAuction mgTB2 pdB2">
    <div class="indexSwiperHeader">
      <el-row>
        <el-col :span="22" :offset="1">
              <el-col :span="24">
                <div class="headerTitle pdB2 pdT2">拍卖会</div>
              </el-col>
          </el-col>
        </el-row>
    </div>
    <el-row class="auctionImg">
        <el-col :span="24">
            <div>
                <router-link :to="{ name: '拍卖会页' }">
                    <img src="../../../static/testImg/banner02.png">
                </router-link>
            </div>
        </el-col>
        <el-col :span="22" :offset="1" class="auctionExplainRow brB1 pdB2">
          <el-col :span="16" :offset="4">
              <div class="auctionTitle">
                  <h1>拍卖会 | 满文满商</h1>
              </div>
          </el-col>
          <el-col :span="18" :offset="3">
              <p class="auctionExplain">第二十二季拍卖大会是空前未有的一场大型的拍卖会产品玲琅满目，欢迎大家准时参加。</p>
          </el-col>
        </el-col>
    </el-row>
    </div>
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
.indexAuction {
  .auctionImg {
    img {
      width: 100%;
    }
  }
  .auctionTitle {
    text-align: center;
    h1 {
      line-height: 2;
      .fz(font-size, 40);
      letter-spacing: 1px;
    }
  }
  .auctionExplain {
    line-height: 1.6;
    .fz(font-size, 18);
    color: #343434;
    text-align: center;
  }
}
</style>
