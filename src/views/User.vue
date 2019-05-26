<template lang="html">
  <div class="user">
      <header class="userHeader pd4 brB10">
         <el-row>
           <el-col :span="23" :offset="1">
                  <div>
                      <el-col :span="4">
                        <span class="userHeadPortraitImg">
                          <img :src="userInfo.headPortraitUrl" v-if="userInfo.login===true">
                          <img src="../../static/testImg/defaultAvatar.png" v-if="userInfo.login===false">
                            <span class="userAuthenticationImg">
                              <router-link :to="{ name: 'Vip' }">
                                <img src="../../static/testImg/userVip.png" v-if="userInfo.vip===true">
                              </router-link>
                            </span>
                        </span>
                      </el-col>
                      <el-col :span="20">
                          <el-col :span="16" :offset="1">
                            <div class="userName pdT6" v-if="userInfo.login===true">
                              {{userInfo.name}}
                            </div>
                            <div class="userName pdT6" v-if="userInfo.login===false">
                              <router-link :to="{ name: '登录页' }">
                                <span>登录/注册</span>
                              </router-link>
                            </div>
                          </el-col>
                          <el-col :span="7" class="signIn signInBrown pdTRBL2 text-alignRight signInBorderR12" v-if="userInfo.login===true">
                            <router-link :to="{ name: '签到'}">
                              <span class="colorWhite">每日签到</span>
                            </router-link>
                          </el-col>
                          <el-col :span="21" :offset="1" class="pd4">
                              <div v-if="userInfo.login===false">
                                <el-col :span="6" v-for="k in userInfo.linkMenu">
                                    <div class="text-alignCenter colorGray userText pdT2">{{k.title}}</div>
                                </el-col>
                              </div>
                              <div v-if="userInfo.login===true">
                                <el-col :span="6" v-for="k in userInfo.linkMenu">
                                  <router-link :to="{ name: (k.routerLink), query:{ id:k.id }}">
                                    <div class="text-alignCenter userNumTitle">{{k.num}}</div>
                                    <div class="text-alignCenter colorGray userText pdT2">{{k.title}}</div>
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
              <router-link :to="{ name: '卡券' }">
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
              <img src="../../static/testImg/user-generalize.png">
              推广中心
            </el-col>
            <el-col :span="8" class="text-alignRight orderFormMore letterSpacing1 colorGray">
              <router-link :to="{ name: '推广中心' }">
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
      <!-- <v-baseline></v-baseline> -->
      <v-footer></v-footer>
    </div>
</template>

<script>
import Baseline from "@/common/_baseline.vue";
import Footer from "@/common/_footer.vue";
export default {
  data() {
    return {
      userInfo: {
        login: true,
        headPortraitUrl: "static/testImg/travel.png",
        name: "行骗艺术家",
        vip: true,
        linkMenu: [
          {
            title: "心得",
            num: 122,
            routerLink: "userExperienceExchange"
          },
          {
            title: "讲堂",
            num: 123,
            routerLink: "讲堂",
            id:"12000"
          },
          {
            title: "书画摄影",
            num: 162,
            routerLink: "书画摄影"
          },
          {
            title: "古董鉴定",
            num: 172,
            routerLink: "userAntiqueAppraisal"
          }
        ],
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
          {
            iconUrl: "static/testImg/user-after.png",
            text: "退款/售后"
          }
        ],
        couponAdvertisingImg: "static/testImg/pic1@2x.png"
      }
    };
  },
  components: {
    "v-baseline": Baseline,
    "v-footer": Footer
  }
};
</script>

<style lang="less" scoped>
@import "../assets/fz.less";
@import "../assets/index/style.less";
@import "../assets/user/icon/carstyle.css";
@import "../assets/user/user.less";
.user {
  .userNumTitle {
    .fz(font-size, 36);
  }
  .userText {
    .fz(font-size, 24);
  }
  .userOrderForm {
    .orderFormTitle {
    }
    .orderFormMore {
      .fz(font-size, 28);
    }
    .orderFormMenu {
      width: 20%;
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
</style>
