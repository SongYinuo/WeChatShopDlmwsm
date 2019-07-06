<template lang="html">
    <el-container>
      <el-header class="tittle">
          <div class="back" @click="$router.go(-1)">
              <i class="el-icon-arrow-left"></i>
          </div>
          {{title}}
      </el-header>
      <el-main class="userCoupon">
        <el-row>
          <el-col :span="22" :offset="1" v-for="k in userCouponInfo" class="couponRow">
             <router-link :to="{ name: 'vip详情',params: { id: k.article_id } }">
               <div v-if="is_vip===1">
                  <img :src="k.thumb">
                  <div class="pd2 text-alignCenter">{{k.title}}</div>
               </div>
             </router-link>
             <div v-if="is_vip===0" @click="dialogShows = true">
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
              <router-link :to="{ name: 'vip办理' }" class="colorWhite">
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
      title: "vip专区",
      dialogShows: false,
      userCouponInfo: [],
      is_vip: '',
      filters: {
        vipid: ""
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const that = this;
      const is_vip = that.$route.params.is_vip;
      that.is_vip = is_vip;
      axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/vip_list"
      })
        .then(function(res) {
          that.userCouponInfo = res.data.data;
          that.filters.vipid = is_vip;
        })
        .catch(function(error) {});
    }
  }
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