<template lang="html">
  <section class="section1 pd2">
    <div class="sectionRow">
      <span class="section1-title pd2">最具有影响力排名</span>
      <span class="sectionMore pd2">
        <a>
          查看更多
          <i></i>
        </a>
      </span>
    </div>
    <div class="rankingComapnyRow">
        <el-row class="companyRow">
                <el-col :span="14" class="left">
                    <div class="grid-content bg-purple">
                        <el-col :span="24" class="companyRowHearder">
                            <img src="../../../static/testImg/first.png">
                            <span>公司第一名</span>
                        </el-col>
                        <el-col :span="24" class="firstCompanyPic">
                            <img src="../../../static/testImg/firstCompany.png">
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="9" :offset="1" class="right">
                    <div class="grid-content bg-purple">
                        <el-col :span="24" class="companyRowHearder">
                            <img src="../../../static/testImg/second.png">
                            <span>公司第二名</span>
                        </el-col>
                        <el-col :span="24" class="secondCompanyPic">
                            <img src="../../../static/testImg/secondCompany.png">
                        </el-col>
                    </div>
                    <div class="grid-content bg-purple">
                        <el-col :span="24" class="companyRowHearder">
                            <img src="../../../static/testImg/thirdly.png">
                            <span>公司第三名</span>
                        </el-col>
                        <el-col :span="24" class="thirdlyCompanyPic">
                            <img src="../../../static/testImg/firstCompany.png">
                        </el-col>
                    </div>
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
@import "../../assets/index/style.css";
.pd2 {
  padding: 2vw 0;
}
.sectionRow {
  height: 16vw;
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
  .countDown {
    margin-left: 12px;
    ul {
      height: 6vw;
      line-height: 6vw;
      margin-top: 4px;
      li {
        width: 20px;
        height: 20px;
        line-height: 20px;
        color: #fff;
        background-color: #333;
        border-radius: 100%;
        display: block;
        float: left;
        .fz(font-size, 24);
        text-align: center;
      }
      li:nth-child(even) {
        color: #333;
        background-color: #fff;
        width: 10px;
      }
    }
  }
  .sectionMore {
    float: right;
  }
}
.rankingComapnyRow {
  padding: 0 2%;
//   height: 390px;
  overflow: hidden;
  .companyRow {
    border-bottom: 1px solid #eee;
    .companyRowHearder {
      line-height: 12vw;
      height: 12vw;
    }
  }
  .firstCompanyPic {
    padding: 2vw 0 4vw;
    border-radius: 2vw;
    img {
      width: 100%;
    }
  }
  .secondCompanyPic, .thirdlyCompanyPic {
      padding: 2vw 0 4vw;
      border-radius: 2vw;
      img {
          width: 100%;
          height: 113px;
      }
  }
}
</style>
