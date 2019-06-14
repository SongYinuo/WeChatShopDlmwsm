<template lang="html">
  <el-container>
    <el-header class="tittle">
      <div class="back" @click="$router.go(-1)">
        <i class="el-icon-arrow-left"></i>
      </div>
      {{title}}
    </el-header>
    <el-main class="timeLimit">
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="tabKey" type="card">
            <el-tab-pane v-for="(k,index) in datas" :label="k.start_time|formatDate" :name="k.name"
              style="position: relative, z-index: -1">
              <el-row class="timeLimitRow pdB2" v-if="k.prom_status===1||k.prom_status===2"
                style="position: relative, z-index:1">
                <span v-if="k.prom_status===1" class="spanText text-alignCenter">抢购中</span>
                <span v-if="k.prom_status===2" class="spanText text-alignCenter">即将开枪</span>
                <el-col :span="24">
                  <el-col :span="24" class="timeLimitAdvertisingImg">
                    <img :src="k.thumb">
                  </el-col>
                  <el-col :span="24">
                    <p class="stateText bgGray colorWhite pdTRBL1" v-if="k.prom_status===1">疯抢中</p>
                    <p class="stateText bgGray colorWhite pdTRBL1" v-if="k.prom_status===2">即将开始</p>
                    <!-- <p class="stateText bgGray colorWhite pdTRBL1">已抢光</p> -->
                  </el-col>
                </el-col>
              </el-row>
              <el-row class="timeLimitproductRow">
                <el-col :span="22" :offset="1" v-for="o in k.goods_list" class="pd2">
                  <el-col :span="7" class="productImg">
                    <img :src="o.goods_image">
                  </el-col>
                  <el-col :span="16" :offset="1" class="productText">
                    <router-link :to="{ name: '详情页', params: { id: o.link_id } }">
                      <div class="pdT4">
                        <div class="title overHidden">{{o.goods_name}}</div>
                        <div class="explainTitle colorGray">{{o.explanatory}}</div>
                        <el-row>
                          <el-col :span="16">
                            <div class="price colorRed letterSpacing1">¥{{o.goods_price}}</div>
                            <div class="originalPrice letterSpacing1"><del>¥{{o.shop_price}}</del></div>
                          </el-col>
                          <el-col :span="7" :offset="1">
                            <div class="rushBtn">
                              <el-button type="danger" class="btn" v-if="o.store_count>0">抢购中</el-button>
                              <el-button type="info" class="btn" v-if="o.store_count<=0">去看看</el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </router-link>
                  </el-col>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import axios from "axios";
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
        title: "限时抢购",
        tabKey: "",
        datas: {
          timeLimits: {}
        }
      };
    },
    mounted() {
      window.scrollTo(0, 0);
      this.getData();
    },
    methods: {
      getData() {
        const thia = this;
        axios({
          methods: "get",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: "/Api/Index/prom_list"
        }).then(function (res) {
          thia.datas = res.data.data;
          thia.tabKey = thia.datas[0].name;
        });
      }
    }
  };

</script>

<style lang="less">
  @import "../../assets/index/style.less";
  @import "../../assets/header.less";
  @import "../../assets/timeLimit/timeLimit.less";

  .el-main {
    padding: 0;
  }

  .timeLimit {
    .el-tabs__header {
      margin: 0;
      position: relative;
      z-index: 1;
    }

    .el-tabs__nav-scroll {
      // border-top: 1px solid #E4E7ED;
    }

    .el-tabs--card>.el-tabs__header .el-tabs__nav {
      border: none;
    }

    .el-tabs--card>.el-tabs__header .el-tabs__item {
      border: none;
    }

    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
      background-color: red;
      color: #fff;
      border-top: 1px solid red;
    }

    .el-tabs__nav-wrap.is-scrollable {
      padding: 0;
    }

    .el-tabs__nav-prev {
      display: none;
    }

    .el-tabs__nav-next {
      display: none;
    }

    .el-tabs__item {
      line-height: 24px;
    }

    .spanText {
      position: absolute;
      margin-top: -20px;
      z-index: 100;
      left: 20px;
      .fz(font-size, 20);
      color: white;
    }

    .show {
      display: block;
    }
  
  }

</style>
