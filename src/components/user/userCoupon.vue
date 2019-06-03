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
            <!--   v-if="k.vip===true" -->
             <router-link :to="{ name: 'vip详情',query: { id: k.article_id } }">
                <img :src="k.thumb">
                <div class="pd2 text-alignCenter">{{k.title}}</div>
             </router-link>
             <div @click="dialogShows = true">
                <img :src="k.thumb">
                <div class="pd2 text-alignCenter">{{k.title}}</div>
             </div>
          </el-col>
        </el-row>
        <el-dialog title="提示" :visible.sync="dialogShows" width="80%" v-if="filters.vipid==''">
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
      userCouponInfo: [],
      // 是否接收到上一个页面传过来的参数
     filters: {
         vipid:''  //这里名字根据实际情况定义
       }
    };
  },mounted(){
    this.getData();
  },methods: {
    getData(){
      // var newId = this.$route.query.id;
      const that = this;
      var is_vip = that.$route.query.is_vip;
      axios.get("/Api/User/vip_list").then(function(res){
        console.log(res)
        // console.log(res.data.data.article_id)
        that.userCouponInfo = res.data.data;
        console.log("1255")
        console.log(that.$route)
        is_vip=that.$route.query.is_vip
        that.filters.vipid = is_vip
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