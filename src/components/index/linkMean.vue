<template lang="html">
  <el-row class="indexLinkMean brB10">
    <el-col :span="22" :offset="1" class="linkMeanRow">
      <div v-for="item in items" class="linkMeanCol mgTB2">
        <div class="grid-content bg-purple">
            <!-- <router-link :to="{ name: (item.text)}"> -->
                <router-link :to="{ name: (item.text),query: { title: item.text }}">
                <img :src="item.iconUrl">
                <span class="indexMeanText">{{item.text}}</span>
            </router-link>
        </div>
      </div>
    </el-col>
 </el-row>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          text: "红山11",
          iconUrl: "static/testImg/redMountain.png"
        },
        {
          text: "旅游555",
          iconUrl: "static/testImg/travel.png"
        },
        {
          text: "讲堂",
          iconUrl: "static/testImg/redMountain.png"
        },
        {
          text: "茶饮",
          iconUrl: "static/testImg/teaDrinks.png"
        },
        {
          text: "养生",
          iconUrl: "static/testImg/regimen.png"
        },
        {
          text: "顺格格",
          iconUrl: "static/testImg/shunPrincess.png"
        },
        {
          text: "哈百年",
          iconUrl: "static/testImg/haHundred.png"
        },
        {
          text: "交易中心",
          iconUrl: "static/testImg/tradingCenter.png"
        },
        {
          text: "绿色食品",
          iconUrl: "static/testImg/greenFood.png"
        },
        {
          text: "书画摄影",
          iconUrl: "static/testImg/greenFood.png"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.less";
.indexLinkMean {
  .linkMeanRow {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .linkMeanCol {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        margin-bottom: 6%;
        width: 80%;
        padding: 0 10%;
      }
      .indexMeanText {
        font-size: 14px;
        color: #333;
        margin-top: 10px;
        letter-spacing: 1px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
      }
    }
  }
}
</style>
