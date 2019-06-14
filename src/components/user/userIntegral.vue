<template lang="html">
    <el-container>
        <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
        积分明细
        </el-header>
        <el-row class="integral1" v-for="item in items">
            <img :src="item.images" class="images">
            <el-col class="bg"  :span="24">
                
                <el-col :span="8" :offset="8" class="textNum">
                    <span class="text">积分 </span><span  class="num">{{item.num}}</span>
                </el-col>
            </el-col>
            <el-col :span="22" :offset="1">
                <el-timeline :reverse="reverse">
                    <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                    <div class="grade">{{activity.grade}}</div>
                    <div class="content">{{activity.content}}</div>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
      reverse: false,
      activities: [
        {
           grade:"+1", 
          content: "连续签到1天奖励",
          timestamp: "2018-04-15"
        },
        {
         grade:"-100", 
          content: "购买商品【绿色大米】积分抵扣",
          timestamp: "2018-04-13"
        },
        {
          grade:"+80", 
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ],
      items: [
        {
          images: "static/testImg/qiandao@2x.png",
          num: "2100"
        }
      ]
    };
  }
};
</script>
<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";
.integral1 {
  .images {
    width: 100%;
    height: 120px;
  }
  .text {
    color: #ffffff;
    .fz(font-size, 26);
  }
  .num {
    color: #ffffff;
    .fz(font-size, 48);
  }
  .textNum {
    top: -75px;
    position: relative;
    text-align: center;
  }.grade{
      color: #313131;
      .fz(font-size,36)
  }.content{
      color: #313131;
      .fz(font-size,20)
  }.el-timeline-item__timestamp{
      color: #9E9E9E;
      .fz(font-size,20);
  }
}
</style>