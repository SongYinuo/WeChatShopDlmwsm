<template lang="html">
  <section>
    <div class="indexComapnyRank">
       <div class="indexSwiperHeader">
          <el-row>
            <el-col :span="22" :offset="1">
              <el-col :span="16">
                <div class="headerTitle pdB2 pdT2">最具有影响力排名</div>
              </el-col>
              <el-col :span="8">
                <div class="indexSwiperHeaderMore">
                  <router-link :to="{ name: '最具有影响力排名页' }">
                      <a>查看更多<i class="el-icon-arrow-right"></i></a>
                  </router-link>
                </div>
              </el-col>
            </el-col>
          </el-row>
        </div>
    </div>
    <div class="rankingComapnyRow">
        <el-row class="companyRow">
          <el-col :span="22" :offset="1" class="brB1 pdB2">
                <el-col :span="15" class="">
                    <div>
                        <el-col :span="24" class="companyRowHearder mgTB2">
                            <img src="../../../static/testImg/first.png">
                            <span>公司第一名</span>
                        </el-col>
                        <el-col :span="24" class="firstCompanyPic">
                            <img src="../../../static/testImg/first.png" class="topIcon">
                            <img src="../../../static/testImg/firstCompany.png">
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="8" :offset="1">
                    <div>
                        <el-col :span="24" class="companyRowHearder mgTB2">
                            <img src="../../../static/testImg/second.png">
                            <span>公司第二名</span>
                        </el-col>
                        <el-col :span="24" class="secondCompanyPic">
                            <img src="../../../static/testImg/second.png" class="topIcon">
                            <img src="../../../static/testImg/secondCompany.png">
                        </el-col>
                    </div>
                    <div>
                        <el-col :span="24" class="companyRowHearder mgTB2">
                            <img src="../../../static/testImg/thirdly.png">
                            <span>公司第三名</span>
                        </el-col>
                        <el-col :span="24" class="thirdlyCompanyPic">
                            <img src="../../../static/testImg/thirdly.png" class="topIcon">
                            <img src="../../../static/testImg/secondCompany.png">
                        </el-col>
                    </div>
                </el-col>
                </el-col>
            </el-row>
    </div>
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
.rankingComapnyRow {
  overflow: hidden;
  .companyRow {
    .companyRowHearder {
      line-height: 12vw;
      height: 12vw;
      .fz(font-size, 28);
    }
  }
  .firstCompanyPic {
    position: relative;
    img {
      width: 100%;
      border-radius: 2vw;
    }
    .topIcon {
      top: 8px;
      left: 8px;
      width: 32px;
      height: 32px;
      position: absolute;
    }
  }
  .secondCompanyPic,
  .thirdlyCompanyPic {
    position: relative;
    img {
      width: 100%;
      border-radius: 2vw;
    }
    .topIcon {
      top: 8px;
      left: 8px;
      width: 32px;
      height: 32px;
      position: absolute;
    }
  }

}
</style>
