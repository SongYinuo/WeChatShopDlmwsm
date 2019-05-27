<template lang="html">
    <el-container>
      <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
              <i class="el-icon-arrow-left"></i>
          </div>
        vip专区
      </el-header>
      <el-main class="userCoupon">
        <el-row>
          <el-col :span="22" :offset="1" v-for="k in userCouponInfo" class="couponRow">
             <router-link :to="{ name: '卡券详情',query: { id: k.article_id } }" v-if="k.vip===true">
                <img :src="k.thumb">
                <div class="pd2 text-alignCenter">{{k.title}}</div>
             </router-link>
             <div @click="dialogShows = true">
                <img :src="k.thumb">
                <div class="pd2 text-alignCenter">{{k.title}}</div>
             </div>
          </el-col>
        </el-row>
        <el-dialog title="提示" :visible.sync="dialogShows" width="80%">
          <span>此栏目只针对VIP用户，是否升级为VIP用户？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogShows = false">取 消</el-button>
            <el-button type="primary" @click="dialogShows = false">
              <router-link :to="{ name: '推荐提现' }" class="colorWhite">
                确 定
              </router-link>
            </el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      dialogShows: false,
      userCouponInfo: []
      // userCouponInfo: {
      //   arrayInfo: [
      //     // {
      //     //   couponId: "couponId1000001",
      //     //   couponUrl: "static/testImg/pic1@2x.png",
      //     //   title: "大牌制作中华上下五千年",
      //     //   vip: true
      //     // },
      //     // {
      //     //   couponId: "couponId1000002",
      //     //   couponUrl: "static/testImg/tourism02.jpg",
      //     //   title: "大牌制作中华上下五千年1",
      //     //   vip: false
      //     // }
      //   ]
      // }
    };
  },mounted(){
    this.getData();
  },methods: {
    getData(){
      const that = this;
      axios
      .get("/Api/User/vip_list")
      .then(function(res){
        console.log(res)
        // console.log(res.data.data.article_id)
        that.userCouponInfo = res.data.data;

      })
      .catch(function(error){
        console.log(error)
      });
    },
  },
};
</script>

<style lang="less">
@import "../../assets/index/style.less";
@import "../../assets/header.less";
@import "../../assets/user/user.less";
.el-main {
  padding: 0;
}
</style>