<template lang="html">
  <el-container>
    <div class="user">
        <header class="userHeader pd4 brB10">
          <el-row>
            <el-col :span="23" :offset="1">
                    <div>
                        <el-col :span="4">
                          <span class="userHeadPortraitImg">
                            <img class="userHeaderImg" :src="userList.head_pic" v-if="userList.nickname!=''">
                            <img class="userHeaderImg" src="/static/testImg/defaultAvatar.png" v-if="userList.nickname===''">
                              <span class="userAuthenticationImg">
                                <router-link :to="{ name: 'Vip' }">
                                  <img src="/static/testImg/userVip.png" v-if="userList.is_vip===1">
                                </router-link>
                              </span>
                          </span>
                        </el-col>
                        <el-col :span="20">
                            <el-col :span="16" :offset="1">
                              <div class="userName pdT6" v-if="userList.nickname!=''">
                                {{userList.nickname}}
                              </div>
                              <div class="userName pdT6" v-if="userList.nickname===''">
                                <router-link :to="{ name: '登录页' }">
                                  <span>登录/注册</span>
                                </router-link>
                              </div>
                            </el-col>
                            <el-col :span="7" class="signIn signInBrown pdTRBL2 text-alignRight signInBorderR12" v-if="userList.nickname!=''">
                              <router-link :to="{ name: '签到'}">
                                <span class="colorWhite">每日签到</span>
                              </router-link>
                            </el-col>
                            <el-col :span="21" :offset="1" class="pd4">
                                <div v-if="userList.nickname===''">
                                  <el-col :span="6" v-for="k in userInfo.linkMenu">
                                      <div class="text-alignCenter colorGray userText pdT2">{{k.title}}</div>
                                  </el-col>
                                </div>
                                <div v-if="userList.nickname!=''">
                                  <el-col :span="8">
                                    <router-link :to="{ name: 'userExperienceExchange'}">
                                      <div class="text-alignCenter userNumTitle">{{userMenuInfo.article}}</div>
                                      <div class="text-alignCenter colorGray userText pdT2">心得</div>
                                    </router-link>
                                  </el-col>
                                  <!-- <el-col :span="6">
                                    <router-link :to="{ name: 'userLectureRoom'}">
                                      <div class="text-alignCenter userNumTitle">{{userMenuInfo.classroom_count}}</div>
                                      <div class="text-alignCenter colorGray userText pdT2">用户讲堂</div>
                                    </router-link>
                                  </el-col> -->
                                  <el-col :span="8">
                                    <router-link :to="{ name: 'userPaintingPhotography'}">
                                      <div class="text-alignCenter userNumTitle">{{userMenuInfo.paint_count}}</div>
                                      <div class="text-alignCenter colorGray userText pdT2">书画摄影</div>
                                    </router-link>
                                  </el-col>
                                <el-col :span="8">
                                    <router-link :to="{ name: 'userAntiqueAppraisal'}">
                                      <div class="text-alignCenter userNumTitle">{{userMenuInfo.prove_count}}</div>
                                      <div class="text-alignCenter colorGray userText pdT2">古董鉴定</div>
                                    </router-link>
                                  </el-col>
                                </div>
                            </el-col>
                        </el-col>
                    </div>
                <!-- <span>登录/注册</span> -->
              </el-col>
            </el-row>
        </header>
        <el-main style="padding-bottom: 60px;">
          <el-row>
          <div class="main">
            <el-row class="userMain pd2 userOrderForm">
              <el-col :span="22" :offset="1" class="brB1 pd4">
                <el-col :span="16" class="text-alignLeft orderFormTitle">我的订单</el-col>
                <router-link :to="{ name: '全部' }">
                  <el-col :span="8" class="text-alignRight orderFormMore letterSpacing1 colorGray">查看全部 ></el-col>
                </router-link>
              </el-col>
              <el-col :span="22" :offset="1" class="brB1 pd4">
                <el-col class="orderFormMenu pd1" v-for="o in userInfo.linkorderFormMenu">
                  <router-link :to="{ name: (o.text) }">
                    <div class="menuIcon"><img :src='o.iconUrl'></div>
                    <div class="menuTitle pd1 text-alignCenter lh1-6 mgT1 colorGray">{{o.text}}</div>
                  </router-link>
                </el-col>
              </el-col>
            </el-row>
          </div>
          <div class="coupon">
            <el-row>
              <el-col :span="22" :offset="1">
                <div class="couponRow pd1">
                  <!-- to="{ name: (k.routerLink), query:{ id:k.id }}" -->
                  <router-link :to="{ name: 'vip专区',params:{is_vip:userList.is_vip}}">
                    <img :src="userInfo.couponAdvertisingImg">
                  </router-link>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="textMenu">
            <el-row class="pd2 mgT2">
              <el-col :span="22" :offset="1" class="brB1 pd2">
                <el-col :span="16" class="text-alignLeft orderFormTitle textIcon">
                  <img src="../../static/testImg/user-generalize.png" style="margin-right:2px;margin-top:-2px;">
                  推广中心
                </el-col>
                <el-col :span="8" class="text-alignRight orderFormMore letterSpacing1 colorGray">
                  <router-link :to="{ name: '推广中心' }" style="margin-right:2px;margin-top:-2px;">
                    <span class="pdLR1">></span>
                  </router-link>
                </el-col>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22" :offset="1" class="pd2">
                <el-col :span="16" class="text-alignLeft orderFormTitle textIcon">
                  <img src="../../static/testImg/user-site.png">
                  收货地址
                </el-col>
                <el-col :span="8" class="text-alignRight orderFormMore letterSpacing1 colorGray">
                  <router-link :to="{ name: '收货地址' }">
                    <span class="pdLR1">></span>
                  </router-link>
                </el-col>
              </el-col>
            </el-row>
          </div>
          </el-row>
        </el-main>
        <!-- <v-baseline></v-baseline> -->
        <v-footer></v-footer>
      </div>
   </el-container>
