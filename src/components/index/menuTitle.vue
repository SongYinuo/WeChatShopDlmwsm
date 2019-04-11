<template lang="html">
  <div class="indexMenu">
    <div class="indexMenuTitle">
      <el-row class="indexMenuRow">
        <el-col :span="7"> 
          <div class="menuRowImg fr">
            <img src ="static/testImg/indexIcon-left.png">
          </div>
        </el-col>
        <el-col :span="10">
          <div class="menuRowTitle">
            <span>中华文化</span>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="menuRowImg fl">
            <img src ="static/testImg/indexIcon-right.png">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.indexMenu {
  .indexMenuTitle {
    line-height: 2.2;
    .indexMenuRow {
      .menuRowTitle {
        text-align: center;
        .fz(font-size, 64);
      }
      .menuRowImg {
        img {
          width: 50px;
          height: 55px;
        }
      }
    }
  }
}
</style>
