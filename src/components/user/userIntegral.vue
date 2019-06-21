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
                    <span class="text">积分 </span><span  class="num">{{number}}</span>
                </el-col>
            </el-col>
            <el-col :span="22" :offset="1">
                <el-timeline :reverse="reverse" v-for="(activitie,index) in activities">
                    <el-timeline-item
        
                    :timestamp="activities[index].change_time|formatDate">
                    <div class="grade" v-if="(activities[index].pay_points)<0" style="color:red">{{activities[index].pay_points}}</div>
                    <div class="grade" v-else style="color:black">{{activities[index].pay_points}}</div>
                    <div class="content">{{activities[index].desc}}</div>
                    </el-timeline-item>
                    <!-- {{activities[index].change_time|formatDate}} -->
                </el-timeline>
            </el-col>
        </el-row>
    </el-container>
</template>
<script>
import axios from "axios";
import Axios from 'axios';
export default {
   filters: {
      formatDate: function (value) {
        let date = new Date(value * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        let s = date.getSeconds();
        s = s < 10 ? "0" + s : s;
        // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;//多种时间格式的拼接
        return h + ":" + m;
      }
    },
  data() {
    return {
      reverse: false,
      activities: [
      ],number:[],
      items: [
        {
          images: "static/testImg/qiandao@2x.png",
          // num: "2100"
        }
      ]
    };
  },mounted() {
    this.getImg();
  },
  methods: {
    getImg(){
       var newId = this.$route.params.id;
       
      const that = this;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      Axios({
        method:"get",
        headers:{
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url:"/Api/User/point_list"
      }).then(function(res){
          that.activities = res.data.data;
          that.number=newId;
      }).catch(function(error){});
      
    }
  },
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