</template>

<script>
import Baseline from "@/common/_baseline.vue";
import Footer from "@/common/_footer.vue";
import Axios from "axios";
export default {
  data() {
    return {
      // 用户信息
      userMenuInfo: {},
      userList: {},
      userInfo: {
        linkorderFormMenu: [
          {
            iconUrl: "static/testImg/user-all.png",
            text: "全部"
          },
          {
            iconUrl: "static/testImg/user-forCollection.png",
            text: "待付款"
          },
          {
            iconUrl: "static/testImg/user-shipments.png",
            text: "待发货"
          },
          {
            iconUrl: "static/testImg/user-take.png",
            text: "待收货"
          },
          // {
          //   iconUrl: "static/testImg/user-after.png",
          //   text: "退款/售后"
          // }
        ],
        couponAdvertisingImg: "static/testImg/vipBanner.jpg"
      }
    };
  },
  mounted() {
    this.getData();
    this.getUserData();
  },
  methods: {
    getData() {
      var that = this;
      Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/Api/index"
      }).then(function(res) {
        that.userList = res.data.data.user;
      });
    },
    getUserData() {
      var thit = this;
      Axios({
        methods: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "/Api/User/index"
      }).then(function(res) {
        thit.userMenuInfo = res.data.data;
      });
    }
  },
  components: {
    "v-baseline": Baseline,
    "v-footer": Footer
  }
};
</script>

<style lang="less">
@import "../assets/fz.less";
@import "../assets/index/style.less";
@import "../assets/user/icon/carstyle.css";
@import "../assets/user/user.less";
.user {
  .userName {
     .fz(font-size, 28);
  }
  .userHeaderImg {
    border-radius: 50%;
  }
  .userNumTitle {
    .fz(font-size, 36);
  }
  .userText {
    .fz(font-size, 24);
  }
  .userOrderForm {
    .orderFormMore {
      .fz(font-size, 28);
    }
    .orderFormMenu {
      width: 25%;
      .menuTitle {
        .fz(font-size, 28);
      }
      .menuIcon {
        img {
          width: 28px;
          height: 28px;
          margin: 0 auto;
          display: block;
        }
      }
    }
  }
  .coupon {
    .couponRow {
      img {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
  .textMenu {
    .textIcon {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
.el-main {
  padding: 0;
}
</style>
