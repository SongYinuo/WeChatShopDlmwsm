<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      物流跟踪
    </el-header>
    <el-main class="logisticsListInfo">
      <el-row class="brB10">
        <el-col :span="22" :offset="1" class="pd2">
          <!-- <el-col :span="6" class="logisticsListInfoImg">
            <img :src="productImg">
          </el-col> -->
          <el-col :span="17" :offset="1" class="pd2">
            <div>
              <span class="logisticsTitle colorGray lh1-6">物流状态：</span>
              <span>{{state}}</span>
            </div>
            <div>
              <span class="logisticsTitle colorGray lh1-6">承运来源：</span>
              <span>{{shipping_name}}</span>
            </div>
            <div>
              <span class="logisticsTitle colorGray lh1-6">运单编号：</span>
              <span>{{order_sn}}</span>
            </div>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset="1" class="pd8">
          <el-col>详细信息</el-col>
          <el-col class="pd4">
            <el-col :span="22" :offset="1">
              <el-timeline>
                <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color"
                  :size="activity.size" :timestamp="activity.AcceptTime">
                  <span class="title lh1-6">
                    {{activity.AcceptStation}}
                  </span>
                </el-timeline-item>
              </el-timeline>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      state: "",
      shipping_name: "",
      order_sn: "",
      productImg: "",
      activities: []
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      var id = that.$route.params.id;
      var order_id = that.$route.params.order_id;
      var state = that.$route.params.state;
      var shipping_name = that.$route.params.shipping_name;
      var order_sn = that.$route.params.order_sn;
      // var productImg = that.$route.params.productImg
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/order/order_detail?order_id=" + order_id
      })
        .then(function(res) {
          console.log(res)
          that.activities = res.data.data.express_info.Traces.reverse();
          that.state = state;
          that.shipping_name = shipping_name;
          that.order_sn = order_sn;
        })
        .catch({});
    }
  }
};
</script>

<style lang="less">
@import "../../../assets/index/style.less";
@import "../../../assets/header.less";
@import "../../../assets/user/user.less";
.el-main {
  padding: 0;
}
</style>
